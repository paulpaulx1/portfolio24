import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  padding: 20px;
  background-color: #ffcccc; /* Pastel Red */
  border-radius: 10px;
  margin: 10px 0;
`;

const SkillTitle = styled.h2`
  font-size: 24px;
`;

const SkillList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SkillItem = styled.li`
  background-color: #33cccc; /* Teal */
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
`;

const SkillsDisplay = ({ skills, title }) => (
  <SkillsContainer>
    <SkillTitle>{title}</SkillTitle>
    <SkillList>
      {skills.map(skill => (
        <SkillItem key={skill}>{skill}</SkillItem>
      ))}
    </SkillList>
  </SkillsContainer>
);

export default SkillsDisplay;