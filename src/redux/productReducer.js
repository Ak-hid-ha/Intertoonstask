import { ADD_PRODUCTS,REMOVE_PRODUCTS } from "./Actiontypes";


export const Reducers = (state=[],action)=>{
    switch(action.type){
        case ADD_PRODUCTS:
            return[...state,action.payload];
            
            case REMOVE_PRODUCTS:
                state = state.filter(items=>items.productId !==action.payload)
                return state;
                default:
                    return state;
    }
}