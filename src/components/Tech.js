import React from 'react';
import styled from 'styled-components';
import MatrixBackground from './MatrixBG';
import ProjectsShowcase from './ProjectsShowcase';
import SkillsDisplay from './SkillsDisplay';
import { softSkills, techSkills } from '../constants/skills'

const WrapperContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr; // Stack on small screens
  }
`;

const TechSkillsColumn = styled.div`
  grid-column: span 1;
`;

const SoftSkillsColumn = styled.div`
  grid-column: span 1;
`;

const DownloadButtonStyled = styled.button`
  grid-column: 1 / -1; // Stretch across all columns
  justify-self: center;
`;

const Wrapper = () => (
  <div>
    <MatrixBackground />
    <WrapperContainer>
      <img style={{opacity: .6}}src={'https://res.cloudinary.com/doadukwfh/image/upload/v1703787082/DALL_E_2023-12-28_13.03.46_-_Imagine_a_more_muscular_robot_with_defined_powerful-looking_limbs_sitting_at_a_desk._This_robot_is_focused_on_writing_code_on_a_large_advanced_mon_puynif.png'} alt='a muscular robot typing awesome code in a memphis design-vibes room' />
      <TechSkillsColumn>
        <SkillsDisplay skills={techSkills} title="Tech Skills" />
      </TechSkillsColumn>
      <SoftSkillsColumn>
        <SkillsDisplay skills={softSkills} title="Soft Skills" />
      </SoftSkillsColumn>
      <ProjectsShowcase />
      <DownloadButtonStyled href="/Dec21Res.pdf" download="My_Resume.pdf">
        Download Resume
      </DownloadButtonStyled>
    </WrapperContainer>
  </div>
);

export default Wrapper;