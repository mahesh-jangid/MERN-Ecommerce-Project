import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { deleteOrder, listOrders } from '../actions/orderActions'
import Loading from '../components/Loading'
import Message from '../components/Message'
import { ORDER_DELETE_RESET } from '../constants/orderConstants'
import { formatPrice } from '../utils/helpers'

export default function OrderListPage(props) {
  const sellerMode = props.match.path.indexOf('/seller') >= 0
  const orderList = useSelector((state) => state.orderList)
  const { loading, error, orders } = orderList
  const orderDelete = useSelector((state) => state.orderDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = orderDelete

  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: ORDER_DELETE_RESET })
    dispatch(listOrders({ seller: sellerMode ? userInfo._id : '' }))
  }, [dispatch, sellerMode, successDelete, userInfo._id])
  const deleteHandler = (order) => {
    if (window.confirm('Are you sure to delete?')) {
      dispatch(deleteOrder(order._id))
    }
  }
  return (
    <Wrapper>
      <div className='section-center'>
        <h1 className='heading'>
          <span>Your</span>orders
        </h1>
        <div className='row'>
          {loadingDelete && <Loading />}
          {errorDelete && (
            <Message
              variant='danger'
              message='Could not delete Order'
              name='hide'
            />
          )}
          {loading ? (
            <Loading />
          ) : error ? (
            <Message variant='danger' message={error} name='hide' />
          ) : (
            <table className='table'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>USER</th>
                  <th>DATE</th>
                  <th>TOTAL</th>
                  <th>PAID</th>
                  <th>DELIVERED</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.user.name}</td>
                    <td>{order.createdAt.substring(0, 10)}</td>
                    <td>{formatPrice(order.totalPrice)}</td>
                    <td>
                      {order.isPaid ? order.paidAt.substring(0, 10) : 'No'}
                    </td>
                    <td>
                      {order.isDelivered
                        ? order.deliveredAt.substring(0, 10)
                        : 'No'}
                    </td>
                    <td>
                      <button
                        type='button'
                        onClick={() => {
                          props.history.push(`/order/${order._id}`)
                        }}
                      >
                        Details
                      </button>
                      <button
                        type='button'
                        className='small'
                        onClick={() => deleteHandler(order)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 12rem 0;

  .alert {
    text-align: center;
  }

  button {
    background: #e4e4e4;
    color: var(--clr-blue);
    margin: 0.4rem;
    padding: 0.8rem;
  }

  .row {
    overflow-x: auto;
  }
`
