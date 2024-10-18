import Navbar from "../components/navbar/Navbar";
import Header from "../sections/header/header";
import SectionFeatures from "../sections/features/features";
import SectionWorkHow from "../sections/workhow/workhow";
import SectionTransfer from "../sections/transfer/transfer";
import SectionTestimonials from "../sections/testimonials/testimonials";

import './index.css';


function Index({toggleDarkMode}) {
    

    return (
        <>        
        <header className="header">
            <Navbar toggleDarkMode={toggleDarkMode} />
            <Header />
        </header>
        <main>
            <SectionFeatures />
            <SectionWorkHow />
            <SectionTransfer />
            <SectionTestimonials />
        </main>
        </>
    )
}

export default Index;