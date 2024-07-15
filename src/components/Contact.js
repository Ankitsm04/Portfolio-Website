import React, { useState } from 'react';
import './Contact.css'; // Your main CSS file for Contact component

const Contact = () => {
  const [status, setStatus] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "f67e31c3-4d70-488f-8a88-8d5072faa615");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setStatus('Your message has been sent!');
      event.target.reset(); // Reset the form
    } else {
      setStatus('There was an error sending your message. Please try again.');
    }
  };

  return (
    <div className='contact' id='contact'>
      <div className='night'>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
      </div>
      <div className='head'>
        <p>Contact</p>
        <div className='line'></div>
      </div>
      <form className='contact-form' onSubmit={onSubmit}>
        <input
          type='text'
          id='name'
          name='name'
          placeholder='Name'
          required
        />
        <input
          type='email'
          id='email'
          name='email'
          placeholder='Email'
          required
        />
        <textarea
          id='message'
          name='message'
          rows='4'
          placeholder='Message'
          required
        ></textarea>
        <button type='submit' className='ui-btn'>Submit</button>
        </form>
      {status && <p>{status}</p>}
    </div>
  );
}

export default Contact;
