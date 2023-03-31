import { get, post } from "../utils/api";

export const getEnteredPrices = (url)=>{
    const response = get(url).then((res)=> res)
    .catch((e) => e)
    return response
}