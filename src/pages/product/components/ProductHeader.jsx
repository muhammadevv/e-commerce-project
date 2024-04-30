import React, { useEffect, useState } from 'react'
import { MessageSmallIcon, BasketIcon, StarIcon } from '../../../assets/icons'
import { useDispatch } from 'react-redux'
import { addCart } from '../../../store/slices/cart'
import { addOrder } from '../../../store/slices/orders'
import { toast } from 'react-toastify'
import Skeleton from 'react-loading-skeleton'

function ProductHeader({ product, loading }) {
    const dispatch = useDispatch()

    const list = [1, 2, 3, 4]

    const [activeImage, setActiveImage] = useState(product.image)

    const handleAddOrder = () => {
        dispatch(addOrder(product))
    }
    const handleAddCart = () => {
        dispatch(addCart(product))
        toast.success('Savatchaga q\'oshildi!😊')
    }

    const handleImage = (image) => {
        setActiveImage(image)
    }

    useEffect(() => {
        setActiveImage(product.image)
    }, [product])

    return (

        <div className='product-header'>
            <div className="container">
                {
                    loading ?
                        <div className="product-header__wrapper">
                            <div className="product-header__image image-wrapper">
                                <div className="image-main">
                                    <Skeleton style={{width: '100%', height: '100%'}} />
                                </div>
                                <div className="image-list">
                                    {
                                        list.map((item, i) => (
                                            <button key={i} className='image-list__item'> <Skeleton style={{width: '100%', height: '100%'}}/></button>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="product-header__content content__product-header">
                                <h3 className="content-title">
                                    <Skeleton  height={40}/>

                                </h3>
                                <div className="content-row">
                                    <div className="content-row__col">
                                        <div className="content-stars">
                                            <div className="content-stars__list">
                                                <span className="content-star">
                                                    <StarIcon />
                                                </span>
                                                <span className="content-star">
                                                    <StarIcon />
                                                </span>
                                                <span className="content-star">
                                                    <StarIcon />
                                                </span>
                                                <span className="content-star">
                                                    <StarIcon />
                                                </span>
                                                <span className="content-star">
                                                    <StarIcon />
                                                </span>
                                            </div>
                                            <span className="content-stars__title"><Skeleton /></span>
                                        </div>
                                    </div>

                                    <div className="content-row__col">
                                        <span className="content-row__icon">
                                            <MessageSmallIcon />
                                        </span>
                                        <span className="content-row__text"><Skeleton style={{width: '100%', height: '100%'}}/></span>
                                    </div>

                                    <div className="content-row__col">
                                        <span className="content-row__icon">
                                            <BasketIcon />
                                        </span>
                                        <span className="content-row__text"><Skeleton style={{width: '100%', height: '100%'}} /> sold</span>
                                    </div>
                                </div>

                                <div className="content-price">
                                    <p className="content-price__old"><Skeleton style={{width: '30%'}}/> UZS</p>
                                    <p className="content-price__new"><Skeleton style={{width: '50%'}}/> UZS</p>
                                </div>

                                <ul className="content-list">
                                    <li className="content-list__item">
                                        <strong className="content-list__text">Бренд:</strong>
                                        <span className="content-list__line"></span>
                                        <span className="content-list__text"><Skeleton style={{width: 80}} /></span>
                                    </li>
                                    <li className="content-list__item">
                                        <strong className="content-list__text">Модель:</strong>
                                        <span className="content-list__line"></span>
                                        <span className="content-list__text"><Skeleton style={{width: 80}} /></span>
                                    </li>
                                    <li className="content-list__item">
                                        <strong className="content-list__text">Наличии:</strong>
                                        <span className="content-list__line"></span>
                                        <span className="content-list__text">В наличии</span>
                                    </li>
                                </ul>

                                <div className="content-buttons">
                                    <button className="content-button content-button__primary" onClick={handleAddCart}>
                                        Add cart
                                    </button>
                                    <button className="content-button content-button__secondary" onClick={handleAddOrder}>
                                        Add favourite
                                    </button>
                                </div>
                            </div>
                        </div> :
                        <div className="product-header__wrapper">
                            <div className="product-header__image image-wrapper">
                                <div className="image-main">
                                    <img src={activeImage} alt={product.title} />
                                </div>
                                <div className="image-list">
                                    {
                                        product.images?.map((item, i) => (
                                            <button key={i} className={`image-list__item ${item === activeImage ? 'active' : ''}`} onClick={() => handleImage(item)}>
                                                <img src={item} alt={product.title} />

                                            </button>
                                        ))
                                    }

                                </div>
                            </div>

                            <div className="product-header__content content__product-header">
                                <h3 className="content-title">
                                    {product.title}

                                </h3>
                                <div className="content-row">
                                    <div className="content-row__col">
                                        <div className="content-stars">
                                            <div className="content-stars__list">
                                                <span className="content-star">
                                                    <StarIcon />
                                                </span>
                                                <span className="content-star">
                                                    <StarIcon />
                                                </span>
                                                <span className="content-star">
                                                    <StarIcon />
                                                </span>
                                                <span className="content-star">
                                                    <StarIcon />
                                                </span>
                                                <span className="content-star">
                                                    <StarIcon />
                                                </span>
                                            </div>
                                            <span className="content-stars__title">{product.reting}</span>
                                        </div>
                                    </div>

                                    <div className="content-row__col">
                                        <span className="content-row__icon">
                                            <MessageSmallIcon />
                                        </span>
                                        <span className="content-row__text">{product.reviewCount}</span>
                                    </div>

                                    <div className="content-row__col">
                                        <span className="content-row__icon">
                                            <BasketIcon />
                                        </span>
                                        <span className="content-row__text">{product.sold} sold</span>
                                    </div>
                                </div>

                                <div className="content-price">
                                    <p className="content-price__old">{product.oldPrice?.toLocaleString()}UZS</p>
                                    <p className="content-price__new">{product.price?.toLocaleString()} UZS</p>
                                </div>

                                <ul className="content-list">
                                    <li className="content-list__item">
                                        <strong className="content-list__text">Бренд:</strong>
                                        <span className="content-list__line"></span>
                                        <span className="content-list__text">{product.brand_id}</span>
                                    </li>
                                    <li className="content-list__item">
                                        <strong className="content-list__text">Модель:</strong>
                                        <span className="content-list__line"></span>
                                        <span className="content-list__text">{product.model}</span>
                                    </li>
                                    <li className="content-list__item">
                                        <strong className="content-list__text">Наличии:</strong>
                                        <span className="content-list__line"></span>
                                        <span className="content-list__text">В наличии</span>
                                    </li>
                                </ul>

                                <div className="content-buttons">
                                    <button className="content-button content-button__primary" onClick={handleAddCart}>
                                        Add cart
                                    </button>
                                    <button className="content-button content-button__secondary" onClick={handleAddOrder}>
                                        Add favourite
                                    </button>
                                </div>
                            </div>
                        </div>
                }

            </div>
        </div>
    )
}

export default ProductHeader