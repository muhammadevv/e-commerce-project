import React from 'react'
import Skeleton from 'react-loading-skeleton'

function HomeOutdoorProduct({ list, loading }) {
  const loadingList = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <div className="homeOutdoor-products">

      {
        loading.loading ? loadingList.map(item => (
          <div className="homeOutdoor-product" >
            <h4 className='homeOutdoor-product__title'><Skeleton /></h4>
            <p className='homeOutdoor-product__price'><Skeleton /> UZS</p>
            <div className="homeOutdoor-product__image">
              <Skeleton style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        ))
          :
          list.map(item => (
            <div className="homeOutdoor-product" key={item.id}>
              <h4 className='homeOutdoor-product__title'>{item.name}</h4>
              <p className='homeOutdoor-product__price'>{item.price.toLocaleString()} UZS</p>
              <div className="homeOutdoor-product__image">
                <img src={item.image} alt={item.title} />
              </div>
            </div>
          ))
      }

    </div>
  )
}

export default HomeOutdoorProduct