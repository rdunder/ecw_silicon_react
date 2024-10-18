

import './workhow.css';

import img1 from './iphoneImg1.svg';
import img2 from './iphoneImg2.png';
import img3 from './iphoneImg3.svg';

function SectionWorkHow() {

    return (
        <section className="section-how">
            <div className="container">
                <h2>How Does It Work?</h2>
            </div>
            <div className="img-container container">
                <img src={img1} alt="graphical image of an iphone" />
                <img src={img2} alt="graphical image of an iphone" />
                <img src={img3} alt="graphical image of an iphone" />
            </div>
            <div className="content-text">
                <h3 aria-hidden="true"></h3>
                <p>Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
            </div>
        </section>
    )
}

export default SectionWorkHow;