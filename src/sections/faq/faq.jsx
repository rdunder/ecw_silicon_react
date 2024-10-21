

import Accordion from '../../components/accordion/accordion';

import './faq.css';

function SectionFAQ() {

    return (
        <section className="section-faq">
        <div className="container">
            <div className="faq-container">
                <div className="heading">
                    <h2>Any questions? <br />Check out the FAQs</h2>
                    <p>Still have unanswered questions and need to get in touch?</p>
                </div>

                <Accordion />
                
                <div className="contact-card-container">
                    <div className="contact-card card-1">
                        <img src="./assets/p6 icon phone.svg" alt="graphical icon of a phone" />
                        <p>Still have questions?</p>
                        <a href="#ContactUs">
                            Contact us
                            <img src="./assets/p6 icon contact arrow.svg" aria-hidden="true" />
                        </a>
                    </div>
                    <div className="contact-card card-2">
                        <img src="./assets/p6 icon chat.svg" alt="graphical icon of a chat bubble" />
                        <p>Don't like phonecalls?</p>
                        <a href="#ContactUs">
                            Contact us
                            <img src="./assets/p6 icon green arrow.svg" aria-hidden="true" />
                        </a>
                    </div>
                </div>

                <button className="btn-contact-us">Contact us now</button>

            </div>

            <div className="sub-container">
                <img src="./assets/p6 icon bell.svg" aria-hidden="true" />
                <h2>Subscribe to our Newsletter</h2>
                <form className="input-container">
                    <input type="text" placeholder=" &#xf003;  Your email" /><button id="Subscribe">Subscribe</button>
                </form>
            </div>
        </div>

    </section>
    );
}

export default SectionFAQ;