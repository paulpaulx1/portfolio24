import React, { useState } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

import { languages, tech, libraries, nonTechSkills } from '../constants/skills';

const ToggleButtons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  gap: 0px 2px;
  @media screen and (max-width: 600px) {
    text-align: center;
  }
`;

const ToggleButton = styled.button`
  padding: 10px 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.1);
  flex: 1;
  transition: background-color 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Raleway;
  font-size: 14px;
  color: #333;
  font-weight: 700;

  &:hover {
    background-color: #45a049;
  }
  @media screen and (max-width: 600px) {
    font-size: 12px;
    padding: 6px 6px;}
}
`;

const SkillListContainer = styled.div`
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  color: #545454f7;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SkillList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SkillItem = styled.li`
  background-color: #f7f7f7;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
  font-size: 14px;
  font-family: 'Raleway';
  color: #333;
`;

const skillMap = {
  Languages: [...languages],
  Tech: [...tech],
  Libraries: [...libraries],
  'Non-Tech Skills': [...nonTechSkills],
};

const ToggleableSkills = () => {
  const [selectedArray, setSelectedArray] = useState(skillMap.Languages);

  const handleArrayChange = (array) => {
    setSelectedArray(skillMap[array]);
  };

  return (
    <div>
      <ToggleButtons>
        {Object.keys(skillMap).map((key) => (
          <ToggleButton
            key={nanoid()}
            onClick={() => handleArrayChange(key)}
            style={{
              backgroundColor: selectedArray === skillMap[key] ? 'green' : 'white',
              color: selectedArray === skillMap[key] ? 'whitesmoke' : 'rgba(84, 84, 84, 0.97), 0.3)',
            }}
          >
            {key}
          </ToggleButton>
        ))}
      </ToggleButtons>
      <SkillListContainer>
        <SkillList>
          {selectedArray.map((skill, index) => (
            <SkillItem key={nanoid()}>{skill}</SkillItem>
          ))}
        </SkillList>
      </SkillListContainer>
    </div>
  );
};

export default ToggleableSkills;