import React from 'react'
import './RelatedProducts.css'
import data_products from '../Assets/data'
import Item from '../Items/Items'

const RelatedProducts = () => {    
  return (
    <div className="related-products">
      <h1> Related Products</h1>
      <hr />
      <div className="related-products-items" >
        {data_products.map((item,i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_item } />
        })}
      </div>
    </div>
  )
}

export default RelatedProducts
