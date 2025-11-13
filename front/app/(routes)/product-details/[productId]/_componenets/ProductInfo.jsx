'use Client'
import { AlertOctagon, BadgeCheck, ShoppingCart } from 'lucide-react'
import React, { useContext } from 'react'
import SkeletonProductInfo from './SkeletonProductInfo'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import CartApis from '../../../../_utils/CartApis'
import { CartContext } from '../../../../_context/CartContext'

function ProductInfo({product}) {
  const {cart, setCart} = useContext(CartContext)
  const {user} = useUser();
  const router = useRouter();
  const handleAddToCart = () =>{
    if (!user){
      router.push('/sign-in')
    } else {
      const data = {
        data : {
          userName: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          products:[product?.id]
        }
      }
      CartApis.addToCart(data).then(res =>{
        console.log("this is cart data", res.data.data),
        setCart(oldCart =>[
          ...oldCart,
          {
            id: res?.data?.data?.id,
            product
          }
        ]
      )
    }
    )
      }
        
    }
  
  return (
    <div>
        {product?.id ? <div>
        <h2 className='text-[200]'>{product?.attributes?.title}</h2>
        <h2 className='text-[15px] text-gray-400'>{product?.attributes?.category}</h2>
        <h2 className='text-[13-px] mt-5'>{product?.attributes?.description}</h2>
       <h2 className='text-[11px] text-gray-500 mt-5 flex gap-2 items-center'>{product?.attributes?.instantDelivery? <BadgeCheck className='text-green-500 h-5 w-5' />: <AlertOctagon />}Eligible for Instant Delivery</h2>
        <h2 className='text-[32px] text-primary mt-3'>${product?.attributes?.price}</h2>
        <button onClick={()=>handleAddToCart()} className='flex gap-2 text-white bg-primary  p-3 rounded-lg hover:bg-teal-600'><ShoppingCart />Add To Cart</button>
        </div>
        :
        <SkeletonProductInfo />
    }
        
        
    </div>
  )
}

export default ProductInfo