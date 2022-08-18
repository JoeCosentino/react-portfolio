import React, { useState } from 'react';
import '../scss/contact.scss';

function Contact() {

    const [message, setMessage] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        setMessage(true);
    }

    return (
        <div className='contact' id='contact'>
            <div className='left'>
                <img src='assets/old-style-phone.jpg' alt='' />
            </div>
            <div className='right'>
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='email' />
                    <textarea placeholder='message'></textarea>
                    <button type='submit'>Send</button>
                    {message && <span>Thanks! I will reply as soon as I can!</span>}
                </form>                    
            </div>
        </div>
    )
}

export default Contact;