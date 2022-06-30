import React from 'react'
import wallsdrobe from '../resources/images/wallsdrobe.webp';
import playStore from '../resources/images/play-store.webp';
import wPhn from '../resources/images/wallsdrobe-phn.webp';

export default function Wallsdrobe() {
  return (
    <div className="wallsdrobe-app-background" id="wallsdrobe">
        <div className="right-app-panel">
            <div className="bg-product">
                <div className="bg-product-start">
                    <div className="bg-product-img">
                        <img src={wallsdrobe} alt="Wallsdrobe" />
                    </div>
                    <div className="bg-product-title">
                        <a>Wallsdrobe</a>
                        <p>Personalization</p>
                    </div>
                </div>
                <div className="bg-product-description">
                    <p>Wallsdrobe offers you the best background wallpapers for free.
                        Personalize your phone by easily downloading HD wallpapers.
                        Benefit from a constantly enriching collection, we offer you more and more wallpapers every day.
                    </p>
                </div>
                <div className="appdown">
                    <a href="https://play.google.com/store/apps/details?id=com.yigidosoft.wallsdrobe" target="_blank">
                        <img src={playStore} alt="Google Play Store" />
                    </a>
                </div>
            </div>
            <div className="bg-phone">
                <img src={wPhn} alt="Wordaily App" />
            </div>
        </div>
    </div>
  )
}
