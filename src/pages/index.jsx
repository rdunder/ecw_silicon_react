
import './index.css';

import Navbar               from "../components/navbar/Navbar";
import Header               from "../sections/header/header";
import SectionFeatures      from "../sections/features/features";
import SectionWorkHow       from "../sections/workhow/workhow";
import SectionTransfer      from "../sections/transfer/transfer";
import SectionTestimonials  from "../sections/testimonials/testimonials";
import SectionFAQ           from "../sections/faq/faq";
import Footer               from "../sections/footer/footer";



function Index() {
    return (
        <>        
        <header className="header">
            <Navbar />
            <Header />
        </header>
        <main>
            <SectionFeatures />
            <SectionWorkHow />
            <SectionTransfer />
            <SectionTestimonials />
            <SectionFAQ />
        </main>
        <Footer />
        </>
    )
}

export default Index;