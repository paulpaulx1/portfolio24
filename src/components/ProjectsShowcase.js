import React from 'react';
import styled from 'styled-components';

const ProjectsTitle = styled.h1`
  text-align: center;
  grid-column: 1/-1;
  font-size: 24px; 
  color: rgba(84, 84, 84, 0.97); 
  font-weight: 800;
  padding: 8px;
  margin-top:2px;
  margin-bottom: 10px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 

`;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  background-color: white;
  border-radius: 10px; // Rounded borders like SkillListContainer
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Shadow style from SkillListContainer
  // For mobile devices
  grid-template-columns: 1fr; // Single column layout
  grid-column: 1/-1;
  // For desktop devices
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr); // Three column layout
  }
`;

const ProjectCard = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 5px; // Rounded borders like SkillItem
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Shadow style from SkillItem
  padding: 10px;
  font-family: 'Raleway'; // Font from SkillItem
  color: #333; // Text color from SkillItem
`;

const ProjectTitle = styled.h1`
  font-size: 20px; // Font size matched with SkillItem
  margin-bottom: 10px;
  font-family:Raleway;
  font-weight: 700;
  rgba(84, 84, 84, 0.97);
`;

const ProjectDescription = styled.p`
  font-size: 13px; // Font size matched with SkillItem
  margin-bottom: 10px;

  color: #333; // Text color from SkillItem
`;

const ProjectLink = styled.a`
  font-size: 16px; // Font size matched with SkillItem
  text-decoration: none;
  color: rgba(84, 84, 84, 0.97); // Text color from SkillItem
  font-weight: 800;
  &:hover { color: green;}
`;

const projects = [
  { title: 'PDF Chatter', description: 'Retrieval Augmented Generation App - Python, Langchain, PineconeDB and Redis. Upload PDFs and interact with them. Uses Langchain to prompt LLMs.', link: 'https://github.com/yourproject' },
  { title: 'Phreditor', description: 'In browser compiler powered by WASM. Catches import statements with regex and reroutes to UNPKG.com. Built with React, Redux and Typescript. Plug in some Javascript with third party libraries and watch it go.', link: 'https://phreditor.netlify.com', active: 'https://phreditor.netlify.com' },
  { title: 'Aether', description: 'Realtime multiplayer audovisual synth app. Socket.io, Three.js, Redux, Firebase, Tone.js. Completed on a team of 4 at Fullstack Academy using Agile Methodologies.', link: 'https://github.com/paulpaulx1/aether' },
];

const ProjectsShowcase = () => (
  <ProjectsContainer>
    <ProjectsTitle>Projects</ProjectsTitle>
    {projects.map(project => (
      <ProjectCard key={project.title}>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
        <ProjectLink href={project.link} target="_blank">GitHub</ProjectLink>
        {project.active && <div><ProjectLink href={project.active} target="_blank">{project.active}</ProjectLink></div>}
      </ProjectCard>
    ))}
  </ProjectsContainer>
);

export default ProjectsShowcase;