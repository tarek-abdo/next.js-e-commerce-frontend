'use client'

import BreadCrumb from '../../../_components/BreadCrumb'
import ProductApis from '../../../_utils/ProductApis'
import React, { useEffect, useState } from 'react'
import ProductBanner from './_componenets/ProductBanner'
import ProductInfo from './_componenets/ProductInfo'
import ProductList from '../../../_components/ProductList'
import { usePathname } from 'next/navigation'

function ProductDetails({params}) {
  const path = usePathname();
  console.log('path', path)
  const [productDetails, setProductDetails] = useState({})
  const [productList, setProductList] = useState([])
  useEffect(()=>{
    getProductById_()
  },[params?.productId])
  const getProductById_ =()=>{
    ProductApis.getProductById(params?.productId).then(res=>{
      console.log('product item', res.data.data)
      setProductDetails(res.data.data)
      getProductListByCategory(res?.data?.data)
    })
  }
  const getProductListByCategory = (product) =>{
    ProductApis.getProductByCategory(product?.attributes?.category).then(res=>{
      console.log(res?.data?.data)
      setProductList(res?.data?.data)
    })
  }
  return (
    <div className='px-10 pt-20 md:px-28'>
      <BreadCrumb path={path}/>
      <div className='mt-10 gap-5 grid grid-cols-1 sm:grid-cols-2 justify-around '>
        <ProductBanner product={productDetails}/>
        <ProductInfo product={productDetails}/>
      </div>
      <div>
        <h2 className='mt-24 mb-5 text-xl '>Similar Products</h2>
        <ProductList productList={productList}/>
      </div>
    </div>
  )
}

export default ProductDetails