import React from 'react';
import styled from 'styled-components';

const GitHubContainer = styled.div`
  padding: 20px;
  background-color: #000;
  color: #ffea00;
  font-family: 'Courier New', Courier, monospace;
  white-space: nowrap;
  overflow: hidden;
  border: 2px solid #ffea00;
  border-radius: 5px;
`;

const GitHubTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #ffea00;
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
const githubUsername = 'paulpaulx1';
const projects = [
  'Phreditor',
  'PDF Chatter',
  'Aether',
  // Add more projects as needed
];

const GitHub = () => (
  <GitHubContainer>
    <GitHubTitle>GitHub Repositories</GitHubTitle>
    <p>GitHub: {githubUsername}</p>
    <ProjectList>
      {projects.map((project, index) => (
        <ProjectItem key={index}>{project}</ProjectItem>
      ))}
    </ProjectList>
  </GitHubContainer>
);

export default GitHub;