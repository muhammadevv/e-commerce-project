import React from 'react'
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux';

function OffersProducts() {

  const { productsOffers } = useSelector(state => state.home)

  const list = [1, 2, 3, 4]


  return (
    <div className="offers-products">
      {
        productsOffers.loading ? list.map((item, i) => (
          <div className="offers-product" key={i}>
            <div className="offers-product__image">
              <Skeleton height='100%' />
            </div>
              <div className="offers-product__title"><Skeleton height='100%' width='80%' /></div>
              <div className="offers-product__percent"><Skeleton height='100%' width='100%' /></div>
          </div>
        ))
          :
          productsOffers.list.map(item => (
            <div className="offers-product" key={item.id}>
              <div className="offers-product__image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="offers-product__content">
                <p className="offers-product__title">{item.name}</p>
                <p className="offers-product__percent">-{item.discount}%</p>
              </div>
            </div>
          ))
      }
    </div>
  )
}

export default OffersProducts