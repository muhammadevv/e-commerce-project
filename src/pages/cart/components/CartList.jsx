import React from 'react'
import CartProduct from './CartProduct'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { BackIcon } from '../../../assets/icons'
import { removeAllProducts } from '../../../store/slices/cart'


function CartList() {
  const { items } = useSelector(state => state.cart)

  const dispatch = useDispatch()

  const handleReamoveAll = () => {
    dispatch(removeAllProducts())
  }

  return (
    <div className='cart-list' >
      {
        items.map(item => (
          <CartProduct product={item} key={item.id} />
        ))
      }
      <div className="cart-bottom">
        <Link to='/category'>
          <button className='cart-bottom__back'>
            <BackIcon />
            <span>Back to shop</span>
          </button>
        </Link>
        <button className='cart-bottom__remove' onClick={handleReamoveAll}>Remove all</button>
      </div>
    </div>
  )
}

export default CartList