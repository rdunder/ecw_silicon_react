import { useState, useEffect } from "react";

import './accordion.css';

import AccordionArticle from "./accordionArticle";

function Accordion() {
    const URL = "https://win24-assignment.azurewebsites.net/api/faq";
    const [faqArticles, setFaqArticles] = useState([]);
    

    useEffect( () => {
        fetch(URL)
        .then( res => {
            return res.json()
        })
        .then( data => {
            setFaqArticles(data)
        })
    }, []);
    

  return (
        <div className="accordion">
        {faqArticles.length > 0 ?
        faqArticles.map( faq => (
            
            <AccordionArticle key={faq.id} faq={faq} />

        ))
        : 'Loading ...' }
    </div>
  )
  
}

export default Accordion;