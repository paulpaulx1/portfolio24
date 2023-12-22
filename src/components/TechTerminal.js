import React, { useEffect, useState } from "react";
import Typewriter from "react-typewriter";
import styled from "styled-components";

const TechContainer = styled.div`
  max-width: fit-content;
  margin: 0 auto;
  padding: 20px;
  white-space: nowrap;
  overflow: hidden;
  border-radius: 5px;
  background-color: whitesmoke;
  color: rgba(43, 43, 43, 0.63);
`;

const TechList = styled.ul`
  text-transform: uppercase;
  list-style: none;
  padding: 0;
`;

const TechItem = styled.li`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const TechTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

const Tech = ({skills, title}) => {
  const [visibleSkills, setVisibleSkills] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleSkills((prevSkills) => {
        if (prevSkills.length === skills.length) {
          clearInterval(interval);
          return prevSkills;
        }
        return [...prevSkills, skills[prevSkills.length]];
      });
    }, 200);

    return () => clearInterval(interval);
  }, [visibleSkills, skills]);

  return (
    <>
      <TechContainer>
        <TechTitle>{title}</TechTitle>
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
    </>
  );
};

export default Tech;
