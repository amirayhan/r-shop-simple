import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToDb, deleteShoppingCart, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find((product) => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products]);
    const handleAddToCart = (product) => {
        // const newCart = [...cart, product];
        let newCart = [];
        const exists = cart.find((pd) => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        } else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter((pd) => pd.id !== product.id);
            newCart = [...remaining, exists];
        }

        setCart(newCart);
        addToDb(product.id);
    };
    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    };
    return (
        <div className="shop mt-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="products">
                            <div className="row">
                                {products.map((product) => (
                                    <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <Cart cart={cart} handleClearCart={handleClearCart}>
                            <Link to="/order">
                                <button className="review_order_btn">
                                    Review Order
                                    <span className="ms-2">
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </span>
                                </button>
                            </Link>
                        </Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
