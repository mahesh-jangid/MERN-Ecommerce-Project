// import React, { useEffect } from "react";
// import { FaTimes } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import { addToWishList, removeFromWishList } from "../actions/wishListActions";
// import Message from "../components/Message";
// import { formatPrice } from "../utils/helpers";

// const WishListPage = (props) => {
//   const productId = props.match.params.id;
//   const qty = props.location.search
//     ? Number(props.location.search.split("=")[1])
//     : 1;
//   const wishList = useSelector((state) => state.wishList);
//   const { wishListItems, error } = wishList;
//   const dispatch = useDispatch();
//   useEffect(() => {
//     if (productId) {
//       dispatch(addToWishList(productId, qty));
//     }
//   }, [dispatch, productId, qty]);

//   const removeFromWishListHandler = (id) => {
//     // delete action
//     dispatch(removeFromWishList(id));
//   };

//   if (wishListItems.length === 0) {
//     return (
//       <Wrapper>
//         <div className="row section-center">
//           <h3 className="heading">
//             your<span>wishlist</span>
//           </h3>
//           <Message
//             message="Oops! your wish list is empty"
//             buttonText="Go shopping"
//             url="/products"
//           />
//         </div>
//       </Wrapper>
//     );
//   }

//   if (error) {
//     return (
//       <Wrapper>
//         <div className="row section-center">
//           <h3 className="heading">
//             your<span>wishlist</span>
//           </h3>

//           <Message
//             message="Error Loading Your wish List"
//             name="hide"
//             variant="danger"
//           />
//         </div>
//       </Wrapper>
//     );
//   }

//   return (
//     <Wrapper>
//       <div className="row section-center">
//         <h3 className="heading">
//           your<span>wishlist</span>
//         </h3>
//         <div className="table-container">
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>Images</th>
//                 <th>Product</th>
//                 <th>Unit Price</th>
//                 <th>Stock Status</th>
//                 <th>add to cart</th>
//                 <th>Remove</th>
//               </tr>
//             </thead>
//             <tbody>
//               {wishListItems.map((item) => {
//                 return (
//                   <tr key={item.name}>
//                     <td>
//                       <img src={item.image} alt={item.name} />
//                     </td>
//                     <td>
//                       <Link to={"/product/" + item.product}>{item.name}</Link>
//                     </td>
//                     <td>
//                       <span className="amount">{formatPrice(item.price)}</span>
//                     </td>
//                     <td>
//                       {item.countInStock > 0 ? (
//                         <span className="out-stock">in stock</span>
//                       ) : (
//                         <span className="out-stock">out stock</span>
//                       )}
//                     </td>
//                     <td>
//                       <Link
//                         className="btn"
//                         to={`/cart/${productId}?qty=${qty}`}
//                       >
//                         add to cart
//                       </Link>
//                     </td>
//                     <td>
//                       <button
//                         type="submit"
//                         className="remove-btn"
//                         onClick={() => removeFromWishListHandler(item.product)}
//                       >
//                         <FaTimes />
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   margin-top: 9rem;
//   height: 100vh;

//   .table-container {
//     overflow-x: auto;
//   }
//   img {
//     width: 10rem;
//   }
//   .remove-btn {
//     background: none;
//   }
//   .alert {
//     text-align: center;
//   }

//   td,
//   a,
//   svg {
//     color: var(--clr-blue);
//   }
//   @media only screen and (min-width: 475px) {
//     margin-top: 0rem;
//   }
//   @media (min-width: 769px) {
//     margin-top: 0rem;
//   }
// `;

// export default WishListPage;
import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { addToWishList, removeFromWishList } from "../actions/wishListActions";
import Message from "../components/Message";
import { formatPrice } from "../utils/helpers";

const WishListPage = (props) => {
  let { id } = useParams();
  const location = useLocation();
  const productId = id;
  const qty = location.search ? location.search.split("=")[1] : "/";
  const wishList = useSelector((state) => state.wishList);
  const { wishListItems, error } = wishList;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToWishList(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromWishListHandler = (id) => {
    // delete action
    dispatch(removeFromWishList(id));
  };

  if (wishListItems.length === 0) {
    return (
      <Wrapper>
        <div className="row section-center">
          <h3 className="heading">
            your<span>wishlist</span>
          </h3>
          <Message
            message="Oops! your wish list is empty"
            buttonText="Go shopping"
            url="/products"
          />
        </div>
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper>
        <div className="row section-center">
          <h3 className="heading">
            your<span>wishlist</span>
          </h3>

          <Message
            message="Error Loading Your wish List"
            name="hide"
            variant="danger"
          />
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="row section-center">
        <h3 className="heading">
          your<span>wishlist</span>
        </h3>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Images</th>
                <th>Product</th>
                <th>Unit Price</th>
                <th>Stock Status</th>
                <th>add to cart</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {wishListItems.map((item) => {
                return (
                  <tr key={item.name}>
                    <td>
                      <img src={item.image} alt={item.name} />
                    </td>
                    <td>
                      <Link to={"/product/" + item.product}>{item.name}</Link>
                    </td>
                    <td>
                      <span className="amount">{formatPrice(item.price)}</span>
                    </td>
                    <td>
                      {item.countInStock > 0 ? (
                        <span className="out-stock">in stock</span>
                      ) : (
                        <span className="out-stock">out stock</span>
                      )}
                    </td>
                    <td>
                      <Link
                        className="btn"
                        to={`/cart/${productId}?qty=${qty}`}
                      >
                        add to cart
                      </Link>
                    </td>
                    <td>
                      <button
                        type="submit"
                        className="remove-btn"
                        onClick={() => removeFromWishListHandler(item.product)}
                      >
                        <FaTimes />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 9rem;
  height: 100vh;
  .table-container {
    overflow-x: auto;
  }
  img {
    width: 10rem;
  }
  .remove-btn {
    background: none;
  }
  .alert {
    text-align: center;
  }
  td,
  a,
  svg {
    color: var(--clr-blue);
  }
  @media only screen and (min-width: 475px) {
    margin-top: 0rem;
  }
  @media (min-width: 769px) {
    margin-top: 0rem;
  }
`;

export default WishListPage;
