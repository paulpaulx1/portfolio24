import React from 'react';
import styled from 'styled-components';

const StyledWelcomeContainer = styled.div`
  position: relative;
  max-width: 100vw;
  padding: 4vw;
  font-family: 'Raleway', Courier, monospace;
  font-weight: 600;
  min-height: 400px;
  margin: 10px;
  color: rgba(60, 60, 60, 0.97);
  overflow: hidden;
  border: 2px solid rgba(60, 60, 60, 0.57);
  border-radius: 8px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('https://res.cloudinary.com/doadukwfh/image/upload/v1703720310/DALL_E_2023-12-27_18.11.39_-_A_digital_background_for_Welcome_to_Paul_s_World_enhanced_with_a_Memphis_design_style._Incorporate_bold_geometric_shapes_and_a_vibrant_contrastin_nsp6q7.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    animation: fadeBackground 2s ease-in-out forwards;
    z-index: -1;
    
  }

  @keyframes fadeBackground {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.14;
    }
  }

  h1, h2, h3, p {
    opacity: 0;
    animation: fadeInText 2s ease-in-out forwards;
  }

  @keyframes fadeInText {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }



  h1 {
    font-size: 2rem;
    margin-bottom: 10px;
    font-weight: 800;
  }

  h2 {
    font-size: 1.5rem;
    margin-top: 20px;
    margin-bottom: 10px;
    font-weight: 800;
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
    max-width: 25vw;
    border-radius: 10px;
    animation: flicker .25s infinite;
    animation: fadeInText 2s ease-in-out forwards;
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

// Define a keyframe for the border animation


const ProfileGif = styled.img`
  width: 100%;
  border-radius: 10px;
  float: right;
  margin: 20px;
  max-width: 25vw;
  border-radius: 10px;
  border: 4px solid rgba(60, 60, 60, 0.97);
  animation: flicker 0.25s infinite, fadeInText 5s ease-in-out forwards;
  /* Add other styles for .profile-gif here */

  @media screen and (max-width: 800px) {
    max-width: 35vw;
  }
`;

const WelcomeMessage = () => {


  return (
    <StyledWelcomeContainer>
          <ProfileGif
        className="profile-gif slide__right"
        src="skateboard.gif"
        alt="skateboarding circa 2002"
      />

      <h1>Welcome to Paul's World</h1>
      <p>Hello! I'm Paul. Welcome to my digital space. I have two cats (Buddy and Fin), 
        both of whom constantly demand high quality food and empty cardboard boxes. 
        I used to make stuff out of wood to maintain the influx of cardboard boxes and 
        luxury catfood. I pivoted to software development in 2020, which has also 
        managed to meet the high standards of my feline companions. This website reflects my 
        skills in user experience development, written communication, and visual art. 
        It's a more comprehensive and more fun alternative to a standard resume 
        (which you're welcome to download). Thanks for stopping by.</p>
      <h2>dev</h2>
      <p>
        As a developer, my strength lies in dissecting complex problems, systems and concepts
        into fundamental components and reassembling them into cohesive solutions, mental models
        and applications. I also type fast and rarely make typos. This website is built 
        with React and CSS and deployed on Netlify. I view tech as a means to an end, whatever 
        tool or language is best suited to the task at hand is the one I'll use. I can learn, adapt, 
        get stuck, and get unstuck. I can work independently or with a team and explain technical concepts
        to non-technical people. If you want to know more about what I can do for you check out the tech tab. 
        If you want to know about my professional experience check out the exp tab. Or just send me an email at
        paulmneenan@gmail.com.
      </p>
      <h2>art</h2>
      <p>
        I've made some paintings and painting-adjacent sculptures that hang on the wall (like paintings). 
        Check out the 'art' tab. The paintings are generally named after the places they depict 
        but I sometimes take artistic license when naming them. The sculpture-adjacent pieces 
        have titles that describe them as literal objects (i.e folding panel) but one is just called "Toast". In "The Sims", released February 4, 2000 by Maxis/EA, 
        you can buy art to increase your "room score". A good room score is good for your health. 
        If you're interested in increasing your "room score" by all means HMU. 
        908-358-2150 paulmneenan@gmail.com or click the "contact" tab.
        Negotiable sliding scale. It's good for your health.
      </p>  
      </StyledWelcomeContainer>

)}

export default WelcomeMessage;