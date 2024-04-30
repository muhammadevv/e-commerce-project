import React, { useEffect, useState } from 'react'
import { CategoryCard, CategoryFilter, CategoryList } from './components'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'
import { getBrands, getCategories, getProducts } from '../../store/actions/productsActions'
import { BurgerIcon, CloseIcon, SquareIcon } from '../../assets/icons'
import { getIds } from '../../utils/helpers'

function CategoriesPage() {

  const { products, categories, brands } = useSelector(state => state.products)
  const [product, setProduct] = useState()
  const dispatch = useDispatch()
  const params = useParams()
  const categoryId = +params.id.split('-').at(-1)
  const [searchParams, setSearchParams] = useSearchParams()
  let filteredBrands = getIds(searchParams.get('brand_id'))
  let sortBy = searchParams.get('sortBy')


  const handleBrandDelete = () => {
    searchParams.set('brand_id', filteredBrands.filter(item => item !== id).join(','))
    setSearchParams(searchParams)
  }

  const handleAasc = ({target}) => {
    if(target.value !== 'none'){
      searchParams.set('sortBy', target.value)
    }
    else{
      searchParams.delete('sortBy')
    }
    setSearchParams(searchParams)
  }
 
  useEffect(() => {
    dispatch(getCategories())
    dispatch(getBrands())
  }, [])
   
  useEffect(() => {
    dispatch(getProducts({category_id: categoryId, brand_arr: filteredBrands, sortBy}))
  }, [params, searchParams])

  return (
    <div className="category">
      <div className="container">
        <div className="category-wrapper">
          <CategoryFilter />
          <div className="category-content">
            <div className="category-head">
              <p className='category-head__title'>
                {products.list.length} items in
                <span className='category-head__title__name'> {categories.list.find(item => item.id === categoryId)?.title}</span>
              </p>
              <div className='category-head__row'>
                <select name='category' className='category-head__select' id="categories" onChange={handleAasc}>
                  <option value="none">Filter price</option>
                  <option value="asc">Cheap</option>
                  <option value="desc">Expensive</option>
                  
                </select>
                <div className='category-head__buttons'>
                  <button onClick={() => setProduct(false)} className={product ? 'category-head__button__left' : 'category-head__button__left active'} ><SquareIcon /></button>
                  <button onClick={() => setProduct(true)} className={product ? 'category-head__button__right active' : 'category-head__button__right'}><BurgerIcon /></button>
                </div>
              </div>
            </div>

            <div className="category-products__top">
              {
                brands.list.filter(item => filteredBrands.includes(item.id)).map(item => (
                  <button className="category-products__top__button" key={item.id} onClick={() => handleBrandDelete(item.id)} >
                    <span>{item.title}</span>
                    <span><CloseIcon /> </span> 
                  </button>
                ))
              }

            </div>

            {
              product ? <CategoryList /> : <CategoryCard />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoriesPage