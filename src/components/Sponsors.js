import React from 'react'
import sponsor from '../resources/sponsors/sponsor.webp';

export default function Sponsors() {
  return (
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
  )
}
