import React from 'react'
import Product from '../components/Product'
import { useContext } from 'react';
import { DataContext } from '../DataContext'

function ProductPage() {
  const context = useContext(DataContext);

  
  return (
    <div className="max-w-full flex justify-center">
        <div className="max-w-7xl grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6 mt-8 m-16 cursor-pointer">
        {context.map((data => {
            return (<>
            <Product data={data}/>
            </>)
        }))}
        </div>
    </div>
  )
}

export default ProductPage