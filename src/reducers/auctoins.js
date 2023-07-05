import * as actionType from "../constants/actionTypes";

const auctionReducer = (
  state = {
    auctions: [],
    page: 1,
    name: "",
    basePrice: "",
    isLoading: true,
  },
  action
) => {
  switch (action.type) {
    case actionType.START_LOADING:
      return { ...state, isLoading: true };
    case actionType.END_LOADING:
      return { ...state, isLoading: false };
    case actionType.ALL_AUCTIONS:
      return { ...state, auctions: action.payload.auctions };
    case actionType.FILTERED_AUCTION:
      return { ...state, auctions: action.payload.auctions };
    case actionType.SET_PAGE:
      return { ...state, page: action.payload.page };
    case actionType.SET_NAME:
      return { ...state, name: action.payload.name };
    case actionType.SET_BASEPRICE:
      return { ...state, basePrice: action.payload.basePrice };
    default:
      return state;
  }
};
export default auctionReducer;
