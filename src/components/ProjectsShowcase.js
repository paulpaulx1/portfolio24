import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  border: 2px solid rgba(84, 84, 84, 0.5);
  border-radius: 4px;
`;

const ProjectCard = styled.div`
  background-color: rgba(255, 255, 255, 0.92);
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  padding: 20px;
  border: 2px solid rgba(84, 84, 84, 0.5);
`;

const ProjectTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #545454f7;
`;

const ProjectDescription = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
  color: #545454f7;
`;

const ProjectLink = styled.a`
  font-size: 14px;
  text-decoration: none;
  color: rgba(84, 84, 84, 0.97);
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