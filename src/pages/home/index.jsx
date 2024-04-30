import React, { useEffect } from 'react'
import { Banner, Offers, ProductsSection, RecommendedList } from './components'
import { useDispatch, useSelector } from 'react-redux'
import { getBannerList, getCategoriesList, getCategoryRecommendedList, getProductOffersList, getProductsRecommendedList } from '../../store/actions/homeActions'

function HomePage() {

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getCategoriesList())
    dispatch(getBannerList())
    dispatch(getProductsRecommendedList())
    dispatch(getProductOffersList())
    dispatch(getCategoryRecommendedList())
  }, [])

  return (
    <div>
      <Banner />
      <Offers />
      <ProductsSection/>
      <RecommendedList />
    </div>
  )
}

export default HomePage 