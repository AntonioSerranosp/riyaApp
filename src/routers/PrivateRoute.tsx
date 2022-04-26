import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { RiyaContext } from "../context/RiyaContext";

export const PrivateRoute = ({ children }: any) => {
  const { riyaState } = useContext(RiyaContext);

  return riyaState.logged ? children : <Navigate to="/login" />;
};
