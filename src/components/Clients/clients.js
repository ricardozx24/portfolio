import React, { useRef } from 'react'
import './clients.css'
import emailjs from '@emailjs/browser'

const Clients = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0qdfotf', 'template_bo7kuch', form.current, '_SzztJKj6GI-mQwpy')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent!');
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contactPage'>
        <div id='clients'>
        <h1 className='contactPageTitle'>My Clients</h1>
        <p className='clientDesc'> I have had the opportunity to work with a diverse group of companies. Some of the notable companies I have worked with include. </p>
            <div>
                <img src='./images/cat-company.jpg' alt='cat-company'  className='clientImg' />
                <img src='./images/chewy.webp' alt='chewy'  className='clientImg' />
                <img src='./images/petco.png' alt='petco'  className='clientImg' />
                <img src='./images/petsmart.png' alt='petsmart'  className='clientImg' />
            </div>
        </div>
        <div id='contact'>
          <p className='contactPageTitle'>Contact Me</p>
          <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
          <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type='text' className='name' placeholder='Enter your name' name='your_name'/>
            <input type='email' className='email'  placeholder='Enter you email address' name='your_email'/>
            <textarea name='message' className='msg' rows="5" placeholder='Enter your message or comments here!' />
            <button type='submit' value='send' className='submitBtn'>SUBMIT</button>

            <div className='links'>
              <img src='./images/facebook-icon.png' alt='facebook' className='link' />
              <img src='./images/twitter-icon.png' alt='twitter' className='link' />
              <img src='./images/youtube-icon.png' alt='youtube' className='link' />
              <img src='./images/instagram-icon.png' alt='instagram' className='link' />
            </div>
          </form>
        </div>
    </section>
  )
}

export default Clients