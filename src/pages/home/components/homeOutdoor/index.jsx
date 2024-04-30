import React from 'react'
import HomeOutdoorContent from './components/HomeOutdoorContent'
import HomeOutdoorProduct from './components/HomeOutdoorProducts'

function Products({category, list, productLoading, categoryLoading}) {

  return (
    <section className="homeOutdoor">
      <div className="container">
        <div className="homeOutdoor-wrapper">
          <HomeOutdoorContent category={category} />
          <HomeOutdoorProduct list={list} loading={productLoading}/>
        </div>
      </div>
    </section>
  )
}

export default Products