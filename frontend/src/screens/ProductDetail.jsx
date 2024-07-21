import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Rating from '../components/Rating';

const ProductDetail = () => {
    const [product, setProduct] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();
    const productId = id;

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/products/${productId}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log('Fetched Product Data:', data); // Log to check data
                setProduct(data);
            } catch (err) {
                console.error('Error fetching product data:', err);
            }
        }
        
        getData();
    }, [productId]);

    const handleBackBtn = () => {
        navigate(-1);
    }

    return (
        <>
            <div className="products-details-page-container">
                <div className="inner-container">
                    <div className="d-flex justify-between">
                        <div className="col-1">
                            <div className="product-image-container">
                                <img src={product.image} alt={product.name} />
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="product-details-container">
                                <div className="product-name product-row"><h3>{product.name}</h3></div>
                                <div className="product-price product-row"><p><strong>${product.price}</strong></p></div>
                                <div className="product-reviews product-row"><Rating value={product.rating} text={product.numReviews} /></div>
                                <div className="prdouct-description product-row"><p>{product.description}</p></div>
                                <div className={`stock product-row ${product.countInStock ? "in-stock" : "out-of-stock"}`}>{product.countInStock > 0 ? <p>In Stock</p> : <p>Out of Stock</p>}</div>
                                <div className="add-to-cart-btn product-row">
                                    <button className="btn" disabled={!product.countInStock}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="go-back-btn" onClick={handleBackBtn}>
                        <button className='btn'>Go Back</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail;
