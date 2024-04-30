import React from 'react'
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
function productCards({ src, name, price }) {
  return (
    <div className="card">
      <img src={src} className="card-img-top" alt="Fissure in Sandstone" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">PRICE: $ {price} USD </p>
        <p style={{ color: 'whitesmoke' }}><FaStar /><FaStar /><FaStar /><FaStar /><span style={{ color: 'black' }}><FaStar /></span></p>
        <a href="/" className="btn btn-sm" data-mdb-ripple-init>ADD TO CART  <HiOutlineShoppingCart /></a>
      </div>
    </div>
  )
}

export default productCards