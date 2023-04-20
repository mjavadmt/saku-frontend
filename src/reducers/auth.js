import * as actionType from "../constants/actionTypes";

const authReducer = (state = { isLogedIn: false }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      return { ...state, isLogedIn: action.payload.isLogedIn };
    default:
      return state;
  }
};
export default authReducer;
