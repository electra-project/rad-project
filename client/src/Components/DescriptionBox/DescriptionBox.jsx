import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className="descriptionBox">
      <div className="descriptionBox-navigator">
        <div className="description-nav-box"> Description</div>
        <div className="description-nav-box fade"> Review </div>
      </div>
      <div className="descriptionBox-description">
        <p> An e-commerce web iste is an online platform that facilities buying and selling of products or services over the internet servers as a virtual marketplace where business and individuals showcase their products</p>
        <p> Some text </p>
      </div>
    </div>
  )
}

export default DescriptionBox
