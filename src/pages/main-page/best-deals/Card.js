import React from 'react'
import './Card.css'

function Card(title, imageUri, body) {
  return (
    <div className='card-container'>
      <div className='image-container'>
        <img src={imageUri} alt=''></img>
      </div>
      <div className='card-content'>
        <div className='card-title'>
          <h3>{title}</h3>
        </div>
        <div className='card-body'>
          <p>{body}</p>
        </div>
      </div>
      
      <div className='btn'>
        <button>View Product</button>
      </div>
    </div>
  )
}

export default Card