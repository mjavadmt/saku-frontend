import {get} from 'utils/api';

export const getHomeData = (url)=>{
    const response = get(url).then(res => res)
    .catch(e => e)
    return response;
}