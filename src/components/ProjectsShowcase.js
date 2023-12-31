import React from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";

const ProjectsTitle = styled.h1`
  text-align: center;
  grid-column: 1/-1;
  font-size: 24px;
  color: rgba(84, 84, 84, 0.97);
  font-weight: 800;
  padding: 8px;
  margin-top: 2px;
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
  font-family: "Raleway"; // Font from SkillItem
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
  margin-bottom: 10px;
  &:hover {
    color: green;
  }
`;

const ProjectImage = styled.img`
  width: 100%; // Sets image width to fit the card
  height: auto; // Maintains aspect ratio
  margin-bottom: 10px; // Adds space below the image
  border-radius: 5px; // Optional: to match the card's border radius
`;


const projects = [
  {
    title: "PDF Chatter",
    description:
      "Developed a Langchain RAG app that enabled uploading and engagement with PDFs, generated embeddings, stored them in PineconeDB, and facilitated unique chat functionality with document content. Implemented a weighted random selection for LLMs, memory buffers, and vector retrieval, guided by user feedback, to continually improve application performance and results.",
    link: "https://github.com/yourproject",
    imageUrl: 'pdf chatter.jpg'
  },
  {
    title: "Phreditor",
    description:
      " In-browser code compiler and editor. Intercepts import statements with regex patterns and reroutes them to UNPKG.com for external library integration. Built with React, Redux, and Typescript. UI built with BulmaCSS and React-Resizable. Plug in some Javascript that uses third party libraries and watch it go.",
    link: "https://phreditor.netlify.com",
    active: "https://phreditor.netlify.com",
    imageUrl: 'phreditor2.jpg'
  },
  {
    title: "Aether",
    description:
      "Realtime multiplayer audovisual synth app. Socket.io, Three.js, Redux, Firebase, Tone.js. Completed on a team of 4 at Fullstack Academy using Agile Methodologies. Animated a spinning clock hand within a circle, when it intercepts user generated shapes a sound is played. Collision detection with bounding boxes in three.js. Redux/Socket manages real time multiplayer state.",
    link: "https://github.com/paulpaulx1/aether",
    imageUrl: 'aether2.jpg'
  },
];

const ProjectsShowcase = () => (
  <ProjectsContainer>
    <ProjectsTitle>Projects</ProjectsTitle>
    {projects.map(project => (
      <ProjectCard key={nanoid()}>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
        <ProjectLink href={project.link} target="_blank">GitHub</ProjectLink>
        {project.active && <div><ProjectLink href={project.active} target="_blank">{project.active}</ProjectLink></div>}
        {project.imageUrl && <ProjectImage src={project.imageUrl} alt={project.title} />}
      </ProjectCard>
    ))}
  </ProjectsContainer>
);

export default ProjectsShowcase;
