import React from 'react';
import styled from 'styled-components';
import Tech from './TechTerminal'; // Import your Technical Skills component here
import Github from './Github';
import MatrixBackground from './MatrixBG';
import { softSkills, techSkills } from '../constants/skills'

const WrapperContainer = styled.div`
  animation: turn-on 2.4s linear 0s 1 normal none running;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; 
  margin: 0 auto;
  padding: 20px;
  font-family: Pixel12x10,Inconsolata, 'Courier New', Courier, monospace;
  font-weight: 600;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  flex: 1;
  margin-right: 20px;
`;

const DownloadButton = styled.a`
  display: inline-block;
  margin: 10px 0;
  padding: 10px 20px;
  background-color: whitesmoke;
  color: rgba(43, 43, 43, 0.63);
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
`;


const Wrapper = () => (
  <div>
  <MatrixBackground/>
  <WrapperContainer>
    <Column>
      <Tech skills={techSkills} title={'Tech Skills'} />
    </Column>
    <Column>
      <Tech skills={softSkills} title={'Soft Skills'}/>
    </Column>
    <DownloadButton href="/Dec21Res.pdf" download="My_Resume.pdf">
        Download Resume
      </DownloadButton>
  </WrapperContainer>
  </div>
);

export default Wrapper;