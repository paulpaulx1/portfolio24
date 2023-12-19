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
  color: #00ff00;
  font-family: 'Courier New', Courier, monospace;
  white-space: nowrap;
  overflow: hidden;
  border: 2px solid #00ff00;
  border-radius: 5px;
`;

const GitHubTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #00ff00;
`;

const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProjectItem = styled.li`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

// Placeholder data for GitHub and projects
const githubUsername = 'yourGitHubUsername';
const projects = [
  'Project 1',
  'Project 2',
  'Project 3',
  // Add more projects as needed
];

// const GitHub = () => (
//   <GitHubContainer>
//     <GitHubTitle>GitHub Repositories</GitHubTitle>
//     <p>GitHub: {githubUsername}</p>
//     <ProjectList>
//       {projects.map((project, index) => (
//         <ProjectItem key={index}>{project}</ProjectItem>
//       ))}
//     </ProjectList>
//   </GitHubContainer>
// );

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