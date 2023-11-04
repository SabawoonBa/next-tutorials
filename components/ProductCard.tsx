'use client';

import React from 'react'

const ProductCard = () => {
  return (
    <div>
      <button className={`btn btn-primary`} onClick={() => {console.log("Clicked!!!")}}>Add to Card</button>
    </div>
  )
}

export default ProductCard
