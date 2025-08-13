import React from 'react'
import PageHeading from './PageHeading'
import products from '../data/products'
import ProductListings from './ProductListings'

function Home() {
  return (
       <div className='home-container'>
        <PageHeading  title ="Explore Your Favorite Stickers" >
          Add a touch of creativity to your space with our wide range of
               fun and unique stickers. perfect for any occassion!
        </PageHeading>
        <ProductListings products = {products} />
     </div>
  )
}

export default Home