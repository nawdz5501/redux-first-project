import React, { useEffect, useState } from 'react'
import { getProducts } from '../../../store/actions'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import '../../styles.css'
import { ClockLoader } from 'react-spinners'
function Products() {
    const products = useSelector(state => state.products)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts({}, 1, 10, "desc"))
    }, [dispatch])
    const loadMoreProducts = () => {
        const page = products.page + 1;
        setLoading(true);
        dispatch(getProducts(products, page, 10, "desc")).then(() => {
            setLoading(false);
        })
    }
    return (
        <>
            <div className='products-container'>
                {products.products ?
                    <div className='product-list'>{
                        products.products.map(item => {
                            return (
                                <div key={item.id}>
                                    <div className='product-card'>
                                        <div className='content'>
                                            <div className='product-card_image'>
                                                <img src={item.image} />
                                                
                                            </div>
                                            <div className='product-card_title'>
                                                <Link to={`/products/${item.id}`} className='link'>
                                                    {item.title}
                                                </Link>
                                            </div>
                                            <div className='product-card_price'>{item.price}$</div>
                                        </div>
                                        
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    : null}
            {loading ?
                <div style={{ textAlign: 'center' }}>
                    <ClockLoader >
                        <span>Loading...</span>
                    </ClockLoader>
                </div>
                : null}
            {!products.end & !loading ?
                <button
                    onClick={() => loadMoreProducts()}
                    className='load-more-btn'>
                    Load More Products
                </button>
                : null}
        </div>
        </>
    )
}

export default Products
