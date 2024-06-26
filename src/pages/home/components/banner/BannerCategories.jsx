import React from 'react'
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function BannerCategories() {

  const { categories } = useSelector(state => state.home)
  let list = [1, 2, 3, 4, 5]
  return (
    <div className="banner-categories categories-banner">
      <ul className="categories-list">
        {

          categories.loading ? list.map((item, i) => <Skeleton style={{width: '90%', height: 24, marginTop: 12}} key={i}/>) : categories.list.map(item => (
            <li key={item.id}>
              <Link className="categories-list__item" to={`/category/${item.slug}-${item.id}`}>{item.title}</Link>
            </li>
          ))

        }
      </ul>
    </div>
  )
}

export default BannerCategories