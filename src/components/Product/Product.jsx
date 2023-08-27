import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Product = ({ product, handleAddToCart }) => {
    const { img, name, price, seller, ratings } = product;
    return (
        <div className="col-lg-4">
            <Card className="mb-4" style={{ width: "100%" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Brands: {seller}</Card.Text>
                    <h4>Price: {price}</h4>
                    <h6>Ratings: {ratings}</h6>
                    <Button onClick={() => handleAddToCart(product)} variant="warning" style={{ width: "100%" }}>
                        Add to Cart
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;
