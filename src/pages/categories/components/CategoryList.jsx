import { BasketIcon, ItemIcon, MessageSmallIcon, StarIcon } from '../../../assets/icons';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder } from '../../../store/slices/orders';
import { Link } from 'react-router-dom';

function CategoryList() {
  const {products} = useSelector(state => state.products)

  const dispatch = useDispatch()

  const handleAddOrder = (product) => {
    if(products.list.id === product.id){
      dispatch(addOrder(products))
    }
  }


  return (
    <div className="category-products">
      {products.list.map(item => (
        <div className="category-list" key={item.id}>
          <div className="category-list__image">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="category-list__content">
            <div className="category-list__title">
              <p>{item.title}</p>
              <button onClick={handleAddOrder(item)}><ItemIcon /></button>
            </div>
            <div className="category-list__price">
              <span className='category-list__price__new'>{item.price.toLocaleString()} UZS</span>
              <span className='category-list__price__old'>{item.oldPrice} UZS</span>
            </div>
            <div className="category-list__row">
              <div className="category-list__row__col">
                <div className="category-list__stars">
                  <div className="category-stars__list">
                    <span className="category-star">
                      <StarIcon />
                    </span>
                    <span className="category-star">
                      <StarIcon />
                    </span>
                    <span className="category-star">
                      <StarIcon />
                    </span>
                    <span className="category-star">
                      <StarIcon />
                    </span>
                    <span className="category-star">
                      <StarIcon />
                    </span>
                  </div>
                  <span className="category-stars__title">{item.rating}</span>
                </div>
              </div>

              <div className="category-list__row__col">
                <span className="category-list__row__icon">
                  <MessageSmallIcon />
                </span>
                <span className="category-list__row__text">{item.reviewCount}</span>
              </div>

              <div className="category-list__row__col">
                <span className="category-list__row__icon">
                  <BasketIcon />
                </span>
                <span className="category-list__row__text">{item.sold} sold</span>
              </div>

            </div>
            <p className="category-list__subtitle">{item.desc.split(' ').slice(0, 18).join(' ')}...</p>
            <Link to={`/product/${item.slug}`} >
              <button className='category-list__button'>Veiw detalis</button>
            </Link>
          </div>

        </div>
      ))}

    </div>
  )
}

export default CategoryList