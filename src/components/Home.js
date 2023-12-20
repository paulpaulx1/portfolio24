import React, { useState } from 'react';
import styled from 'styled-components';
import Typewriter from 'react-typewriter';

const StyledWelcomeContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;

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

  .clear-float {
    clear: both;
  }
`;

const WelcomeMessage = () => {
  const [typingActive, setTypingActive] = useState(true);

  const handleTypingComplete = () => {
    setTypingActive(false);
  };

  return (
    <StyledWelcomeContainer>
      <img src={'https://res.cloudinary.com/doadukwfh/image/upload/v1703088496/portrait_rgxaky.jpg'} alt="Profile" className="profile-image" />
      <Typewriter typing={4} minDelay={1}>
      <h1>Welcome to Paul's World</h1>
      <p>
        Hi. I'm Paul. Welcome to my digital space. I'm a software developer and artist. Allow me to give you a glimpse into who I am
        and what you can expect from this corner of the internet.
      </p>
      <h2>About Me</h2>
      <p>
        I am a [profession/interest] enthusiast with a profound love for [specific interests or activities].
        Whether I'm [engaging in a hobby, pursuing a career, or exploring new adventures], my goal is to bring a
        touch of [your unique perspective or approach] to everything I do. Through this website, I hope to
        connect with like-minded individuals who share a similar zest for [your main themes].
      </p>
      <h2>What to Expect</h2>
      <h3>[Section 1]</h3>
      <p>
        [Describe the primary focus of your content. This could be your main area of expertise, the topics you'll
        cover, or the type of content you'll share.]
      </p>
      <h3>[Section 2]</h3>
      <p>
        [Highlight the unique qualities that set your website apart. This could include your personal
        experiences, perspectives, or the special approach you bring to your chosen niche.]
      </p>
      <h3>[Section 3]</h3>
      <p>
        [Share your vision for the website and what you hope visitors will gain from their time here. Whether
        it's knowledge, inspiration, or a sense of community, let your audience know what you're striving to
        offer.]
      </p>
      <h2>Let's Connect</h2>
      <p>
        I believe in the power of community and the beauty of shared experiences. I invite you to join me on
        this journey. Connect with me on [social media platforms], and don't hesitate to reach out. Your
        thoughts, insights, and feedback are always valued.
      </p>
      <p>
        Thank you for stopping by and being a part of this exciting adventure. Let's explore, learn, and create
        together!
      </p>
      <p>Best, Paul</p>
    </Typewriter>
  </StyledWelcomeContainer>
)}

export default WelcomeMessage;