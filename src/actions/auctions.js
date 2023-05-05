import axios from "axios";
import {
    ALL_AUCTIONS,
    START_LOADING,
    FILTERED_AUCTION,
    SET_NAME,
    SET_BASEPRICE,
} from "constants/actionTypes";
import {
    getAllAuctions,
    getAllCities,
    getFilteredAuctions,
} from "utils/api/requests/myAuctions";
import { host } from "utils/config";

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
export const getallCity = (url, id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const getAllCityRes = await getAllCities(url, id);
        console.log(getAllCityRes);

        console.log("sara" + getAllCityRes.data.data.auctions);
        if (getAllCityRes && getAllCityRes.status === 200) {
            dispatch({
                type: ALL_AUCTIONS,
                payload: { auctions: getAllCityRes.data.data.auctions },
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
                payload: { auctions: getAllAuctionsRes.data },
            });
        }
    } catch (error) {
        console.log(error);
    }
};

export const setTheName = (value) => async (dispatch) => {
    try {
        dispatch({
            type: SET_NAME,
            payload: { name: value },
        });
    } catch (error) {
        console.log(error);
    }
};

export const setTheBasePrice = (value) => async (dispatch) => {
    try {
        dispatch({
            type: SET_BASEPRICE,
            payload: { basePrice: value },
        });
    } catch (error) {
        console.log(error);
    }
};
