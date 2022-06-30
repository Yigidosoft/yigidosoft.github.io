import React from 'react'
import wordaily from '../resources/images/wordaily.webp';
import playStore from '../resources/images/play-store.webp';
import wPhn from '../resources/images/wordaily-phn.webp';

export default function Wordaily() {
  return (
    <div className="wordaily-app-background" id="wordaily">
        <div className="left-app-panel">
            <div className="bg-product">
                <div className="bg-product-start">
                    <div className="bg-product-img">
                        <img src={wordaily} alt="Wordaily"/>
                    </div>
                    <div className="bg-product-title">
                        <a>Wordaily</a>
                        <p>Puzzle</p>
                    </div>
                </div>
                <div className="bg-product-description">
                    <p>Wordaily is now in your pocket. Guess a word and use the colors of the boxes to help guide your
                        next decision. You have 6 tries to guess the correct word. Every 24 hours there is a new word of
                        the day and it is up to you to figure out what it is.</p>
                </div>
                <div className="appdown">
                    <a href="https://play.google.com/store/apps/details?id=com.yigidosoft.wordaily" target="_blank">
                        <img src={playStore} alt="Google Play Store"/>
                    </a>
                </div>
            </div>
            <div className="bg-phone">
                <img src={wPhn} alt="Wordaily App"/>
            </div>
        </div>
    </div>
  )
}
