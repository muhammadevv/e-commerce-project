import React from 'react'
import { CartList, CartInfo } from './components'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function CartPage() {
  const { items } = useSelector(state => state.cart)
  const navigate = useNavigate()

  const handlBack = () => {
    navigate('/')
  }
  return (
    <div className='cart-page'>
      <div className="container">
        {
          items.length <= 0 ?
            <div className='cart-empty'>
              <img className='cart-empty__image' src="/images/cart-empty.png" alt="" />
              <div className="cart-empty__content">
                <h2 className='cart-empty__title'>Your cart is empty</h2>
                <button className='cart-empty__button' onClick={handlBack}>Back to home</button>
              </div>
            </div>
            :
            <div>
              <h1 className="cart-page__title">My cart ({items.length})</h1>
              <div className="cart-page__row">
                <CartList />
                <CartInfo />
              </div>
            </div>
        }

      </div>
    </div>
  )
}

export default CartPage