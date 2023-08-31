import React from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";

const Order = () => {
    const cart = useLoaderData();
    return (
        <div className="shop mt-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="products">
                            <div className="row">
                                <h1>Order Details: {cart.length}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
