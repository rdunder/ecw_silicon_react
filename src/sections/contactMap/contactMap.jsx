
import './contactMap.css';

import map from './map.png';


function ContactMap() {


    return (
        <div className='container contact-map-container'>
            <div className='map-container'>
                <img src={map} alt="map" />
            </div>

            <div className='adress-card-container'>
                <div className='card'>
                    <h3>Medical Center 1</h3>
                    <ul>
                        <li>
                            <i class="fa-solid fa-location-dot"></i>
                            <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                        </li>
                        <li>
                            <i class="fa-solid fa-phone-volume"></i>
                            <p>(406) 555-0120</p>
                        </li>
                        <li>
                            <i class="fa-solid fa-clock"></i>
                            <p><strong>Mon – Fri:</strong> 9:00 am – 22:00 am <br /><strong>Sat – Sun:</strong> 9:00 am – 20:00 am</p>
                        </li>
                    </ul>                    
                </div>
                <div className='card'>
                    <h3>Medical Center 2</h3>
                    <ul>
                        <li>
                            <i class="fa-solid fa-location-dot"></i>
                            <p>2464 Royal Ln. Mesa,New Jersey 45463</p>
                        </li>
                        <li>
                            <i class="fa-solid fa-phone-volume"></i>
                            <p>(406) 544-0123</p>
                        </li>
                        <li>
                            <i class="fa-solid fa-clock"></i>
                            <p><strong>Mon – Fri:</strong> 9:00 am – 22:00 am <br /><strong>Sat – Sun:</strong> 9:00 am – 20:00 am</p>
                        </li>
                    </ul>                    
                </div>
                <div className="socials">
                    <i class="fa-brands fa-square-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-square-instagram"></i>
                    <i class="fa-brands fa-youtube"></i>
                </div>
            </div>
        </div>
    )
}

export default ContactMap;