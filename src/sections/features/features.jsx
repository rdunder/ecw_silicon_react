
//#region Import CSS and Assets
import './features.css';

import iphoneImg from './assets/iPhone12Pro.png';
import logo1 from './assets/logo1.svg';
import logo2 from './assets/logo2.svg';
import logo3 from './assets/logo3.svg';
import logo4 from './assets/logo4.svg';
import logo5 from './assets/logo5.svg';
import logo6 from './assets/logo6.svg';
import featCashback from './assets/feat_cashback.svg';
import featPayments from './assets/feat_payments.svg';
import featSecurity from './assets/feat_security.svg';
import featStandards from './assets/feat_standards.svg';
import featStatistics from './assets/feat_statistics.svg';
import featSupport from './assets/feat_support.svg';
//#endregion

function SectionFeatures() {
    const brandLogos = [logo1, logo2, logo3, logo4, logo5, logo6];
    const features = [
        {
            img: featPayments,
            title: "Easy Payments",
            content: "Id mollis consectetur congue egestas egestas suspendisse blandit justo."
        },
        {
            img: featSecurity,
            title: "Data Security",
            content: "Id mollis consectetur congue egestas egestas suspendisse blandit justo."
        },
        {
            img: featStatistics,
            title: "Cost Statistics",
            content: "Id mollis consectetur congue egestas egestas suspendisse blandit justo."
        },
        {
            img: featSupport,
            title: "Support 27/7",
            content: "Id mollis consectetur congue egestas egestas suspendisse blandit justo."
        },
        {
            img: featCashback,
            title: "Regular Cashback",
            content: "Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend."
        },
        {
            img: featStandards,
            title: "Top Standards",
            content: "Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu."
        },
    ]

    return (
    <section className="section-features">
        <div className="logo-container container">
            {brandLogos.map(logo => (
                <div key={logo} className="logo">
                    <img src={logo} alt="logotype" />
                </div>
            ))}
{
    //#region This code is replaced by the loop above
}
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
{
    //#endregion
}
        </div>
        <div id="Features" className="feature-large-container container">
            <div className="img-iphone">
                <img src={iphoneImg} alt="graphical image of an iphone" />
            </div>

            <div>
                <div className="features-content">
                    <h2>App Features</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
                </div>

                <div className="feature-container">
                    {features.map( feature => (
                        <div key={feature.title} className="feature">
                            <div className="ft-img">
                                <img src={feature.img} aria-hidden="true"/>
                            </div>
                            <div>
                                <h3>{feature.title}</h3>
                                <p>{feature.content}</p>
                            </div>    
                        </div>
                    ))}
{
    //#region This code is replaced by the loop above
}
                    {/* <div className="feature">
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
                    </div> */}
{
    //#endregion
}

                </div>
            </div>
        </div>
    </section>
    )
}

export default SectionFeatures;