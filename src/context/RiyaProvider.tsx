import React, { useEffect, useReducer } from "react";
import { authReducer } from "../auth/authReducer";
import { RiyaContext } from "./RiyaContext";

interface RiyaProviderProps {
  children: JSX.Element | JSX.Element[];
}

const init = () => {
  //   return {
  //     logged: true,
  //     name: "Antonio",
  //   };
  return (
    JSON.parse(localStorage.getItem("user") as string) || { logged: false }
  );
};

export const RiyaProvider = ({ children }: RiyaProviderProps) => {
  const [user, dispatch] = useReducer(authReducer, {}, init);
  useEffect(() => {
    if (!user) return;
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <RiyaContext.Provider
      value={{
        riyaState: user,
        dispatch,
      }}
    >
      {children}
    </RiyaContext.Provider>
  );
};
