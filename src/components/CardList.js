import React from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid'

// Import your image URLs and content here
const cardData = [
  {
    title: 'Wunderkind',
    date: 'Aug 2021 - Dec 2023',
    location: 'New York, NY',
    summary: 'Software Engineer - Integrations',
    imageUrl: 'https://pbs.twimg.com/profile_images/1280550133281808384/KbnhSCd__400x400.jpg',
    bulletPoints: ['Worked with multi-displinary teams comprising engineers, designers and customer success to deliver product tailed to individual client needs.',
     'Crafted modern, clear, and maintainable code across a diverse portfolio of client and internal projects, adhering to best practices and industry standards.', 
],
  },

{
  title: 'Fullstack Academy 2020-2021',
  date: '2020-2021',
  location: 'Remote due to pandemic',
  summary: 'Coding Bootcamp!',
  imageUrl: 'Coding Bootcamp.jpg',
  bulletPoints: ['JS Stack: PostgreSQL | Sequelize ORM | Express.js/REST | Node | React | Redux | Heroku', 'Hashing | Stacks | BFS | DFS | Trees | Linked Lists', 'Built CRUD Apps. Built https://github.com/paulpaulx1/aether'],
},
{
  title: 'Bednark Studio',
  date: '2019-2020',
  location: 'Brooklyn Navy Yard, NY',
  summary: 'Millworker / Spray Finisher',
  imageUrl: 'spraybooth.png',
  bulletPoints: ['Worked in the millwork dept. here. Primarily high end residential projects in NYC.', 'Responsible for color matching, spray finishing and installation of six/seven-figure woodworking jobs.'],
},
{
  title: 'PopChart - Woodshop Manager',
  date: '2013-2018',
  location: 'Greenpoint Brooklyn, NY',
  summary: 'Floor manager of a picture frame woodshop for 5 yrs',
  imageUrl: 'woodshop.png',
  bulletPoints: ['Poster design company. We manufactured our own picture frames but they moved the operation to Indiana in 2018.', 'Trained 40+ employees in basic woodworking. Safety first. Oversaw crews of 4-10 people based on necessity for seasonal workers.', 'Maintained machinery, spray booth, built stuff out of wood and sprayed it with paint and lacquer.'],
},
{
  title: 'Brooklyn College - MFA',
  location: 'Flatbush Brooklyn, NY',
  summary: 'Multi-Disciplinary Studio Art MFA Program',
  imageUrl: 'mini-monuments.png',
  bulletPoints: ['Independent studio work; I made a lot of stuff out of cement here.', 'Improved writing & communication skills', 'Coursework in the history of design.','Advisors: Vito Acconci, Jennifer McCoy, Wendy White'],
},
{
  title: 'Alfred University - BFA',
  location: 'Alfred, NY',
  summary: 'Multi-Disciplinary Studio Art BFA Program',
  imageUrl: 'ceramics.png',
  bulletPoints: ['Learned about art and design. Made paintings, sculptures and sonic art.', 'Treasurer of the Independent Noise Research Club', 'Trained in classical Bauhaus principles of design.'],
}
];

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(84, 84, 84, 0.97);
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  &.alternate { flex-direction: row-reverse;}
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    &.alternate { flex-direction: column;}
  }
`;

const CardImage = styled.img`
  border-radius: 4px;
  border: 2px solid black;
  max-width: 180px;
  max-height: 180px;
  @media screen and (max-width: 600px) {
    max-width: 100%;
  }
`;

const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

const CardDetails = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #777;
  margin: 0;
`;

const CardSummary = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 6px;
`;

const CardBulletPoints = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
`;

const CardBulletPoint = styled.li`
  font-size: 16px;
`;

const CardComponent = ({ title, date, location, summary, imageUrl, bulletPoints, index }) => (
  <Card className={index % 2 === 0 ? 'slide__right' : 'alternate slide__left'}>
    <CardImage src={imageUrl} alt={title} />
    <CardContent>
      <CardTitle>{title}</CardTitle>
      <CardDetails>
      {date ? `${date} | ${location}` : location}
      </CardDetails>
      <CardSummary>{summary}</CardSummary>
      <CardBulletPoints>
        {bulletPoints.map((point, index) => (
          <CardBulletPoint key={nanoid()}>{point}</CardBulletPoint>
        ))}
      </CardBulletPoints>
    </CardContent>
  </Card>
);

const CardList = () => (
  <CardContainer>
    {cardData.map((card, index) => (
      <CardComponent key={nanoid()} index={index} {...card} />
    ))}
  </CardContainer>
);

export default CardList;