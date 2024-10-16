
import './header.css';

import imgIphone from './iPhone12Pro.png';
import gPlayLogo from './googleplayLogo.svg';

function Header() {


    return (
        <>
            <div className="header-content container">
                <h1>Manage All Your Money in One App</h1>
        
                <p>We offer you a new generation of the mobile banking. <br />Save, spend & manage money in your pocket.</p>
        
                <div className="btn-store-container">

                    <a className="btn-app-store" href="https://www.apple.com/se/app-store/" target="_blank">
                        <i className="fa-brands fa-apple fa-xl"></i>
                        <div>
                            <span>Download on the</span>
                            <span>App Store</span>
                        </div>
                    </a>

                    <a className="btn-app-store" href="https://play.google.com/store/games?hl=sv" target="_blank">
                        <img src={gPlayLogo} alt="google playstore logotype" />
                        <div>
                            <span>Get it on</span>
                            <span>Google Play</span>
                        </div>                            
                    </a>

                </div>

                <a href="#Features" className="btn-discover-more">
                        <span>
                            <i className="fa-solid fa-chevron-down"></i>
                        </span>
                    <p>Discover More</p>
                </a>                
        
                <div className="iphone-header-img">
                    <img src={imgIphone} alt="graphical image of an iphone" />
                </div>
            </div>
        </>
    )
}

export default Header;