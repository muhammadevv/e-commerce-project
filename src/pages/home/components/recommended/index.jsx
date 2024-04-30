import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function RecommendedList() {

  const { productsRecommended } = useSelector(state => state.home)
  const list = [1, 2, 3, 4, 5]
  return (
    <section className="recommended">
      <div className="container">
        <div className="recommended-wrapper">
          <div className="recommended-title">
            <h1 className='recommended-title__title'>Recommended items</h1>
          </div>
          <div className="recommended-products">

            {
              productsRecommended.loading ? list.map(item => (<div className="recommended-product">
                <div className="recommended-product__image">
                  <Skeleton style={{width: '100%', height: '100%'}}/>
                </div>
                <p className="recommended-product__price"><Skeleton style={{width: '80%'}}/>UZS</p>
                <h4 className="recommended-product__title"><Skeleton/></h4>
              </div>)) :
                productsRecommended.list.map(item => (
                  <Link to={`/product/${item.slug}`} key={item.id}>
                    <div className="recommended-product">
                      <div className="recommended-product__image">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <p className="recommended-product__price">{item.price.toLocaleString()} UZS</p>
                      <h4 className="recommended-product__title">{item.name}</h4>
                    </div>
                  </Link>
                ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecommendedList