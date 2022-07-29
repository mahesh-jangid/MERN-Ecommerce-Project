import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import {
  FaSearch,
  FaBars,
  FaShoppingCart,
  FaUser,
  FaAngleDown,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../actions/userActions";
import styled from "styled-components";
import { useParams, useLocation } from "react-router";
import Sidebar from "./Sidebar";
import { listProductCategories } from "../actions/productActions";
import { formatPrice } from "../utils/helpers";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { Button, Typography } from "../../node_modules/@mui/material/index";

import { toast } from "react-toastify";
const Navbar = (props) => {
  const [name, setName] = useState("");
  const { openSidebar } = useGlobalContext();
  // const [navbar, setNavbar] = useState(false);
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  let { id } = useParams();
  const location = useLocation();

  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
    toast.success("User LoggedOut", {
      position: "top-center",
      autoClose: 1400,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.history.push(`/search/name/${name}`);
  };
  // const productId = props.match.params.id;
  const qty = location.search ? location.search.split("=")[1] : "/";

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  const removeFromCartHandler = (id) => {
    // delete action
    dispatch(removeFromCart(id));
  };

  // const checkoutHandler = () => {
  //   props.history.push('/signin?redirect=shipping')
  // }

  const wishList = useSelector((state) => state.wishList);
  const { wishListItems } = wishList;

  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);

  return (
    <>
      <Header className="header-top">
        <div className="align-items-center section-center">
          <div className="logo-area">
            <Link to="/">
              <Typography
                component="h1"
                variant="h3"
                color="yellow"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                MERN
              </Typography>
            </Link>
          </div>

          <form onSubmit={submitHandler}>
            <input
              type="search"
              name="q"
              id="q"
              placeholder="Search product..."
              onChange={(e) => setName(e.target.value)}
            />

            <div className="search-btn">
              <button>
                <FaSearch />
              </button>
            </div>
          </form>

          <div className="right-blok-box ">
            <div className="user-wrap">
              <Link to="/wishlist">
                {wishListItems.length >= 0 && (
                  <span className="cart-total">{wishListItems.length}</span>
                )}

                <AiOutlineHeart className="heart" />
              </Link>
            </div>

            <div className="shopping-cart-wrap">
              <Link to="/cart">
                <FaShoppingCart className="cart" />
                {cartItems.length >= 0 && (
                  <span className="cart-total">{cartItems.length}</span>
                )}
              </Link>
              {cartItems.length == 0 ? null : (
                <ul className="mini-cart">
                  {cartItems.map((item) => (
                    <li className="cart-item">
                      <div className="cart-image">
                        <Link to={"/product/" + item.product}>
                          <img src={item.image} alt="" />
                        </Link>
                      </div>
                      <div className="cart-title">
                        <Link to={"/product/" + item.product}>
                          <h4>{item.name}</h4>
                        </Link>
                        <div className="quanti-price-wrap">
                          <span className="quantity">1 ×</span>
                          <div className="price-box">
                            <span className="new-price">
                              {formatPrice(item.price)}
                            </span>
                          </div>
                        </div>
                        <div className="remove_from_cart">
                          <FaTimes onClick={removeFromCartHandler} />
                        </div>
                      </div>
                    </li>
                  ))}

                  <li className="mini-cart-btns">
                    <div className="cart-btns">
                      <Link to="/cart">View cart</Link>
                      <Link to="/shipping">Checkout</Link>
                    </div>
                  </li>
                </ul>
              )}
            </div>

            {userInfo ? (
              <div className="shopping-cart-wrap">
                <FaUser className="user-icon" />

                <ul className="mini-cart">
                  <li className="cart-item">
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li className="cart-item">
                    <Link to="/orderhistory">Orders</Link>
                  </li>

                  <li className="mini-cart-btns">
                    <div className="cart-btns">
                      {userInfo ? (
                        <span className="signout" onClick={signoutHandler}>
                          Sign out
                        </span>
                      ) : (
                        <Link to="/signin">Sign in</Link>
                      )}

                      {userInfo ? null : <Link to="/register">Sign up</Link>}
                    </div>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="register-btn-container">
                <Link to="/signin">
                  <Button variant="outlined" size="large">
                    sign in
                  </Button>
                </Link>
                <Link to="/register">
                  {" "}
                  <Button variant="outlined" size="large">
                    sign up
                  </Button>
                </Link>
              </div>
            )}

            <FaBars className="menu-bars" onClick={openSidebar} />
          </div>
        </div>
      </Header>

      <Navigation className="header-bottom">
        <div className="align-items-center section-center ">
          <div className="main-menu-area ">
            <nav className="main-navigation">
              <ul className="menu-items-container">
                <li className="active">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>

                {userInfo && userInfo.isAdmin && (
                  <li>
                    <Link to="/">
                      Admin <FaAngleDown />
                    </Link>

                    <ul className="sub-menu">
                      <li>
                        <Link to="/dashboard"> Dashboard</Link>
                      </li>
                      <li>
                        <Link to="/productlist">Products</Link>
                      </li>
                      <li>
                        <Link to="/orderlist">Orders</Link>
                      </li>
                      <li>
                        <Link to="/userlist">Users</Link>
                      </li>
                      <li>
                        <Link to="/support">Support</Link>
                      </li>
                    </ul>
                  </li>
                )}
                {userInfo && userInfo.isSeller && (
                  <li>
                    <Link to="#">
                      Seller <FaAngleDown />
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/productlist/seller">Products</Link>
                      </li>
                      <li>
                        <Link to="/orderlist/seller">Orders</Link>
                      </li>
                    </ul>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </Navigation>
      <Sidebar />
    </>
  );
};

const Header = styled.header`
  background: var(--clr-blue);
  height: 9rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 5;
  border-bottom: 1px solid var(--clr-yellow);
  .register-btn-container {
    display: none;
  }

  @media screen and (min-width: 768px) {
    position: relative;
    .menu-bars {
      display: none;
    }
    .user-icon {
      display: block;
    }
    .register-btn-container {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 4rem;
    }
  }

  .align-items-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
  .nav-logo {
    width: 8rem;
  }

  .right-blok-box {
    display: flex;
  }
  .user-icon {
    display: block;
  }

  form {
    display: flex;
    border-radius: 3px;
    background: transparent;
    border: 2px solid transparent;
    position: relative;
    width: 35%;
  }

  input {
    width: 100%;
    height: 4rem;
    border: none;
    background: var(--clr-white);
    border-radius: 0.5rem;
    padding: 0 55px 0 30px;
  }

  .search-btn button {
    width: 5rem;
    height: 4rem;
    font-size: 2.5rem;
    line-height: 6rem;
    text-align: center;
    display: block;
    position: absolute;
    top: 50%;
    right: 0px;
    border-radius: 0 3px 3px 0;
    color: var(--clr-blue);
    background: var(--clr-yellow);
    border: none;
    transform: translateY(-50%);
  }

  .right-blok-box {
    justify-content: flex-end;
    margin: 0 0;
    padding-top: 4px;
  }

  .cart-total {
    background: var(--clr-yellow);
    border-radius: 100%;
    color: var(--clr-blue);
    font-size: 1.7rem;
    font-weight: 500;
    height: 3rem;
    line-height: 3rem;
    width: 3rem;
    position: absolute;
    text-align: center;
    text-transform: capitalize;
    top: -1.8rem;
    right: -6px;
  }

  .user-wrap.box-user {
    padding: 8px 12px;
    border-radius: 3px;
    background: transparent;
    border: 2px solid #ddd;
    color: #333;
    margin-right: 20px;
  }
  .user-wrap.box-user #cart-total {
    background: #0e7346;
  }

  .shopping-cart-wrap a:hover {
    color: var(--clr-yellow);
  }
  #cart-total {
    background: #0e7346;
  }
  .heart,
  .cart,
  .menu-bars,
  .user-icon {
    font-size: 2.4rem;
    color: var(--clr-white);
  }

  .menu-bars,
  .cart,
  .user-icon {
    margin-left: 1.8rem;
  }
  .shopping-cart-wrap {
    position: relative;
  }
  .shopping-cart-wrap ul.mini-cart {
    position: absolute;
    width: 320px;
    background: #fff;
    box-shadow: var(--dark-shadow);
    right: 0;
    top: 180%;
    border-radius: 5px;
    padding: 30px;
    z-index: 99;
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }
  @media only screen and (max-width: 479px) {
    .shopping-cart-wrap ul.mini-cart {
      padding: 30px 15px;
    }
  }
  .shopping-cart-wrap ul.mini-cart::before {
    content: "";
    position: absolute;
    right: 20px;
    top: -7px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 6px 7px 6px;
    border-color: transparent transparent #ffffff transparent;
  }
  .cart-item {
    display: flex;
    padding-bottom: 15px;
    position: relative;
  }
  .cart-image {
    display: block;
    width: 100px;
  }
  .cart-title {
    padding-left: 15px;
    width: 60%;
  }
  .cart-title h4 {
    font-size: 14px;
  }
  .quanti-price-wrap {
    display: flex;
  }
  .quantity {
    margin-right: 5px;
    color: #333;
  }
  .price-box {
    color: var(--clr-blue);
    font-weight: 500;
  }
  .shopping-cart-wrap
    ul.mini-cart
    .cart-item
    .cart-title
    .price-box
    .old-price {
    color: var(--clr-blue);
    text-decoration: line-through;
  }
  .remove_from_cart {
    position: absolute;
    right: 0;
    top: 0;
    color: #555;
  }

  .remove_from_cart svg {
    font-size: 2rem;
  }
  .subtotal-box {
    border-top: 1px solid #ddd;
    padding-top: 15px;
  }
  .subtotal-title {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 600;
    color: #333;
  }
  .subtotal-title h3 {
    font-size: 14px;
    font-weight: 600;
    color: #333;
    line-height: 20px;
    margin: 0;
  }
  @media only screen and (max-width: 767px) {
    .cart-total {
      height: 2.5rem;
      line-height: 2.5rem;
      width: 2.5rem;
      top: -1.6rem;
      right: 2px;
    }

    .user-icon {
      display: none;
    }
    .shopping-cart-wrap ul.mini-cart {
      right: -50px;
      width: 280px;
    }
    .shopping-cart-wrap ul.mini-cart::before {
      right: 70px;
    }
  }
  .shopping-cart-wrap:hover ul.mini-cart {
    visibility: visible;
    opacity: 1;
    top: 160%;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .right-blok-box {
      margin: 32px 0px 20px 0;
    }
  }
  @media only screen and (max-width: 767px) {
    .right-blok-box {
      margin: 32px 0px 20px 0;
    }
    form {
      display: none;
    }
  }
  @media (min-width: 767px) {
    .heart,
    .cart,
    .menu-bars,
    .user-icon {
      font-size: 2.7rem;
      color: var(--clr-white);
    }
  }
  .right-blok-box a {
    display: inline-block;
    position: relative;
    padding-right: 15px;
  }

  @media only screen and (max-width: 479px) {
    .right-blok-box a .cart-total-amunt {
      display: none;
    }
  }

  .mini-cart-btns .cart-btns {
    justify-content: space-between;
    padding-top: 15px;
    width: 100%;
  }

  .mini-cart-btns {
    border-top: 1px solid #ddd;
  }

  .cart-btns a,
  .signout {
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
  .cart-btns a:hover,
  .signout:hover {
    background: var(--clr-yellow);
    color: #ffffff;
  }
`;

const Navigation = styled.nav`
  position: sticky;
  top: 0;
  display: none;
  width: 100%;
  color: var(--clr-blue);
  height: 6rem;
  background: var(--clr-white);
  box-shadow: var(--dark-shadow);
  z-index: 4;
  @media screen and (min-width: 768px) {
    display: block;
    .menu-bars {
      display: none;
    }
  }
  .main-menu-area {
    width: 100%;
  }
  .menu-items-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main-menu-area ul > li {
    display: inline-block;
    position: relative;
    padding: 15px 0px;
    margin-right: 55px;
  }
  .main-menu-area ul > li:last-child {
    margin-right: 0;
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    .main-menu-area ul > li {
      margin-right: 40px;
    }
  }
  .main-menu-area ul > li > a {
    display: block;
    font-size: 1.8rem;
    color: var(--clr-blue);
    padding: 0;
    text-transform: uppercase;
    position: relative;
    transition: 0.4s;
  }
  ul > li > a i {
    margin-left: 3px;
  }
  ul > li > a:hover {
    color: var(--clr-yellow);
  }
  ul > li > a::before {
    content: "";
    background: var(--clr-yellow);
    width: 0%;
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0;
    transition: 0.4s;
  }
  ul > li:first-child {
    padding-left: 0;
  }
  ul > li:hover > a::before {
    visibility: visible;
    opacity: 1;
    width: 100%;
  }
  ul > li:hover .sub-menu,
  ul > li:hover .mega-menu {
    visibility: visible;
    opacity: 1;
    top: 100%;
  }
  .white_text ul > li > a {
    color: #ffffff;
  }
  .main-menu-area.menu-two_home ul > li {
    padding: 32px 0px;
  }

  .sub-menu {
    background: var(--clr-white);
    box-shadow: var(--dark-shadow);
    left: 0;
    padding: 15px;
    position: absolute;
    text-align: left;
    width: 200px;
    z-index: 99;
    top: 6rem;
    visibility: hidden;
    opacity: 0;
    transition: var(--transition);
  }

  .sub-menu > li {
    padding: 0 0 !important;
    margin-right: 0px;
    display: block;
  }
  .sub-menu > li:first-child {
    margin-bottom: 0;
  }
  .sub-menu > li > a {
    padding: 0;
    font-size: 1.7rem;
    margin-bottom: 8px;
    color: var(--clr-blue);
    text-transform: capitalize;
  }
  .sub-menu > li > a::before {
    display: none;
  }

  .hader-mid-right-box {
    display: flex;
  }
`;

export default Navbar;
