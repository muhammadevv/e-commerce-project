import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteIcon } from '../../../assets/icons'
import { removeCart } from '../../../store/slices/cart'

function CheckoutInfo() {
  const { items } = useSelector(state => state.cart)

  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(removeCart(id))
  }
  
  return (
    <div className='checkout-info'>
      {
        !!items.length ?
        items.map(item => (
          <div className="checkout-info__list" key={item.id}>
            <div className="checkout-info__image">
              <img src={item.image} alt="" />
            </div>
            <div className="checkout-info__row">
              <div className="checkout-info__text">
                <h4 className='checkout-info__title'>{item.name}</h4>
                <p className='checkout-info__price'>{item.price.toLocaleString()} UZS</p>
              </div>
              <button className='checkout-info__button' onClick={() => handleDelete(item.id)}>
                <DeleteIcon />
              </button>
            </div>
          </div>
        )) : <div>
          <h3>Sizda savatcha bo'sh!</h3>
        </div>
      }

    </div>
  )
}

export default CheckoutInfo