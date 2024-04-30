import React from 'react'

function ElectronicsProducts() {

  const list = [
    {
      id: 1,
      title: 'Smart watches',
      price: 19,
      image: './images/electronics/image-1.png'
    },
    {
      id: 2,
      title: 'Cameras',
      price: 89,
      image: './images/electronics/image-2.png'
    },
    {
      id: 3,
      title: 'Headphones',
      price: 10,
      image: './images/electronics/image-3.png'
    },
    {
      id: 4,
      title: 'Smart watches',
      price: 90,
      image: './images/electronics/image-4.png'
    },
    {
      id: 5,
      title: 'Gaming set',
      price: 35,
      image: './images/electronics/image-5.png'
    },
    {
      id: 6,
      title: 'Laptops & PC',
      price: 340,
      image: './images/electronics/image-6.png'
    },
    {
      id: 7,
      title: 'Smartphones',
      price: 19,
      image: './images/electronics/image-7.png'
    },
    {
      id: 8,
      title: 'Electric kattle',
      price: 240,
      image: './images/electronics/image-8.png'
    },
  ]
  return (
    <div className="electronics-products">
    {
      list.map(item => (
        <div className="electronics-product" key={item.id}>
          <h4 className='electronics-product__title'>{item.title}</h4>
          <p className='electronics-product__price'>From <br /> USD {item.price}</p>
          <div className="electronics-product__image">
            <img src={item.image} alt={item.title} />
          </div>
        </div>
      ))
    }

  </div>
  )
}

export default ElectronicsProducts