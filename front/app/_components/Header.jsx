'use client'
import { UserButton, useUser } from '@clerk/nextjs'
import { ShoppingCart, ShoppingCartIcon } from 'lucide-react';
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../_context/CartContext';
import CartApis from '../_utils/CartApis';
import Cart from '../_components/Cart'

function Header() {
  const { user } = useUser()
  const [isLoggedIn, setLoggedIn] = useState(false)
  const { cart, setCart } = useContext(CartContext)
  const [openCart, setOpenCart] = useState(false)

  useEffect(() => {
    setLoggedIn(window.location.href.toString().includes('sign-in'))
  }, [])

  useEffect(() => {
    user && getCartItems()
  }, [user])

  const getCartItems = () => {
    CartApis.getUserCartItems(user.primaryEmailAddress.emailAddress)
      .then((res) => {
        setCart([])
        res?.data?.data.forEach((citem) => {
          setCart((oldCart) => [
            ...oldCart,
            { id: citem.id, product: citem?.attributes?.products?.data[0] },
          ])
        })
      })
      .catch((err) => console.error(err))
  }

  return !isLoggedIn && (
    <header className="bg-white fixed top-0 w-full z-50 shadow-md ">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="logo" width={50} height={50} className="cursor-pointer" />
          <span className="font-bold text-xl text-gray-800">DigitalStore</span>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-gray-600 font-medium text-sm">
          <a href="/" className="hover:text-primary transition-colors">Home</a>
          <a href="/products" className="hover:text-primary transition-colors">Products</a>
          <a href="/about" className="hover:text-primary transition-colors">About Us</a>
          <a href="/contact" className="hover:text-primary transition-colors">Contact Us</a>
        </nav>

        {/* Right Section */}
        {!user ? (
          <div className="flex items-center gap-4">
            <a
              href="/sign-in"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-teal-700 transition"
            >
              Login
            </a>
            <a
              href="/register"
              className="hidden sm:block rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-teal-500 hover:text-teal-600 transition"
            >
              Register
            </a>
          </div>
        ) : (
          <div className="flex items-center gap-5">
            <button
              className="flex items-center gap-1 text-gray-700 hover:text-primary transition"
              onClick={() => setOpenCart(!openCart)}
            >
              <ShoppingCart size={22} />
              <span>({cart?.length})</span>
            </button>

            <UserButton afterSignOutUrl="/" />

            {openCart && <Cart />}
          </div>
        )}

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="p-2 text-gray-600 rounded-md hover:bg-gray-100 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header