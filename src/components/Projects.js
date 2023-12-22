// Projects.js
import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  width: 100vw;
  padding: 20px;
  background-color: #333; /* Background color for the projects section */
  color: white;
`;

const ProjectTitle = styled.h2`
  font-size: 24px;
  margin-top: 0;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
`;

const ProjectLink = styled.a`
  color: #00a1db; /* Color for links */
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Projects = () => (
  <ProjectsContainer>
    <ProjectTitle>Project 1</ProjectTitle>
    <ProjectDescription>
      This is a description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </ProjectDescription>
    <ProjectLink href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">
      GitHub Repository
    </ProjectLink>
    <br />
    <ProjectLink href="https://project1.example.com" target="_blank" rel="noopener noreferrer">
      Live Demo
    </ProjectLink>

    <ProjectTitle>Project 2</ProjectTitle>
    <ProjectDescription>
      This is a description of Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </ProjectDescription>
    <ProjectLink href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer">
      GitHub Repository
    </ProjectLink>
    <br />
    <ProjectLink href="https://project2.example.com" target="_blank" rel="noopener noreferrer">
      Live Demo
    </ProjectLink>
    
    {/* Add more projects as needed */}
  </ProjectsContainer>
);

export default Projects;