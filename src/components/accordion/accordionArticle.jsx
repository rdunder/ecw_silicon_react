import { useState } from "react";



function AccordionArticle({faq}) {
    const [showContent, setShowContent] = useState(false);

    const handleClick = () => {
        setShowContent(!showContent);
    }

  return (
    <article key={faq.id}>
        <div className="article-title" onClick={handleClick}>
            <h3>{faq.title}</h3>
            <i className="fa-solid fa-chevron-down"></i>
        </div>
        <p className={`${showContent ? "show" : ""}`}>{faq.content}</p>
    </article>
  )
}

export default AccordionArticle