import React from 'react'
import ProductCard from './ProductCard';


 function ProductListings({products}) {
  return (
 
    <div className='product-listings-container'>
        <div className='product-listings-grid'>
         {
           products.length > 0 ? (
               products.map( (product) => ( <ProductCard key ={product.productId} product = {product }/>) )
           ) :  ( <p className='product-listgs-empty'>  No products Found </p> )

         };

        </div>
    </div>
  );
};

export default ProductListings;