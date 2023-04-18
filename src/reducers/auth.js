import * as actionType from "../constants/actionTypes";

const authReducer = (formData, action) => {
  switch (action.type) {
    case actionType.AUTH:
      return formData;
    default:
      return false;
  }
};
export default authReducer;
