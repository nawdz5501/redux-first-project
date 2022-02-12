import { combineReducers } from "redux";
import products from './products_reducer'
const appReducers=combineReducers({
    products
})
export default appReducers