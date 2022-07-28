import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

export default function SellerRoute({ Component }) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return userInfo && userInfo.isSeller ? (
    <Component />
  ) : (
    <Navigate to="/signin" />
  );
}
