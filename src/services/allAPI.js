import commonAPI from "./commonAPI";
import SERVERE_URL from "./serverUrl";

export const addItemApi = async (reqBody) => {
    return await commonAPI('POST', `${SERVERE_URL}/add`, reqBody)
}
export const getAllApi=async()=>{
    return await commonAPI("GET",`${SERVERE_URL}/items`,"")
}
//update item
export const updateItemApi=async(id,reqBody)=>{
    return await commonAPI("PUT",`${SERVERE_URL}/update/${id}`,reqBody)
}

export const addStockApi = async (reqBody) => {
    return await commonAPI('POST', `${SERVERE_URL}/goods-in`, reqBody)
}
export const getAllStockApi=async()=>{
    return await commonAPI("GET",`${SERVERE_URL}/goods`,"")
}
export const stockOutAPI = async (reqBody) => {
    return await commonAPI('POST', `${SERVERE_URL}/goods-out`, reqBody)
}
export const getStockOutApi=async()=>{
    return await commonAPI("GET",`${SERVERE_URL}/get-goods`,"")
}
//all stock report from stockReportController
export const getStockReportApi=async()=>{
    return await commonAPI("GET",`${SERVERE_URL}/report`,"")
}
//delete stock 
export const deleteStockReportEntryApi = async (id) => {
  return await commonAPI('DELETE', `${SERVERE_URL}/delete-report/${id}`);
};