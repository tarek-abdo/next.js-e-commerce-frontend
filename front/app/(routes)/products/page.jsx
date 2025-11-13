import React from 'react'
import ProductSection from "./../../_components/ProductSection";

function ProductList({productList}) {
  return (
    <div className='my-32'>
      {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          Our Latest <span className="text-primary">Products</span>
        </h2> */}
      <ProductSection />
    </div>
        
  )
}

export default ProductList