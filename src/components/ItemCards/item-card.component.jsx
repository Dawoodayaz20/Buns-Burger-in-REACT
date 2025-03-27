import React from "react";
import './item-card.styles.css'



const ItemCard = ({ name, price, ImgLink }) => {

    let imagePath;
    try {
        imagePath = require(`../../assets/${ImgLink}`);
    } catch (error) {
        console.error(`Image not found: ${ImgLink}`, error);
        // imagePath = require(`../../assets/default.jpg`); // Fallback image
    }
    return (
        <div className="item">
            <div className="item-image">
            <img className="item-image" src={imagePath} alt={name} />
            </div>
            <div className="item-details">
                <h2 className="item-title">
                {name}
                </h2>
                <div className="item-price">
                {price}
                </div>
            </div>
        </div>
    )
}

export default ItemCard