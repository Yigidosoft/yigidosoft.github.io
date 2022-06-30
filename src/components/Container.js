import React from 'react'
import wordaily from '../resources/images/wordaily.webp';
import wallsdrobe from '../resources/images/wallsdrobe.webp';
import sivasspor from '../resources/images/sivasspor_wallpapers.webp';

export default function Container() {
  return (
    <div className="container">
        <div className="product">
            <div className="product-img">
                <img src={wordaily} alt="Wordaily"/>
            </div>
            <div className="product-title">
                <a href="#wordaily">Wordaily</a>
                <p>Puzzle</p>
            </div>
        </div>
        <div className="product">
            <div className="product-img">
                <img src={wallsdrobe} alt="Wallsdrobe"/>
            </div>
            <div className="product-title">
                <a href="#wallsdrobe">Wallsdrobe</a>
                <p>Personalization</p>
            </div>
        </div>
        <div className="product">
            <div className="product-img">
                <img src={sivasspor} alt="Sivasspor Wallpapers"/>
            </div>
            <div className="product-title">
                <a href="#sivasspor-wallpapers">Sivasspor Wallpapers</a>
                <p>Personalization</p>
            </div>
        </div>
    </div>
  )
}
