
import Navbar from "../components/navbar/Navbar";

function Contact({toggleDarkMode}) {


    return (
        <>
            <Navbar toggleDarkMode={toggleDarkMode} />
            <h1>This is the Contact page</h1>
        </>
    )
}

export default Contact;