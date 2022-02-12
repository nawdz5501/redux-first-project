import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getProductById} from '../../../store/actions' 
import { showToast } from '../utils/tools'
function ProductsDetail(props) {
    const product=useSelector(state=>state.products)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getProductById(props.match.params.id))
    },[dispatch,props.match.params.id])

    return (
        <div>
            {product.productById?
            
                <div>
                    <div>
                        {product.productById.title}
                    </div>
                    
                </div>
            
            :null}
        </div>
    )
}

export default ProductsDetail
