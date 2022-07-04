import React from 'react'
import sponsor from '../resources/sponsors/sponsor.webp';

export default function Sponsors() {
    return (
        <>
            <div className="sponsors-title">
                <div className="dioun" />
                <h3>Partnered with</h3>
            </div>
            <div className="sponsors" id="sponsors">
                <div className="sponsor">
                    <a href="#"><img src={sponsor} /></a>
                </div>
                <div className="sponsor">
                    <a href="#"><img src={sponsor} /></a>
                </div>
                <div className="sponsor">
                    <a href="#"><img src={sponsor} /></a>
                </div>
                <div className="sponsor">
                    <a href="#"><img src={sponsor} /></a>
                </div>
                <div className="sponsor">
                    <a href="#"><img src={sponsor} /></a>
                </div>
            </div>
        </>
    )
}
