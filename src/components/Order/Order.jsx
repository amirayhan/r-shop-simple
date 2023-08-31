import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Order = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handleRemveFromCart = (id) => {
        const remaining = cart.filter((product) => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
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
                            {cart.map((product) => (
                                <ReviewItem key={product.id} product={product} handleRemveFromCart={handleRemveFromCart}></ReviewItem>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-3">
                        <Cart cart={cart} handleClearCart={handleClearCart}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
