import React from 'react'
import ElectronicsContent from './ElectronicsContent'
import ElectronicsProducts from './ElectronicsProducts'

function Electronics () {
  return (
    <section className="electronics">
    <div className="container">
      <div className="electronics-wrapper">
        <ElectronicsContent/>
        <ElectronicsProducts/>
      </div>
    </div>
  </section>
  )
}

export default Electronics 