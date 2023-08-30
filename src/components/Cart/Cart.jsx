import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
    let totalPrice = 0;
    let totalShipping = 0;

    for (const product of cart) {
        // if (product.quantity === 0) {
        //     product.quantity = 1;
        // }
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = (totalPrice * 7) / 100;
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className="summary">
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <span>
                <b>Grand Total: ${grandTotal.toFixed(2)}</b>
            </span>
        </div>
    );
};

export default Cart;
