import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import BrandList from './BrandList';

function CategoryFilter() {

  const { categories } = useSelector(state => state.products)


  return (
    <div className="category-filter">
      <div className="category-sections">
        <div className="category-section">
          <h1 className='category-section__title'>Category</h1>
        </div>
        {
          categories.list.map(item => (
            <Link to={`/category/${item.slug}-${item.id}`} key={item.id}>
              <p className="category-section__subtitle">{item.title}</p>
            </Link>
          ))
        }
      </div>

      <BrandList/>
    </div>
  )
}

export default CategoryFilter