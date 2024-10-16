import Navbar from "../components/navbar/Navbar";
import Header from "../sections/header/header";
import SectionFeatures from "../sections/features/features";

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
        </main>
        </>
    )
}

export default Index;