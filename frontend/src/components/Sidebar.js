import React, { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'
import { listProductCategories } from '../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import { signout } from '../actions/userActions'
import styled from 'styled-components'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { FaSearch } from 'react-icons/fa'
const Sidebar = (props) => {
  const [name, setName] = useState('')
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  const [isDropDownItemsOpen, setShowInfo] = useState(false)

  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin
  const dispatch = useDispatch()
  const signoutHandler = () => {
    dispatch(signout())
  }

  const productCategoryList = useSelector((state) => state.productCategoryList)
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList
  useEffect(() => {
    dispatch(listProductCategories())
  }, [dispatch])

  const submitHandler = (e) => {
    e.preventDefault()
    props.history.push(`/search/name/${name}`)
  }
  return (
    <Wrapper
      className={`${
        isSidebarOpen ? 'sidebar-wrapper open' : 'sidebar-wrapper'
      }`}
    >
      <div className='overlay'></div>
      <div className='inner-content-container'>
        <div className='btn-close-sidebar'>
          <FaTimes onClick={closeSidebar} />
        </div>

        <form>
          <input
            type='search'
            name='q'
            id='q'
            placeholder='Search product...'
            onChange={(e) => setName(e.target.value)}
          />
          <button className='search-btn' onClick={submitHandler}>
            <FaSearch />
          </button>
        </form>

        <ul className='mobile-menu'>
          <li className='menu-item'>
            <Link to='/' onClick={closeSidebar}>
              Home
            </Link>
          </li>
          <li className='menu-item'>
            <Link to='/about' onClick={closeSidebar}>
              About us
            </Link>
          </li>
          <li className='menu-item'>
            <Link to='/products' onClick={closeSidebar}>
              Products
            </Link>
          </li>
          {userInfo && userInfo.isAdmin && (
            <li className='menu-item'>
              <div className='container'>
                <span className='menu-btn'> Admin</span>
                <button
                  className='dropdown-btn'
                  onClick={() => setShowInfo(!isDropDownItemsOpen)}
                >
                  {isDropDownItemsOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
              </div>

              {isDropDownItemsOpen && (
                <ul>
                  <li>
                    <Link to='/dashboard' onClick={closeSidebar}>
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to='/productlist' onClick={closeSidebar}>
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link to='/orderlist' onClick={closeSidebar}>
                      Orders
                    </Link>
                  </li>
                  <li>
                    <Link to='/userlist' onClick={closeSidebar}>
                      Users
                    </Link>
                  </li>
                  <li>
                    <Link to='/support' onClick={closeSidebar}>
                      Support
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          )}

          {userInfo && userInfo.isSeller && (
            <li className='menu-item'>
              <div className='container'>
                <span className='menu-btn'>Seller</span>
                <button
                  className='dropdown-btn'
                  onClick={() => setShowInfo(!isDropDownItemsOpen)}
                >
                  {isDropDownItemsOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
              </div>

              {isDropDownItemsOpen && (
                <ul>
                  <li>
                    <Link to='/productlist/seller' onClick={closeSidebar}>
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link to='/orderlist/seller' onClick={closeSidebar}>
                      Orders
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          )}

          <li className='menu-item'>
            <div className='container'>
              <span className='menu-btn'>Category</span>
              <button
                className='dropdown-btn'
                onClick={() => setShowInfo(!isDropDownItemsOpen)}
              >
                {isDropDownItemsOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </button>
            </div>

            {isDropDownItemsOpen && (
              <ul>
                {categories.map((category) => (
                  <li>
                    <Link
                      key={category}
                      to={`/search/category/${category}`}
                      onClick={closeSidebar}
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
        {userInfo ? (
          <div className='register-btn-container'>
            <button onClick={signoutHandler}>Sign out</button>
          </div>
        ) : (
          <div className='register-btn-container'>
            <Link to='/signin' onClick={closeSidebar}>
              Sign in
            </Link>
            <Link to='/register' onClick={closeSidebar}>
              Sign up
            </Link>
          </div>
        )}
      </div>
    </Wrapper>
  )
}

export default Sidebar

const Wrapper = styled.aside`
  .inner-content-container {
    background: var(--clr-white);
    width: 100%;
    height: 100%;
    position: relative;
    transition: 0.4s;
    color: var(--clr-blue);
  }
  form {
    position: relative;
    margin-bottom: 10px;
  }
  input {
    color: #666;
    font-size: 13px;
    width: 100%;
    height: 4rem;
    border: none;
    padding: 0 40px 0 10px;
    background: #f2f2f2;
  }
  .mobile-menu {
    overflow-y: scroll;
  }
  .search-btn {
    top: 0;
    right: 0;
    width: 4rem;
    height: 4rem;
    line-height: 42px;
    font-size: 20px;
    color: #fff;
    position: absolute;
    background: var(--clr-yellow);
    border: none;
  }

  .mobile-menu li > a:hover {
    color: var(--clr-yellow);
  }

  .mobile-menu li ul li a {
    font-size: 1.5rem;
    margin-left: 8px;
    text-transform: capitalize;
  }

  .menu-item {
    position: relative;
    margin: 2rem 0;
  }

  .overlay {
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }

  @media only screen and (max-width: 479px) {
    .inner-content-container {
      width: 260px;
      padding: 15px;
    }
  }
  .btn-close-sidebar {
    top: 0;
    left: 100%;
    width: 50px;
    height: 50px;
    font-size: 30px;
    background-color: var(--clr-yellow);
    color: #fff;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    position: absolute;
    transition: 0.4s;
  }

  @media only screen and (max-width: 479px) {
    .btn-close-sidebar {
      width: 40px;
      height: 40px;
      font-size: 20px;
      line-height: 40px;
    }
  }
  .btn-close-sidebar svg {
    transform: rotate(0);
    transition: 0.4s;
  }

  .btn-close-sidebar:hover svg {
    transform: rotate(-90deg);
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    width: 3rem;
    height: 3rem;
    background: #eae6eb;
    line-height: 3.5rem;
    border-radius: 50%;
    color: var(--clr-blue);
    cursor: pointer;
    margin-left: 1rem;
    align-self: center;
  }

  .register-btn-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .register-btn-container a,
  .register-btn-container button {
    margin-bottom: 10px;
    background: #eef0f1;
    border: 1px solid #e1e1e1;
    border-radius: 5px;
    color: var(--clr-blue);
    display: block;
    font-size: 12px;
    font-weight: 500;
    height: 40px;
    line-height: 36px;
    padding: 0 25px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    transition: var(--transition);
  }

  .register-btn-container :first-child {
    margin-right: 0.8rem;
  }
`
