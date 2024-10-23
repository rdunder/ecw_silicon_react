

import './subscribeForm.css';
import bell from './bell.svg';

function SubscribeForm() {
  return (
    <div className="sub-container">
        <img src={bell} aria-hidden="true" />
        <h2>Subscribe to our Newsletter</h2>
        <form className="input-container">
            <input type="text" placeholder=" &#xf003;  Your email" /><button id="Subscribe">Subscribe</button>
        </form>
    </div>
  )
}

export default SubscribeForm