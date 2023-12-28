import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const ProjectCard = styled.div`
  background-color: whitesmoke;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

const ProjectTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 10px;
`;

const ProjectLink = styled.a`
  font-size: 14px;
  text-decoration: none;
  color: blue;
`;

const projects = [
  // Replace with your actual projects
  { title: 'PDF Chatter', description: 'A project using Python, Langchain...', link: 'https://github.com/yourproject' },
  // Add more projects here
];

const ProjectsShowcase = () => (
  <ProjectsContainer>
    {projects.map(project => (
      <ProjectCard key={project.title}>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
        <ProjectLink href={project.link} target="_blank">View on GitHub</ProjectLink>
      </ProjectCard>
    ))}
  </ProjectsContainer>
);

export default ProjectsShowcase;