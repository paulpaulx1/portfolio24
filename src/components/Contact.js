import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const ContactFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 70vh;
  overflow: hidden;
`;

const StyledVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: 1;
`;

const Form = styled.form`
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.92);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
  max-width: 100vw; // Adjust as needed for layout
  height: auto; // Adjust height to fit content
  width: auto;
  position: absolute;
  top: auto;
  bottom: auto;
  border: 2px solid rgba(84, 84, 84, 0.5);
  border-radius: 4px;
  color: #545454f7;

  div {
    margin-bottom: 15px;
  }

  label {
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
    font-family: 'Raleway';
    max-width: 440px;
  }

  /* Apply styles specifically to textarea */
  textarea {
    width: 100%;
    padding: 8px 10px;
    background-color: #f7f7f7cc;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    color: #333;
    min-height:20vh;
    min-width: 60vw;
    border: 2px solid rgba(84, 84, 84, 0.5);
    font-family: 'Raleway';

  }

  @media screen and (max-width: 500px) and (max-height: 680px) {
    textarea { min-height: 14vh; }
    div { margin-bottom: 8px; }
  }

  @media screen and (orientation: landscape) {
    font-size: 12px;
    padding: 12px;
  }

    div {
      margin-bottom: 5px; // Adjust spacing
    }
  }


  button {
    width: 100%;
    padding: 10px 15px;
    background-color: rgba(84, 84, 84, 0.97);
    color: whitesmoke;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
    font-family: 'Raleway';
    min-width: 60vw;
  }

  button:hover {
    background-color: #45a049;
  }
`;

const InputField = styled.input`
  width: 50%; // Adjust this width as needed
  padding: 8px 10px;
  margin-bottom: 15px;
  background-color: #f7f7f7cc;
  border-radius: 4px;
  font-size: 14px;
  border: 2px solid rgba(84, 84, 84, 0.6);
  max-width: 440px;
`;

const TextArea = styled.textarea`
  width: 100%;
  max-width: 440px;
  padding: 8px 10px;
  background-color: #f7f7f7cc;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
`;


export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("Submit");

  const handleChange = (e) => {
    const field = e.target.id;

    switch (field) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "message":
        setMessage(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending");

    try {
      axios({
        method: "POST",
        url: "/.netlify/functions/sendEmail",
        data: { name, email, message, status },
      }).then((response) => {
        console.log(response);
        if (response.status === 200) {
          alert("Message Sent");
          setName("");
          setEmail("");
          setMessage("");
          setStatus("Submit");
        } else if (response.data.status === "failed") {
          alert("Message Failed");
        }
      });
    } catch (error) {
      console.error(error);
      // Handle the error here, e.g., show an error message to the user
      // You can also set the status back to 'Submit' if needed
    }
  };

  return (
    <ContactFormContainer>
      <StyledVideo autoPlay loop muted playsInline>
        <source src="https://d1eow6qsunz0n0.cloudfront.net/assets/fpo/video.mp4" type="video/mp4" />
      </StyledVideo>
      <Form onSubmit={(e) => handleSubmit(e)} method="POST">
        <div>
          <label htmlFor="name">Name:</label>
          <InputField
            type="text"
            id="name"
            value={name}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <InputField
            type="email"
            id="email"
            value={email}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div style={{flex: 1}}>
          <label htmlFor="message">Message:</label>
          <TextArea
            id="message"
            value={message}
            onChange={(e) => handleChange(e)}
            required
            placeholder="What a nice website! I would like to hire you!"
          />
        </div>
        <button type="submit">{status}</button>
      </Form>
    </ContactFormContainer>
  );
};

export default Contact;
