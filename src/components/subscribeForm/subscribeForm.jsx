import { useState, useEffect } from 'react';
import { validateEmail } from '../../helpers/regex';
import { tryCallApiAsync } from '../../helpers/apiCalls';

import './subscribeForm.css';
import bell from './bell.svg';

function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [success, setSuccess] = useState("");
  const URL = "https://win24-assignment.azurewebsites.net/api/forms/subscribe";

  function handleSubmit(e) {
    e.preventDefault();
    setFeedback("");
    setSuccess("");

    validateEmail(email) ? sendToApi(email) : setFeedback("You need to enter a valid email");
  }

  async function sendToApi(str) {   

    const content = {
      email: str
    }

    await tryCallApiAsync(URL, 'POST', content) 
      ? setSuccess(`Thank you for registering!`) 
      : setFeedback("Lost Connection! Please try again.");
    setEmail("");
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
            <small className='feedback'>{feedback}</small>
            <small className='success'>{success}</small>          
        </form>
        
    </div>
  )
}

export default SubscribeForm