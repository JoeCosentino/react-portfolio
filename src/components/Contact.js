import React, { useState } from 'react';
import emailjs from 'emailjs-com'
import '../scss/contact.scss';

function Contact() {

    const [message, setMessage] = useState(false);

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     setMessage(true);
    // }

    function sendEmail(e) {
        e.preventDefault();
        setMessage(true);
    
        emailjs.sendForm('service_n4lu94u', 'template_j7jiofy', e.target, 'bAQOi6YWqkv0Ch6Aw')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };

    return (
        <div className='contact' id='contact'>
            <div className='left'>
                <img src='assets/old-style-phone.jpg' alt='' />
            </div>
            <div className='right'>
                <h2>Contact.</h2>
                <form onSubmit={sendEmail}>
                    <input type='text' name='email' placeholder='email' />
                    <textarea name='message' placeholder='message'></textarea>
                    <button type='submit'>Send</button>
                    {message && <span>Thanks! I will reply as soon as I can!</span>}
                </form>                    
            </div>
        </div>
    )
}

export default Contact;