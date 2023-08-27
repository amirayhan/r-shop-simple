import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <div className="shop">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="products">
                            <div className="row">
                                {products.map((product) => (
                                    <Product key={product.id} product={product}></Product>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="summary">
                            <h4>Order Summary</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
