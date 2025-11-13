'use client'
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import ProductApis from '../_utils/ProductApis'

function ProductSection() {
    const [productList, setProductList] = useState([])
    useEffect(()=>{
        getLatestProducts_()
    }, [])
    const getLatestProducts_ = ()=>{
        ProductApis.getLatestProducts().then(res=>{
            console.log(res.data.data)
            setProductList(res.data.data)
        })
    }
  return (
    <div className='px-10 md:px-20'>
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          Our Latest <span className="text-primary">Products</span>
        </h2>
        {/* <h2 className='my-4 text-xl'>Our Latest Products</h2> */}
        <ProductList productList = {productList}/></div>
  )
}

export default ProductSection