
import Navbar from "../components/navbar/Navbar";
import ContactHeader from "../sections/contactHeader/contactHeader";
import ContactMap from "../sections/contactMap/contactMap";
import Footer from "../sections/footer/footer";
import './contact.css';

function Contact() {


    return (
        <>
            <header className="section-contact-header">

                <Navbar />
                <ContactHeader />
                
            </header>

            <section className="section-contact-map">

                <ContactMap />

            </section>

            <Footer />
        </>
    )
}

export default Contact;