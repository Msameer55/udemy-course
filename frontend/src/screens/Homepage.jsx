import React, { useEffect, useState } from 'react'
import Product from '../components/Product'

const Homepage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
       const getData = async () => {
        try{
           const response =await fetch("http://localhost:5000/api/products");
           if(!response.ok){
            throw new Error(`HTTP! error Status: ${response.status}`);
           }
           const data =await response.json();
           setProducts(data);
        }
       catch(err){
        throw new Error(err);
       }
       }
       getData();
    }, [])
   

    return (
        <>
            <div className="products-container">
                <div className="inner-container">
                    <h1>Latest Products</h1>
                    <div className="d-flex justify-start align-center flex-wrap">
                        {
                            products.map((product) => {
                                return (
                                    <div className="card-col" key={product._id}>
                                        <Product product={product} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage