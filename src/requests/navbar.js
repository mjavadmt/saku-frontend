import { get, post, put } from "utils/api";

export const getProfileInfo= (profile) =>{
    const response = get(profile).then((res) => res)
    .catch((e)=> e)
    return response
}

export const deleteImg = (url)=>{
    const response = post(url).then(res=>res)
    .catch(e => e)
    return response;
}

export const addImg = (url,isUploadImg)=>{
    const response = put(url, isUploadImg).then(res => res)
    .catch(e => e)
    return response
}