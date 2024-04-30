import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { getIds } from '../../../utils/helpers'

function BrandList() {
  const { brands } = useSelector(state => state.products)
  const [isLong, setIsLong] = useState(false)
  const [params, setParams] = useSearchParams()


  const handleBrand = (id, { target }) => {
    if (target.checked) {
      if (params.get('brand_id')) {
        params.set('brand_id', params.get('brand_id') + ',' + id)
      } else {
        params.set('brand_id', id)
      }
    } else {
      params.set('brand_id', getIds(params.get('brand_id')).filter(item => item !== id).join(','))
    }

    setParams(params)
  }


  useEffect(() => {
    setIsLong(brands.list.length > 5)
  }, [brands.list])

  const handleSeeAll = () => {
    setIsLong(!isLong)
  }

  return (
    <div className="category-sections">
      <div className="category-section">
        <h1 className='category-section__title'>Brands</h1>
      </div>
      <List
        list={isLong ? brands.list.slice(0, 6) : brands.list}
        handleBrand={handleBrand} />
      <button className='category-section__button' onClick={handleSeeAll}>
        {isLong ? 'See' : 'Close'} all
      </button>
    </div>
  )
}

export default BrandList

function List({ list, handleBrand }) {
  const [params] = useSearchParams()
  const [filteredList, setFilteredList] = useState(getIds(params.get('brand_id')))
  
  useEffect(() => {
    setFilteredList(getIds(params.get('brand_id')))
  }, [params.get('brand_id')])

  return (
    <form>
      {
        list.map(({ id, title }) => (
          <div className="category-section__subtitle" key={id}>
            <input className="category-section__checkbox"
              checked={filteredList.some(item => item === id)}
              type='checkbox' id={title}
              onChange={(e) => handleBrand(id, e)} />
            <label htmlFor={title}>{title}</label>
          </div>
        ))
      }
    </form>
  )
}