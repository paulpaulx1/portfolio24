import React, { useEffect, useState } from 'react';
import Typewriter from 'react-typewriter';
import styled from 'styled-components';

const TechContainer = styled.div`
  max-width: 340px;
  min-height: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #000;
  color: #ffea00;
  font-family: 'Courier New', Courier, monospace;
  white-space: nowrap;
  overflow: hidden;
  border: 2px solid #ffea00;
  border-radius: 5px;
`;

const TechTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #ffea00;
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
  'CSS3',
  'HTML5',
  'Responsive UI',
  'WCAG2.0 Standards',
  'React',
  'Redux',
  'Python',
  'Langchain',
  'jQuery',
  'Node',
  'RESTful routing',
  'Databases / ORMs',
  'Git',
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
      <TechTitle>Technical Skills</TechTitle>
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