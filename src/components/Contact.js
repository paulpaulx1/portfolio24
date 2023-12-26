import React, { useState } from 'react';
import axios from 'axios'

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('Submit');

  const handleChange = (e) => {
    const field = e.target.id;
  
    switch (field) {
      case 'name':
        setName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'message':
        setMessage(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending');
  
    try {
      axios({
        method: 'POST',
        url: '/.netlify/functions/sendEmail',
        data: { name, email, message, status },
      }).then((response) => {
        if (response.data.status === 'sent') {
          alert('Message Sent');
          setName('');
          setEmail('');
          setMessage('');
          setStatus('Submit');
        } else if (response.data.status === 'failed') {
          alert('Message Failed');
        }
      });
    } catch (error) {
      console.error(error);
      // Handle the error here, e.g., show an error message to the user
      // You can also set the status back to 'Submit' if needed
    }
  };
  //did it work

  const inputStyle = {
    backgroundColor: 'rgba(222, 222, 222, 0.25)',
    borderColor: '#dddddd',
    borderRadius: '2px',
    borderStyle: 'solid',
  };

  return (
    <div
      className='contactform'
      style={{ display: 'flex', justifyContent: 'center', padding: 20 }}
    >
      <form onSubmit={(e) => handleSubmit(e)} method='POST'>
        <div>
          <label htmlFor='name'>Name:</label>
          <br />
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => handleChange(e)}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <br />
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => handleChange(e)}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor='message'>Message:</label>
          <br />
          <textarea
            id='message'
            value={message}
            onChange={(e) => handleChange(e)}
            required
            style={{
              width: '75vw',
              height: '200px',
              backgroundColor: 'rgba(222, 222, 222, 0.25)',
              borderColor: '#dddddd',
              borderRadius: '2px',
            }}
            placeholder={'What a nice website! I would like to hire you!'}
          />
        </div>
        <button style={{backgroundColor:'transparent', padding:5, borderStyle: 'solid', borderColor: '#dddddd'}} type='submit'>{status}</button>
      </form>
    </div>
  );
}
