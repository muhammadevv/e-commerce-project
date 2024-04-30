import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function ProductRelated() {
  const { recommended } = useSelector(state => state.product)
  const list = [1, 2, 3, 4, 5]
  return (
    <div className="recommended">
      <div className="container">
        <div className="recommended-wrapper">
          <div className="recommended-title">
            <h1 className="recommended-title__title">
              Related products
            </h1>
          </div>
          <div className="recommended-products">
            {
              recommended.loading ? list.map(item => (<div className="recommended-product">
                <div className="recommended-product__image">
                  <Skeleton style={{ width: '100%', height: '100%' }} />
                </div>
                <div className="recommended-product__text">
                  <h3 className="recommended-product__title"> <Skeleton /></h3>
                  <p className="recommended-product__price"> <Skeleton /> UZS</p>
                </div>
              </div>))
                :
                recommended.list?.map(item => (
                  <Link to={`/product/${item.slug}`} key={item.id}>
                    <div className="recommended-product">
                      <div className="recommended-product__image">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className="recommended-product__text">
                        <h3 className="recommended-product__title">{item.name}</h3>
                        <p className="recommended-product__price">{item.price.toLocaleString()} UZS</p>
                      </div>
                    </div>
                  </Link>
                ))}

          </div>
        </div>
      </div>
    </div>
  )
}


export default ProductRelated