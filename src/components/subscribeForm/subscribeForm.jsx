import { useState, useEffect } from 'react';
import { validateEmail } from '../../helpers/regex';

import './subscribeForm.css';
import bell from './bell.svg';

function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const URL = "https://win24-assignment.azurewebsites.net/api/forms/subscribe";

  function handleSubmit(e) {
    e.preventDefault();
    validateEmail(email) ? sendToApi(email) : setFeedback("You need to enter a valid email");
  }

  function sendToApi(str) {
    setFeedback("");
    
    useEffect( () => {
      fetch(URL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(str)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log("There was an ERROR: " + err);
      })
    }, [])
  }

  return (
    <div className="sub-container">
        <img src={bell} aria-hidden="true" />
        <h2>Subscribe to our Newsletter</h2>
        <form className="input-container" onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder=" &#xf003;  Your email" 
              value={email} 
              onChange={ e => setEmail(e.target.value)} 
            />
            <button id="Subscribe">Subscribe</button>
        </form>
        <p>{feedback}</p>
    </div>
  )
}

export default SubscribeForm