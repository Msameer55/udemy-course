import React from 'react';
import { NavLink } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {

    return (
        <>
            <div className="card-container">
                <div className="inner-card">
                    <div className="card-image">
                        <NavLink to={`/product/${product._id}`}>
                            <img className='asset-image' src={product.image} alt="Product-Image" />
                        </NavLink>
                    </div>
                    <div className="card-body">
                        <div className="card-text">
                            <NavLink to={`/product/${product._id}`}>
                                <h5>{product.name}</h5>
                            </NavLink>
                        </div>
                       <Rating value={product.rating} text={product.numReviews} />
                        <div className="card-price">
                            <p>${product.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;
