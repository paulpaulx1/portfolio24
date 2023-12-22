import React from 'react';
import styled from 'styled-components';

const GitHubContainer = styled.div`
  padding: 20px;
  background-color: rgba(84, 84, 84, 0.97);
  color: whitesmoke;
  font-family: Inconsolata, 'Courier New', Courier, monospace;
  white-space: nowrap;
  overflow: hidden;
  border: 2px solid whitesmoke;
  border-radius: 5px;
`;

const GitHubTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: whitesmoke;
  text-transform: uppercase;
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
    <GitHubTitle>GitHub Repos</GitHubTitle>
    <p>GitHub: {githubUsername}</p>
    <ProjectList>
      {projects.map((project, index) => (
        <ProjectItem key={index}>{project}</ProjectItem>
      ))}
    </ProjectList>
  </GitHubContainer>
);

export default GitHub;