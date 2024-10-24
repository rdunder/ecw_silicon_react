import { useState } from 'react';
import { validateName, validateEmail } from '../../helpers/regex';
import { tryCallApiAsync } from '../../helpers/apiCalls';

import './contactForm.css';

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [feedbackName, setFeedbackName] = useState("");
    const [feedbackEmail, setfeedbackEmail] = useState("");
    const [feedbackForm, setFeedbackForm] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const URL = "https://win24-assignment.azurewebsites.net/api/forms/contact";

    function handleSubmit(e) {
        e.preventDefault();
        resetFeedback();

        let nameIsValid = false;
        let emailIsValid = false;       

        const formData = new FormData(e.target)
        const content = Object.fromEntries(formData.entries());

        validateName(content.fullName) ? nameIsValid = true : setFeedbackName("You need to enter your name, at least two characters");
        validateEmail(content.email) ? emailIsValid = true : setfeedbackEmail("You need to enter a valid E-mail adress");

        if (nameIsValid && emailIsValid) {
            tryCallApiAsync(URL, "POST", content) 
                ? setSuccessMessage("Thank you! We will get back to you as soon as posible")
                : setFeedbackForm("Something is wrong! i couldnt send the information");
            resetForm(e.target)
        } else {
            setFeedbackForm("You need to fill out all fields!")
        }
    }

    function resetFeedback() {
        setFeedbackName("");
        setfeedbackEmail("");
        setFeedbackForm("");
        setSuccessMessage("");
    }

    function resetForm(form) {
        form.reset();
        setName("");
        setEmail("");
    }



    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Get Online Consultation</h2>

            <label htmlFor="name">Full Name</label>
            <input type="text" name="fullName" id="name" value={name} onChange={event => setName(event.target.value)} />
            <small>{feedbackName}</small>

            <label htmlFor="email">Email Adress</label>
            <input type="email" name="email" id="email" value={email} onChange={event => setEmail(event.target.value)} />
            <small>{feedbackEmail}</small>

            <label htmlFor="select-specialist">Specialist</label>
            <select name="specialist" id="select-specialist" defaultValue="">
                <option value="general">General</option>
                <option value="oncology">Oncology</option>
                <option value="radiology">Radiology</option>
                <option value="medicine">Medicine</option>
                <option value="paediatrics">Paediatrics</option>
                <option value="psychiatry">Psychiatry</option>
                <option value="surgery">Surgery</option>
            </select>

            <p>{successMessage}</p>

            <button className="btn-primary">Make an appointment</button>
            <small>{feedbackForm}</small>
        </form>
    )
}

export default ContactForm;