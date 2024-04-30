import React, { useEffect } from 'react'
import { ProductHeader, ProductRelated, TabMenu, } from './components'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { productGet, productRecommendeds } from '../../store/actions/productAction'
import { PageLoading } from '../../components'

function ProductPage() {
    const { product, loading } = useSelector(state => state.product)
    const dispatch = useDispatch()
    const { slug } = useParams()

    useEffect(() => {
        dispatch(productGet(slug))
    }, [slug])

    useEffect(() => {
        dispatch(productRecommendeds(product?.category?.id))
    }, [product])

    

    return (
        <div className='product-page'>
            <ProductHeader product={product} loading={loading}/>
            <TabMenu product={product} />
            <ProductRelated />
        </div>
    )
}

export default ProductPage