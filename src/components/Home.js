import React, { useState } from 'react';
import styled from 'styled-components';
import Typewriter from 'react-typewriter';

const StyledWelcomeContainer = styled.div`
  max-width: 100vw;
  padding: 4vw;
  font-family: 'Raleway', Courier, monospace;
  font-weight: 500;  
  min-height: 400px;
  margin: 10px;
  color: rgba(84, 84, 84, 0.97) 
  background-color: whitesmoke;;

  h1 {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 1.5rem;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1.3rem;
    margin-top: 15px;
    margin-bottom: 5px;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 15px;
  }

  .profile-image {
    float: right;
    margin-right: 20px;
    max-width: 150px; /* Adjust the max width as needed */
    border-radius: 10px;
  }

  @keyframes flicker {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.91;
    }
  }
  
  .profile-gif {
    width: 100%; // Adjust width as needed
    border-radius: 10px; // Optional: Add border-radius for rounded corners
    float: right;
    margin: 20px;
    max-width: 25vw; /* Adjust the max width as needed */
    border-radius: 10px;
    animation: flicker .25s infinite;
  }
  @media screen and (max-width: 800px) {
    .profile-gif {
      max-width: 35vw;
    }
  }

  .clear-float {
    clear: both;
  }
`;

const GifContainer = styled.div`
  background-image: url(https://www.sohamdutta.com/static/media/overlay.742d52e07299e7788d10.png);
  background-size: 100% 100%;
  width:28vw;
  height: 23vw;
  float: right;
  border-radius:5px;
`

const WelcomeMessage = () => {
  const [typingActive, setTypingActive] = useState(true);

  const handleTypingComplete = () => {
    setTypingActive(false);
  };

  return (
    <StyledWelcomeContainer>

      <img className="profile-gif slide__right" src="https://res.cloudinary.com/doadukwfh/image/upload/v1703098720/ezgif.com-video-to-gif-converted_ditfw1.gif" alt="skateboarding circa 2002" />

      <Typewriter typing={10} minDelay={1}>
      <h1>Welcome to Paul's World</h1>
      <p>Hello! I'm Paul. Welcome to my digital space. I have two cats (Buddy and Fin), 
        both of whom constantly demand high quality food and empty cardboard boxes. 
        I used to build stuff out of wood to maintain the influx of cardboard boxes and 
        luxury catfood but I became a developer in 2020, and I've been an artist for a long time 
        before that.</p>
      <h2>DEV</h2>
      <p>
        I made this site in part to convince people with web dev problems that they 
        should hire me to solve them. It's built with styled React components, 
        bundled with webpack, and deployed via Netlify. These were the best tools for this
        particular job but I can work across the stack in multiple languages.
        If you want to know more about my professional experience and what I can do for you 
        check out the tech tab.
      </p>
      <h2>ARTIST</h2>
      <p>
        I've made some paintings and painting-adjacent sculptures that hang on the wall (like paintings). 
        You can view them by clicking on the 'art' tab. The paintings are generally titled by the location they
        depict but I sometimes take artistic license when naming them.  The sculpture-adjacent pieces have titles that describe
        what they are as objects but one is just called "Toast" and it's made out of wood and lacquer. 
        In "The Sims", released February 4, 2000 by Maxis/EA, when you buy art you can increase the "room score".
        If you're interested in increasing your "room score" by all means HMU 908-358-2150 paulmneenan@gmail.com.
        Negotiable sliding scale.
      </p>
    </Typewriter>
  </StyledWelcomeContainer>
)}

export default WelcomeMessage;