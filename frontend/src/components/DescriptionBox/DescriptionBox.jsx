import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description </div>
         <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Explore our diverse range of jewelry, from classic rings and 
          elegant necklaces to vibrant gemstone earrings and sophisticated bracelets. 
          Each piece is meticulously designed and crafted using the finest materials, 
          ensuring that every item radiates luxury and charm.</p>
       
      </div>
    </div>
  )
}

export default DescriptionBox