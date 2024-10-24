import { useState, useEffect } from 'react';
import { validateEmail } from '../../helpers/regex';
import { tryCallApiAsync } from '../../helpers/apiCalls';

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

  async function sendToApi(str) {
    setFeedback("");

    const content = {
      email: str
    }

    await tryCallApiAsync(URL, 'POST', content) 
      ? setFeedback(`The email ${str} was succesfully registered`) 
      : setFeedback("Something went wrong with the connection");
    setEmail("");
  }

  function sendToApiThen(str) {
    setFeedback("");

    const content = {
      email: str
    }
    
    fetch(URL, {
      method: 'POST',
      headers: {
        'accept': '*/*',
        'content-type': 'application/json'
      },
      body: JSON.stringify(content)
    })
    .then(res => res.json())
    .then(data => {
      console.log(`${data} - ${typeof data}`)
    })
    .catch(err => {
      console.log("There was an ERROR: " + err);
    })
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