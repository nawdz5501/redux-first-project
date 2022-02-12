import axios from "axios"
const SERVER_URL='http://localhost:3001'
export const getProductsData =async(prevState,page=1,limit="10",order)=>{
    
    try{
        const response= await axios.get(`${SERVER_URL}/products?_page=${page}&_limit=${limit}&_order=${order}&_sort=price`)
        return {
            products:prevState.products? [...prevState.products,...response.data] : response.data,
            page:page,
            end:response.data.length === 0 ? true : false
        }
    }catch(err){    
        throw err;
    }
}
export const getProductById=async(id)=>{
    try{
        const response= await axios.get(`${SERVER_URL}/products/${id}`)
        return response.data
    }catch(err){
        throw err;
    }
}
