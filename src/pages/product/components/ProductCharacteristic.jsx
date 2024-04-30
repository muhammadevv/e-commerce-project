import React from 'react'

function ProductCharacteristic({product}) {


    return (
        <div className='product-characteristic characteristic'>
            <ul className="characteristic-list">
                {
                    product?.attributes?.map((item, i) => (
                        <li className="characteristic-list__item" key={i}>
                            <span className="characteristic-title">{item.title}</span>
                            <span className="characteristic-value">{item.value}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ProductCharacteristic