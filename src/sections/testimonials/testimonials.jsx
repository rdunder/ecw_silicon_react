import { useState, useEffect } from 'react';

import './testimonials.css';



function SectionTestimonials() {    
    const URL = "https://win24-assignment.azurewebsites.net/api/testimonials";
    const [testimonials, setTestimonials] = useState([]);

    useEffect( () => {
        fetch(URL)
        .then( res => {
            return res.json();
        })
        .then( data => {
            setTestimonials(data);
        })
    }, []);

    

    return (
        <section className="section-testimonial">
            <div className="container testimonial-container">
                <h2>Clients are <br />Loving our App</h2>
                <div className="card-container">

                    {testimonials.length > 0 ? 
                    testimonials.map( testimonial => (
                        <div key={testimonial.author} className="card">
                            <div className="rating">
                                {[...Array(5)].map( (x, i) => (
                                    i < testimonial.starRating 
                                    ?<i key={i} className="fa-solid fa-star"></i>
                                    :<i key={i} className="fa-regular fa-star"></i>
                                ))}
                                
                                {/* <img src="./assets/p5 rating 1.svg" alt="visualisation of rating with stars" /> */}
                            </div>
                            <p>{testimonial.comment}</p>
                            <div className="client-avatar">
                                <img src={testimonial.avatarUrl} alt="girl avatar" />
                                <div className="client-info">
                                    <strong>{testimonial.author}</strong>
                                    <p>{testimonial.jobRole}</p>
                                </div>
                            </div>
                        </div>
                    )) 
                    :'Loading ...' }

{
    //#region This code is replaced by the loop above
}
                    {/* <div className="card">
                        <div className="rating">
                            <img src="./assets/p5 rating 1.svg" alt="visualisation of rating with stars" />
                        </div>
                        <p>{testimonials.length > 1 ? testimonials[0].comment: 'Loading ...'}</p>
                        <div className="client-avatar">
                            <img src="./assets/p5 img girl.svg" alt="girl avatar" />
                            <div className="client-info">
                                <strong>Fannie Summers</strong>
                                <p>Designer</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="rating">
                            <img src="./assets/p5 rating 2.svg" alt="visualisation of rating with stars" />
                        </div>
                        <p>bla bla bla</p>
                        <div className="client-avatar">
                            <img src="./assets/p5 img boy.svg" alt="boy avatar" />
                            <div className="client-info">
                                <strong>Albert Flores</strong>
                                <p>Developer</p>
                            </div>
                        </div>
                    </div> */}
{
    //#endregion
}


                </div>
            </div>
        </section>
    )
}



export default SectionTestimonials;