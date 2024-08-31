import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductDisplay.css';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const navigate = useNavigate(); // Hook to programmatically navigate

    const isAuthenticated = () => {
        return !!localStorage.getItem('auth-token');
    };

    const handleAddToCart = () => {
        if (isAuthenticated()) {
            addToCart(product.id);
        } else {
            navigate('/login'); // Redirect to login if not authenticated
        }
    };

    return (
        <div className="product-display">
            <div className="product-display-left">
                <div className="product-display-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="product-display-img">
                    <img className="productdisplay-main-img" src={product.image} alt="" />
                </div>
            </div>
            <div className="product-display-right">
                <h1>{product.name}</h1>
                <div className="product-display-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="product-display-right-prices">
                    <div className="product-display-right-price-old">
                        {product.old_price} RS
                    </div>
                    <div className="product-display-right-price-new">
                        {product.new_price} RS
                    </div>
                </div>
                <div className="product-display-right-description">
                    Some description we need to add this in the all_product part. If we do that, we will have to change the structure of the props in the other components.
                </div>
                <div className="product-display-right-size">
                    <h1>Select Size</h1>
                    <div className="product-display-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={handleAddToCart}>ADD TO CART</button>
                <p className="product-display-right-category"><span>Category:</span> Women, T-Shirt, Crop Top</p>
                <p className="product-display-right-category"><span>Tags:</span> Modern, Latest</p>
            </div>
        </div>
    );
};

export default ProductDisplay;
