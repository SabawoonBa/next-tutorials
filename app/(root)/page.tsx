import ProductCard from '@/components/ProductCard';
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='p-4'>
      <h1 className='font-bold text-lg'>Hello World</h1>
      <Link href="/users" className='btn border-spacing-0 border'>Add New User</Link>
      <ProductCard />
    </div>
  )
}

export default page
