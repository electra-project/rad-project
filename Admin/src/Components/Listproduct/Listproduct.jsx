import './Listproduct.css'
import {useState, useEffect} from 'react'
import cross_icon from '../../assets/cross_icon.png'

const Listproduct = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState(''); // New state for search query

    const fetchInfo = async () => {
      await fetch('http://localhost:4000/allproducts')
      .then((res)=>res.json())
      .then ((data)=>{setAllProducts(data)});
    }
    
    useEffect(()=>{
      fetchInfo();
    },[])

    const removeProduct = async (id) => {
      await fetch('http://localhost:4000/removeproduct',{
        method: 'POST',
        headers:{
          Accept:'application/json',
          "Content-Type":"application/json",
        },
        body: JSON.stringify({id:id})
      })
      await fetchInfo();
    }

    // Filter products based on search query
    const filteredProducts = allProducts.filter(product => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="list-product">
        <h1>All Products List</h1>
        <input 
          type="text" 
          placeholder="Search by product name..." 
          className="search-input" 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query
        />
        <div className="listproduct-format-main">
          <p className="k">Product</p>
          <p>Title</p>
          <p>Old Price</p>
          <p>New Price</p>
          <p>Category</p>
          <p>Remove</p>
        </div>
        <div className="lisproduct-allproducts">
          <hr />
          {filteredProducts.map((product, index) => {
            return (
              <div key={index}>
                <div className="listproduct-format-main-2 listproduct-format">
                  <img src={product.image} alt="productimage" className="listproduct-product-icon"/>
                  <p>{product.name}</p>
                  <p>{product.old_price} Rs</p>
                  <p>{product.new_price} Rs</p>
                  <p>{product.category}</p>
                  <img onClick={() => removeProduct(product.id)} className="listproduct-remove-icon" src={cross_icon} alt="remove" />
                </div>
                <hr />
              </div>
            )
          })}
        </div>
      </div>
    )
}

export default Listproduct
