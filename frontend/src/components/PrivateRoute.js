import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Outlet } from "react-router-dom";

export default function PrivateRoute({ Component }) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  return userInfo ? <Component /> : <Navigate to="/signin" />;
}
