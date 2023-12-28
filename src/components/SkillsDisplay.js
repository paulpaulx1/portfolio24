import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.92);
  border-radius: 10px;
  margin: 10px 0;
  color: #545454f7;
`;

const SkillTitle = styled.h2`
  font-size: 24px;
  font-family: 'Raleway';
  color: #545454f7;
`;

const SkillList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SkillItem = styled.li`
  background-color: #f7f7f7cc;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
  font-size: 14px;
  font-family: 'Raleway';
  color: #333;
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