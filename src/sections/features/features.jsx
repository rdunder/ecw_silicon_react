

import './features.css';

import logo1 from './logo1.svg';
import logo2 from './logo2.svg';
import logo3 from './logo3.svg';
import logo4 from './logo4.svg';
import logo5 from './logo5.svg';
import logo6 from './logo6.svg';

function SectionFeatures() {
    const brandLogos = [logo1, logo2, logo3, logo4, logo5, logo6];

    return (
    <section className="section-features">
        <div className="logo-container container">
            {brandLogos.map(logo => (
                <div key={logo} className="logo">
                    <img src={logo} alt="logotype" />
                </div>
            ))}

            {/* <div className="logo">
                <img src="./assets/p2 logo 1.svg" alt="logotype" />
            </div>
            <div className="logo">
                <img src="./assets/p2 logo 2.svg" alt="logotype" />
            </div>
            <div className="logo">
                <img src="./assets/p2 logo 3.svg" alt="logotype" />
            </div>
            <div className="logo">
                <img src="./assets/p2 logo 4.svg" alt="logotype" />
            </div>
            <div className="logo">
                <img src="./assets/p2 logo 5.svg" alt="logotype" />
            </div>
            <div className="logo">
                <img src="./assets/p2 logo 6.svg" alt="logotype" />
            </div> */}
        </div>
        <div id="Features" className="feature-large-container container">
            <div className="img-iphone">
                <img src="./assets/p2 img iPhone 12 Pro.png" alt="graphical image of an iphone" />
            </div>

            <div>
                <div className="features-content">
                    <h2>App Features</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
                </div>

                <div className="feature-container">
                    <div className="feature">
                        <div className="ft-img">
                            <img src="./assets/p2 logo easy payments.svg" aria-hidden="true" />
                        </div>
                        <div>
                            <h3>Easy Payments</h3>
                            <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                        </div>
                    </div>
                    <div className="feature">
                        <div className="ft-img">
                            <img src="./assets/p2 logo data security.svg" aria-hidden="true" />
                        </div>
                        <div>
                            <h3>Data Security</h3>
                            <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                        </div>
                    </div>
                    <div className="feature">
                        <div className="ft-img">
                            <img src="./assets/p2 logo cost statistics.svg" aria-hidden="true" />
                        </div>
                        <div>
                            <h3>Cost Statistics</h3>
                            <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                        </div>
                    </div>
                    <div className="feature">
                        <div className="ft-img">
                            <img src="./assets/p2 logo support 247.svg" aria-hidden="true" />
                        </div>
                        <div>
                            <h3>Support 27/7</h3>
                            <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                        </div>
                    </div>
                    <div className="feature">
                        <div className="ft-img">
                            <img src="./assets/p2 logo regular cashback.svg" aria-hidden="true" />
                        </div>
                        <div>
                            <h3>Regular Cashback</h3>
                            <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
                        </div>
                    </div>
                    <div className="feature">
                        <div className="ft-img">
                            <img src="./assets/p2 logo top standards.svg" aria-hidden="true" />
                        </div>
                        <div>
                            <h3>Top Standards</h3>
                            <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default SectionFeatures;