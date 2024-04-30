import React from 'react'
import { useSelector } from 'react-redux'

function ProfilePage() {
  const { user } = useSelector(state => state.user)
  console.log(user);
  return (
    <div className='profile'>
      <div className="container">
        <div className="profile-wrapper">
          <h1 className="profile-title">Profile</h1>
          <form className='profile-form'>
            <div className="profile-form__group">
              <label className='profile-form__label' htmlFor="name">Full name : </label>
              <input className='profile-form__input' defaultValue={user.name} id='name' type="text" />
            </div>
            <div className="profile-form__group">
              <label className='profile-form__label' htmlFor="email">Email:</label>
              <input className='profile-form__input' defaultValue={user.email} id='email' type="email" pattern='{0,9}[9]' />
            </div>
            <div className="profile-form__group">
              <label className='profile-form__label' htmlFor="password">Password:</label>
              <input className='profile-form__input' defaultValue={user.password} id='password' type="Password" pattern='{0,9}[9]' />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage