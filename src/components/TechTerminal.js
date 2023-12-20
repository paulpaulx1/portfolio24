import React, { useEffect, useState } from 'react';
import Typewriter from 'react-typewriter';
import styled from 'styled-components';

const TechContainer = styled.div`
  max-width: fit-content;
  min-height: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(84, 84, 84, 0.97);
  color: whitesmoke;
  font-family: Inconsolata, 'Courier New', Courier, monospace;
  white-space: nowrap;
  overflow: hidden;
  border: 2px solid whitesmoke;;
  border-radius: 5px;
`;

const TechTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: whitesmoke;
  text-transform: uppercase;
`;

const TechList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TechItem = styled.li`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const techSkills = [
  'JavaScript',
  'CSS',
  'HTML',
  'React',
  'Redux',
  'Webpack',
  'Python',
  'Langchain',
  'jQuery',
  'Node',
  'Version control',
  'Prompting LLMs',
  'Consuming APIs',
  'Asking questions',
  'Written communication',
  'Project documentation',
];

const Tech = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleSkills((prevSkills) => {
        if (prevSkills.length === techSkills.length) {
          clearInterval(interval);
          return prevSkills;
        }
        return [...prevSkills, techSkills[prevSkills.length]];
      });
    }, 100);

    return () => clearInterval(interval);
  }, [visibleSkills]);

  return (
    <TechContainer>
      <TechTitle>Skillz</TechTitle>
      <TechList>
        {visibleSkills.map((skill, index) => (
          <TechItem key={index}>
            <Typewriter typing={1} minDelay={5} maxDelay={6}>
              {skill}
            </Typewriter>
          </TechItem>
        ))}
      </TechList>
    </TechContainer>
  );
};

export default Tech;