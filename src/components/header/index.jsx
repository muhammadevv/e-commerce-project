import React from 'react'
import { ProfileIcon, HeartIcon, CartIcon } from '../../assets/icons'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { modalOpen } from '../../store/slices/modals'

function Header() {
    const dispatch = useDispatch()
    const { isAuth } = useSelector(state => state.user)
    const navigate = useNavigate()
    const handleProfile = () => {
        if (isAuth) {
            navigate('/profile')
        }
        else {
            dispatch(modalOpen('registerModal'))
        }
    }
    return (
        <header className='header'>
            <div className="header-top">
                <div className="container">
                    <div className="header-row">
                        <div className="header-logo">
                            <Link to={'/'}>
                                <h1><span>i</span>Store</h1>
                            </Link>
                        </div>

                        <form className="header-search">
                            <input type="text" placeholder='Search...' className='header-search__input' />
                            <button className="header-search__button">Search</button>
                        </form>

                        <div className="header-buttons">
                            <button className="header-button" onClick={handleProfile}>
                                <span className='header-button__icon'>
                                    <ProfileIcon />
                                </span>
                                <span className="header-button__text">{isAuth ? 'Profile' : 'Register'}</span>
                            </button>
                            <Link to='/orders'>
                                <button className="header-button">
                                    <span className='header-button__icon'>
                                        <HeartIcon />
                                    </span>
                                    <span className="header-button__text">Orders</span>
                                </button>
                            </Link>
                            <Link to='/cart'>
                                <button className="header-button">
                                    <span className="header-button__icon">
                                        <CartIcon />
                                    </span>
                                    <span className="header-button__text">My cart</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header