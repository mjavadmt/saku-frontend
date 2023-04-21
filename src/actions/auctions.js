import {
  ALL_AUCTIONS,
  START_LOADING,
  FILTERED_AUCTION,
  SET_NAME,
  SET_BASEPRICE,
} from "constants/actionTypes";
import {
  getAllAuctions,
  getFilteredAuctions,
} from "utils/api/requests/myAuctions";

export const getallAuctoins = (url) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const getAllAuctionsRes = await getAllAuctions(url);
    if (getAllAuctionsRes && getAllAuctionsRes.status === 200) {
      dispatch({
        type: ALL_AUCTIONS,
        payload: { auctions: getAllAuctionsRes.data },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getfilteredAuctoin = (filteredObj, url) => async (dispatch) => {
  try {
    const getAllAuctionsRes = await getFilteredAuctions(url, {
      params: filteredObj,
    });
    if (getAllAuctionsRes && getAllAuctionsRes.status === 200) {
      dispatch({
        type: FILTERED_AUCTION,
        payload: { auction: getAllAuctionsRes.data },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const setName = (value) => async (dispatch) => {
  try {
    dispatch({
      type: SET_NAME,
      payload: { name: value },
    });
  } catch (error) {
    console.log(error);
  }
};

export const setBasePlace = (value) => async (dispatch) => {
  try {
    dispatch({
      type: SET_BASEPRICE,
      payload: { basePrice: value },
    });
  } catch (error) {
    console.log(error);
  }
};
