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
            <h1>New Heading</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi dolor maiores sint architecto, non rerum, neque ducimus eius explicabo quibusdam omnis facilis! Porro in velit ullam numquam facilis impedit, nihil cumque ab natus dignissimos voluptate iste quod quo ut distinctio vero? Veniam vel placeat alias dolores iusto consectetur, doloremque obcaecati earum vero atque, est delectus facere nobis quam aut error ut quaerat? Vero inventore velit rem alias nemo quasi, earum
                magnam laborum fuga dolores hic dolore est quam ex nihil suscipit reprehenderit. Cumque architecto at vero obcaecati vitae voluptatibus illo labore laborum totam nisi excepturi quas veniam delectus, odit, dolores dolor! Quia nostrum ex qui! Dolore fugit, rerum nemo praesentium cumque officia repudiandae quas earum quis, quo aperiam. Quidem, aut corporis neque dolorum praesentium repudiandae saepe, quod in, quas blanditiis ullam porro ducimus cupiditate quaerat recusandae? Impedit
                necessitatibus in tempore assumenda velit autem perferendis inventore odio. Facere libero fugiat officiis.
            </p>
            <span>
                <b>Grand Total: ${grandTotal.toFixed(2)}</b>
            </span>
        </div>
    );
};

export default Cart;
