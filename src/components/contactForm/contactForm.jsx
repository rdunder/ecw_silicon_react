

import './contactForm.css';

function ContactForm() {

    return (
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
    )
}

export default ContactForm;