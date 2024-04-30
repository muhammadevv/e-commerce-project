import React from 'react'
import { FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon, YouTubeIcon, AppStoreIcon, GooglePlayIcon } from '../../assets/icons'
function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-logo">
                        <div className="footer-logo__image">
                            <h1 style={{ color: '#0D6EFD' }}><span style={{ color: '#8b96a5' }}>i</span>Store</h1>
                        </div>

                        <p className="footer-logo__text">Best information about the company gies here but now lorem ipsum is</p>

                        <div className="footer-logo__social">
                            <span className="footer-logo__social__icon"> <FacebookIcon /> </span>
                            <span className="footer-logo__social__icon"> <TwitterIcon /> </span>
                            <span className="footer-logo__social__icon"> <LinkedinIcon /> </span>
                            <span className="footer-logo__social__icon"> <InstagramIcon /> </span>
                            <span className="footer-logo__social__icon"> <YouTubeIcon /> </span>
                        </div>
                    </div>
                    <div className="footer-box">
                        <h3 className='footer-title'>About</h3>
                        <a className='footer-link' href="#">About Us</a>
                        <a className='footer-link' href="#">Find store</a>
                        <a className='footer-link' href="#">Categories</a>
                        <a className='footer-link' href="#">Blogs</a>
                    </div>
                    <div className="footer-box">
                        <h3 className='footer-title'>Partnership</h3>
                        <a className='footer-link' href="#">About Us</a>
                        <a className='footer-link' href="#">Find store</a>
                        <a className='footer-link' href="#">Categories</a>
                        <a className='footer-link' href="#">Blogs</a>
                    </div>
                    <div className="footer-box">
                        <h3 className='footer-title'>Information</h3>
                        <a className='footer-link' href="#">Help Center</a>
                        <a className='footer-link' href="#">Money Refund</a>
                        <a className='footer-link' href="#">Shipping</a>
                        <a className='footer-link' href="#">Contact us</a>
                    </div>
                    <div className="footer-box">
                        <h3 className='footer-title'>For users</h3>
                        <a className='footer-link' href="#">Login</a>
                        <a className='footer-link' href="#">Register</a>
                        <a className='footer-link' href="#">Settings</a>
                        <a className='footer-link' href="#">My Orders</a>
                    </div>
                    <div className="footer-box">
                        <h3 className='footer-title'>Get app</h3>
                        <div className="footer-app-store">
                            <AppStoreIcon />
                        </div>
                        <div className='footer-google-play'>
                            <GooglePlayIcon />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer