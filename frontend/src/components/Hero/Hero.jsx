import React from 'react'
import './Hero.css'
// import arrow_icon from '../Assets/arrow_icon.png'
// import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='Hero'>
      <div className="hero-left">
        <div>
            <p>New</p>
            <p>Collections</p>
            <p>For Everyone</p>
        </div>
      </div>
      {/* <div className="hero-right">
        <img src={hero_image} height={300} alt=""/>
      </div> */}
    </div>
  )
}

export default Hero
