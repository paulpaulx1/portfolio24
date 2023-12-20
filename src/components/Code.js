import React from 'react';
import styled from 'styled-components';
import Tech from './TechTerminal'; // Import your Technical Skills component here
import Github from './Github'

const WrapperContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Column = styled.div`
  flex: 1;
  margin-right: 20px;
`;

const GitHubContainer = styled.div`
  flex: 2;
  padding: 20px;
  background-color: #000;
  color: ##ffea00;
  font-family: 'Courier New', Courier, monospace;
  white-space: nowrap;
  overflow: hidden;
  border: 2px solid #ffea00;
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