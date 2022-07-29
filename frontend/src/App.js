import React, { Fragment } from "react";
import { Router, Route, Routes } from "react-router-dom";
import AdminRoute from "./components/AdminRoute";
import PrivateRoute from "./components/PrivateRoute";
import SellerRoute from "./components/SellerRoute";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import { AppProvider } from "./context";
import RegisterPage from "./pages/RegisterPage";
import ProductDetails from "./pages/ProductDetailsPage";
import ProductsPage from "./pages/ProductsPage";
import OrderListPage from "./pages/OrderListPage";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import SupportPage from "./pages/SupportPage";
import DashboardPage from "./pages/DashboardPage";
import UserEditPage from "./pages/UserEditPage";
import UserListPage from "./pages/UserListPage";
import ProfilePage from "./pages/ProfilePage";
import ProductEditPage from "./pages/ProductEditPage";
import SellerPage from "./pages/SellerPage";
import CartPage from "./pages/CartPage";
import ShippingAddressPage from "./pages/ShippingAddressPage";
import PaymentMethodPage from "./pages/PaymentMethodPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import OrderPage from "./pages/OrderPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import SigninPage from "./pages/SigninPage";
import ErrorPage from "./pages/ErrorPage";
import WishListPage from "./pages/WishListPage";
import AboutPage from "./pages/AboutPage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <AppProvider>
        <NavigationBar />
      </AppProvider>
      <Routes>
        <Route path="/seller/:id" element={<SellerPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/cart/:id" element={<CartPage />}></Route>
        <Route path="/product/:id" element={<ProductDetails />} exact></Route>
        <Route path="/products" element={<ProductsPage />} exact></Route>

        <Route
          path="/product/:id/edit"
          element={<ProductEditPage />}
          exact
        ></Route>
        <Route path="/signin" element={<SigninPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/shipping" element={<ShippingAddressPage />}></Route>
        <Route path="/payment" element={<PaymentMethodPage />}></Route>
        <Route path="/placeorder" element={<PlaceOrderPage />}></Route>
        <Route path="/order/:id" element={<OrderPage />}></Route>
        <Route path="/orderhistory" element={<OrderHistoryPage />}></Route>
        <Route path="/wishlist" element={<WishListPage />}></Route>
        <Route path="/wishlist/:id" element={<WishListPage />}></Route>

        <Route
          path="/search/name/:name"
          element={<ProductsPage />}
          exact
        ></Route>

        <Route
          path="/search/category/:category"
          element={<ProductsPage />}
          exact
        ></Route>
        <Route
          path="/search/category/:category/name/:name"
          element={<ProductsPage />}
          exact
        ></Route>
        <Route
          path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber"
          element={<ProductsPage />}
          exact
        ></Route>

        <Route
          path="/profile"
          element={<PrivateRoute element={<ProfilePage />} />}
        />
        <Route
          path="/productlist"
          element={<AdminRoute element={<ProductListPage />} />}
        />
        <Route
          path="/userlist"
          element={<AdminRoute element={<UserListPage />} />}
        />
        {/* <AdminRoute
              path="/productlist"
              element={ProductListPage}
              exact
            ></AdminRoute> */}
        <Route
          path="/productlist/pageNumber/:pageNumber"
          element={<AdminRoute element={<ProductListPage />} />}
        />
        {/* <AdminRoute
              path="/productlist/pageNumber/:pageNumber"
              element={ProductListPage}
              exact
            ></AdminRoute> */}
        <Route
          path="/orderlist"
          element={<AdminRoute element={<ProductListPage />} />}
        />
        {/* <AdminRoute
              path="/orderlist"
              element={OrderListPage}
              exact
            ></AdminRoute> */}
        {/* <AdminRoute path="/userlist" element={UserListPage}></AdminRoute>
         */}
        <Route
          path="/user/:id/edit"
          element={<AdminRoute element={<UserEditPage />} />}
        />
        {/* <AdminRoute
              path="/user/:id/edit"
              element={UserEditPage}
            ></AdminRoute> */}
        <Route path="/dashboard" element={<DashboardPage />}></Route>
        <Route path="/support" element={<SupportPage />}></Route>

        <Route
          path="/productlist/seller"
          element={<SellerRoute element={<ProductListPage />} />}
        />
        {/* <SellerRoute
              path="/productlist/seller"
              element={ProductListPage}
            ></SellerRoute> */}
        <Route
          path="orderlist/seller"
          element={<SellerRoute element={<OrderListPage />} />}
        />
        {/* <SellerRoute
              path="/orderlist/seller"
              element={OrderListPage}
            ></SellerRoute> */}
        <Route path="/" element={<HomePage />} exact></Route>
        <Route path="*" element={<ErrorPage />} exact></Route>
      </Routes>
      <ToastContainer
        theme="dark"
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Footer />
    </>
  );
}

export default App;
