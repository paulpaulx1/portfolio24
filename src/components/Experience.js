import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const TimelineContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap onto a new line */
`;

const ConstellationLine = styled.div`
  width: 2px;
  height: 100px;
  background-color: #3498db; /* Choose your constellation line color */
`;

const ConstellationDot = styled.div`
  width: 12px;
  height: 12px;
  background-color: #3498db; /* Choose your constellation dot color */
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  animation: ${rotate} 6s linear infinite;
`;

const TimelineItem = styled.div`
  position: relative;
  width: 200px; /* Adjust the width as needed */
  min-height: 300px;
  background-color: transparent;
  margin: 10px 20px; /* Adjust the margin as needed */
  z-index: 1; /* Place the dots above the lines */
`;

const AnimatedContent = styled.div`
  opacity: 0;
  animation: ${fadeIn} 1s ease forwards;
  padding: 10px;
  background-color: #ecf0f1; /* Choose your content background color */
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const Timeline = () => {
  return (
    <TimelineContainer>
      <ConstellationLine />
      <ConstellationDot style={{ marginLeft: '20px' }} />
      <ConstellationDot style={{ marginLeft: '40px' }} />

      <TimelineItem>
        <AnimatedContent>
          <h3>MFA in Fine Arts</h3>
          <p>Brooklyn College</p>
          <p>Location: Brooklyn, NY</p>
          <p>Duration: Month Year - Month Year</p>
          <p>Received Master of Fine Arts degree</p>
        </AnimatedContent>
      </TimelineItem>

      <TimelineItem>
        <AnimatedContent>
          <h3>Job Title</h3>
          <p>Pop Chart Lab</p>
          <p>Location: Brooklyn, NY</p>
          <p>Duration: 2013 - 2018</p>
          <p>Responsibilities and achievements...</p>
        </AnimatedContent>
      </TimelineItem>

      <TimelineItem>
        <AnimatedContent>
          <h3>Job Title</h3>
          <p>Bednark</p>
          <p>Location: Brooklyn, NY</p>
          <p>Duration: 2018 - 2020</p>
          <p>Responsibilities and achievements...</p>
        </AnimatedContent>
      </TimelineItem>
    </TimelineContainer>
  );
};

export default Timeline;