import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ product, handleRemveFromCart }) => {
    const { id, img, name, price, quantity } = product;
    return (
        <div className="review_item p-2 d-flex justify-content-between">
            <div className="product_content d-flex">
                <img src={img} alt="" />
                <div className="content">
                    <h3>{name}</h3>
                    <p>
                        Price: <span className="text-warning">${price}</span>
                    </p>
                    <p>
                        Quantity: <span className="text-warning">{quantity} Pcs</span>
                    </p>
                </div>
            </div>
            <button onClick={() => handleRemveFromCart(id)} className="delete_button">
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    );
};

export default ReviewItem;
