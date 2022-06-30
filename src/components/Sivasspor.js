import React from 'react'
import sivasspor from '../resources/images/sivasspor_wallpapers.webp';
import playStore from '../resources/images/play-store.webp';
import swPhn from '../resources/images/sw-phn.webp';

export default function Sivasspor() {
  return (
    <div className="sw-app-background" id="sivasspor-wallpapers">
        <div className="left-app-panel">
            <div className="bg-product">
                <div className="bg-product-start">
                    <div className="bg-product-img">
                        <img src={sivasspor} alt="Sivasspor Wallpapers" />
                    </div>
                    <div className="bg-product-title">
                        <a>Sivasspor Wallpapers</a>
                        <p>Personalization</p>
                    </div>
                </div>
                <div className="bg-product-description">
                    <p>Color your phone with Sivasspor Wallpapers app. Set the newly added Sivasspor wallpapers as your
                        phone background now.</p>
                </div>
                <div className="appdown">
                    <a href="https://play.google.com/store/apps/details?id=com.mobiroller.mobi408693277272"
                        target="_blank">
                        <img src={playStore} alt="Google Play Store" />
                    </a>
                </div>
            </div>
            <div className="bg-phone">
                <img src={swPhn} alt="Wordaily App" />
            </div>
        </div>
    </div>
  )
}
