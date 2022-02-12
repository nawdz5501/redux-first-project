import { GET_PRODUCTS,GET_PRODUCTS_BY_ID } from "../types";

export default function productsReducer(state={}, action){
    switch(action.type) {
        case GET_PRODUCTS:
            return {...state,...action.payload}
        case GET_PRODUCTS_BY_ID:
            return {...state,productById:action.payload}
        default:
            return state;
    }
}