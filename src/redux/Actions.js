import { ADD_PRODUCTS,REMOVE_PRODUCTS } from "./Actiontypes";

export function addProducts(data){
    return{
        type: ADD_PRODUCTS,
        payload:data
    }      
}
export function removeProducts(productId){
    return{
        type:REMOVE_PRODUCTS,
        payload: productId
    }
}