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
      <TimelineItem>
        <AnimatedContent>
          <h3>BFA</h3>
          <p>Alfred University</p>
          <p>Location: NYSSC</p>
        </AnimatedContent>
      </TimelineItem>

      <TimelineItem>
        <AnimatedContent>
          <h3>MFA</h3>
          <p>Brooklyn College</p>
          <p>Location: Brooklyn, NY</p>
        </AnimatedContent>
      </TimelineItem>

      <TimelineItem>
        <AnimatedContent>
          <h3>Woodshop Manager</h3>
          <p>Pop Chart Lab</p>
          <p>Location: Brooklyn, NY</p>
          <p>Duration: 2013 - 2018</p>
          <p>Responsibilities and achievements...</p>
        </AnimatedContent>
      </TimelineItem>
      <TimelineItem>
        <AnimatedContent>
          <h3>Finisher</h3>
          <p>Bednark</p>
          <p>Location: Brooklyn, NY</p>
          <p>Duration: 2018 - 2020</p>
          <p>Responsibilities and achievements...</p>
        </AnimatedContent>
      </TimelineItem>
      <TimelineItem>
        <AnimatedContent>
          <h3>Fullstack Academy</h3>
          <p>Completion Certificate</p>
          <p>Duration: 2020 - 2021</p>
          <p>From PostgresSQL ={'>'} Sassy CSS </p>
        </AnimatedContent> 
      </TimelineItem>
      <TimelineItem>
        <AnimatedContent>
          <h3>Wunderkind</h3>
          <p>Integrations Engineer</p>
          <p>Duration: Aug 2021. - Dec. 2023</p>
          <p>Integrated proprietary software to client sites</p>
        </AnimatedContent> 
      </TimelineItem>
    </TimelineContainer>
  );
};

export default Timeline;