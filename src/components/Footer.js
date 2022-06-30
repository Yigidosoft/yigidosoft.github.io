import React from 'react'
import logo from '../resources/images/logo.webp';

export default function Footer() {
  return (
    <footer>
        <div className="content">
            <div className="top">
                <div className="logo-panel">
                    <div className="logo-img">
                        <img src={logo} alt="Yiğidosoft" />
                    </div>
                    <div className="logo-text">
                        <a href="/" translate="no">YiğidoSoft</a>
                    </div>
                </div>
                <div className="media-icons">
                    <a href="https://discord.gg/t7qgzBRr2C"><i className="fab fa-discord"></i></a>
                    <a href="https://twitter.com/yigidosoft"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/yigidosoft/"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/company/65796406/"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://www.youtube.com/channel/UCgOpGOvYj73OtIb2UoAw1fQ"><i
                            className="fab fa-youtube"></i></a>
                </div>
            </div>
        </div>

        <div className="bottom-details">
            <div className="bottom_text">
                <span className="copyright_text">Copyright &#169; 2017 <a href="/" translate="no">Yiğidosoft.</a>All rights reserved</span>
                <span>
                    <a href="https://yigidosoft.com/documentation/docs/#faqs" onClick="window.open('https://yigidosoft.com/documentation/docs/#faqs', '_blank');">FAQ</a>
                    <a href="https://yigidosoft.com/documentation/docs/#cookie-policy" onClick="window.open('https://yigidosoft.com/documentation/docs/#cookie-policy', '_blank');">Cookie Policy</a>
                    <a href="https://yigidosoft.com/documentation/docs/#privacy-policy" onClick="window.open('https://yigidosoft.com/documentation/docs/#privacy-policy', '_blank');">Privacy
                        Policy</a>
                    <a href="https://yigidosoft.com/documentation/docs/#terms-of-service" onClick="window.open('https://yigidosoft.com/documentation/docs/#terms-of-service', '_blank');">Terms &
                        Service</a>
                </span>
            </div>
        </div>
    </footer>
  )
}
