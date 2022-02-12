import * as api from '../../api'
import { GET_PRODUCTS, GET_PRODUCTS_BY_ID } from '../types'
export const getProducts=(products,page,limit,order)=>({
    type: GET_PRODUCTS,
    payload: api.getProductsData(products,page,limit,order)
})
export const getProductById=(id)=>({
    type: GET_PRODUCTS_BY_ID,
    payload: api.getProductById(id)
})