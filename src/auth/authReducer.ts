import { types } from "../types/types";

export const authReducer = (state = {}, action: any) => {
  /// todo..
  switch (action.type) {
    case types.login:
      return {
        //...state,
        ...action.payload,
        logged: true,
      };
    case types.logout:
      return {
        logged: false,
      };
    default:
      return state;
  }
};
