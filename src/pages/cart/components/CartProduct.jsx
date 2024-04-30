import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment, removeCart } from '../../../store/slices/cart'
import { Counter } from '../../../components'
import { toast } from 'react-toastify'

function CartProduct({ product }) {
  const { id, title, image, model, price, qty } = product
  const dispatch = useDispatch()

  console.log(product);

  const handleRemove = () => {
    dispatch(removeCart(id))
    toast.info('Mahsulot savatchadan o\'chirildi!😐')

  }

  const handleIncrement = () => {
    dispatch(increment(id))
  }

  const handleDecrement = () => {
    dispatch(decrement(id))
  }

  return (
    <div className='cart-product'>
      <div className="cart-product__image">
        <img src={image} alt="" />
      </div>
      <div className="cart-product__content">
        <div className="cart-product__row">
          <p className="cart-product__title">{title}</p>
          <p className='cart-product__price'>{price.toLocaleString()} UZS</p>
        </div>
        <div className="cart-product__row">
          <p className='cart-product__subtitle'>{model}</p>
          <Counter onIncrement={handleIncrement} onDecrement={handleDecrement} count={qty} />
        </div>
        <div className="cart-product__row">
          <button className="cart-product__button" onClick={handleRemove}>Remove</button>
        </div>
      </div>
    </div>
  )
}

export default CartProduct