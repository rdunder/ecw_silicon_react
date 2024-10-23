

import './contactHeader.css';


function ContactHeader() {
  return (
    <div className='contact-header'>
    <div className="breadcrumb container">
        <a href="/"><i class="fa-solid fa-house"></i>Homepage</a>
        <i class="fa-solid fa-angles-right"></i>
        <p>Contact</p>
    </div>
    
    <div className="container contact-container">                  

        <div className="contact-content">

            <h1>Contact Us</h1>                      

            <div className="card-container">
                <div className="card">
                    <i className="fa-regular fa-envelope icon"></i>
                    <div className="card-content">
                        <h3>Email us</h3>
                        <p>Please feel free to drop us a line. We will respond as soon as possible</p>
                        <a href="#">
                            Leave a message
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="card">
                    <i className="fa-solid fa-users icon"></i>
                    <div className="card-content">
                        <h3>Careers</h3>
                        <p>Please feel free to drop us a line. We will respond as soon as possible</p>
                        <a href="#">
                            Send an application
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <form className="contact-form">
            <h2>Get Online Consultation</h2>

            <label htmlFor="name">Full Name</label>
            <input type="text" name="name" id="name" />

            <label htmlFor="email">Email Adress</label>
            <input type="email" name="email" id="email" />

            <label htmlFor="select-specialist">Specialist</label>
            <select name="select-specialist" id="select-specialist" select="">
                <option value=""></option>
                <option value="oncology">Oncology</option>
                <option value="radiology">Radiology</option>
                <option value="medicine">Medicine</option>
                <option value="paediatrics">Paediatrics</option>
                <option value="psychiatry">Psychiatry</option>
                <option value="surgery">Surgery</option>
            </select>

            <button className="btn-primary">Make an appointment</button>

        </form>

    </div>
    </div>
  )
}

export default ContactHeader;