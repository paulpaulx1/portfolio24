import React from 'react';
import styled from 'styled-components';
import Tech from './TechTerminal'; // Import your Technical Skills component here
import Github from './Github';

const WrapperContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Inconsolata, 'Courier New', Courier, monospace;
  font-weight: 600;
  background-color: rgba(84, 84, 84, 0.97);
`;

const Column = styled.div`
  flex: 1;
  margin-right: 20px;
`;

const GitHubContainer = styled.div`
  flex: 2;
  padding: 20px;
  background-color: rgba(84, 84, 84, 0.97);
  color: whitesmoke;
  white-space: nowrap;
  overflow: hidden;
  border: 2px solid whitesmoke;
  border-radius: 5px;
`;

const Wrapper = () => (
  <WrapperContainer>
    <Column>
      <Tech />
    </Column>
    <Column>
    <GitHubContainer>
      <Github />
    </GitHubContainer>
    </Column>
  </WrapperContainer>
);

export default Wrapper;