import React from 'react';
import styled from 'styled-components';
import MatrixBackground from './MatrixBG';
import ProjectsShowcase from './ProjectsShowcase';
import ToggleableSkills from './ToggleSkills';
import Robot from './AnimatedRobot'


const WrapperContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; // Two columns for desktop
  gap: 20px;
  padding: 20px;
  margin: 14px;
  border-radius:8px;
  background: white;
  @media (max-width: 768px) {
    grid-template-columns: 1fr; // One column for mobile
  }
  position: relative; /* Add this to create a stacking context */
`;

const MatrixBackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

const Wrapper = () => (
  <div>
    <WrapperContainer>
      <MatrixBackgroundContainer>
        <MatrixBackground />
      </MatrixBackgroundContainer>
      <Robot></Robot>
      <ToggleableSkills />
      <ProjectsShowcase></ProjectsShowcase>
    </WrapperContainer>
  </div>
);

export default Wrapper;