

import './transfer.css';

import imgTop from './img_top.png';
import imgBottom from './img_bottom.png';
import logo1 from './logo1.svg';
import logo2 from './logo2.svg';


function SectionTransfer() {


    return (
        <section className="section-transfer">
            <div className="content container">
                <div className="section-box-1">
                    <h2>Make your money <br />transfer simple and clear</h2>
                    <ul>
                        <li>
                            <i className="fa-regular fa-circle-check"></i>
                            <p>Banking transactions are free for you</p>
                        </li>
                        <li>
                            <i className="fa-regular fa-circle-check"></i>
                            <p>No monthly cash commission</p>
                        </li>
                        <li>
                            <i className="fa-regular fa-circle-check"></i>
                            <p>Manage payments and transactions online</p>
                        </li>
                    </ul>
                    <a className="btn-primary" href="#login">
                        <span>Learn more</span>
                        <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
                <div className="section-box-2">
                    <img src={imgTop} alt="graphic of a screen with the app." />
                </div>
                <div className="section-box-3">
                    <img src={imgBottom} alt="graphic of a screen with the app." />
                </div>
                <div className="section-box-4">
                    <h2>Receive payment from <br />international bank details</h2>
                    <div className="card-container">
                        <div className="card">
                            <img src={logo1} aria-hidden="true" />
                            <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                        </div>
                        <div className="card">
                            <img src={logo2} aria-hidden="true" />
                            <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                        </div>
                    </div>
                    <a className="btn-primary" href="#login">
                        <span>Learn more</span>
                        <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default SectionTransfer;