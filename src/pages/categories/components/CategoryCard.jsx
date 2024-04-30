import React from 'react'
import { useSelector } from 'react-redux'
import { ItemIcon } from '../../../assets/icons'
import { Link } from 'react-router-dom'

function CategoryCard() {
  const { products } = useSelector(state => state.products)

  return (
    <div className='category-products'>
      {
        products.list.map(item => (
          <Link to={`/product/${item.slug}`} key={item.id}>
            <div className="category-card">
              <div className="category-card__image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="category-card__content">
                <div className="category-card__row">
                  <div className="category-card__price-rating">
                    <p className='category-card__price'>{item.price.toLocaleString()} UZS <br /> <span className='category-card__oldprice'> {item.oldPrice.toLocaleString()} UZS</span> </p>
                    <p>⭐️⭐️⭐️⭐️⭐️ {item.rating}</p>
                  </div>

                  <button className='category-card__button'><ItemIcon /></button>

                </div>
                <h3 className="category-card__title">{item.name}</h3>
              </div>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default CategoryCard