import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { RiyaContext } from "../context/RiyaContext";

export const PublicRoute = ({ children }: any) => {
  const { riyaState } = useContext(RiyaContext);
  return riyaState.logged ? <Navigate to="/" /> : children;
};
