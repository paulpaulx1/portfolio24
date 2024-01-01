import React from 'react';
import styled from 'styled-components';

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
     'Point 3'],
  },

{
  title: 'Fullstack Academy 2020-2021',
  date: '2020-2021',
  location: 'Remote due to pandemic',
  summary: 'Coding Bootcamp!',
  imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipO7LwoGig1LSelLMggYMgmZQEqpoKrRxGJC3DRx=s680-w680-h510',
  bulletPoints: ['PostgreSQL | Sequelize ORM | Express.js/REST | Node | React | Redux | Heroku', 'Hashing | Stacks | BFS | DFS | Trees | Linked Lists', 'Built CRUD Apps. Built https://github.com/paulpaulx1/aether'],
},
{
  title: 'Bednark Studio',
  date: '2019-2020',
  location: 'Brooklyn, NY',
  summary: 'Millworker / Spray Finisher',
  imageUrl: 'spray finisher.jpeg',
  bulletPoints: ['Worked in the millwork dept. here. High end residential projects in NYC.', 'Responsible for color matching, spray finishing and installation of seven-figure woodworking jobs.'],
},
{
  title: 'PopChart - Woodshop Manager 2013-2018',
  date: '2013-2018',
  location: 'Location 3',
  summary: 'Short summary of the experience at PopChart.',
  imageUrl: 'data:image/png;base64,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',
  bulletPoints: ['Point 1', 'Point 2', 'Point 3'],
},
{
  title: 'Brooklyn College - MFA',
  imageUrl: 'https://www.designindaba.com/sites/default/files/styles/scaledlarge/public/node/news/18574/tentacles-big.jpg?itok=fKQrPHI-',
  bulletPoints: ['Point 4', 'Point 5', 'Point 6'],
},
{
  title: 'Alfred University - BFA',
  imageUrl: 'https://www.alfred.edu/academics/_images/grad-cera-ckbrd-3.jpg',
  bulletPoints: ['Point 4', 'Point 5', 'Point 6'],
}
  // Add more card data as needed
];

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
  border: 2px solid grey;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
  &.alternate { flex-direction: row-reverse;}
`;

const CardImage = styled.img`
  border-radius: 4px;
  border: 3px solid grey;
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
`;

const CardBulletPoints = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
`;

const CardBulletPoint = styled.li`
  font-size: 16px;
`;

const CardComponent = ({ title, date, location, summary, imageUrl, bulletPoints, index }) => (
  <Card className={index % 2 === 0 ? 'alternate' : ''}>
    <CardImage src={imageUrl} alt={title} />
    <CardContent>
      <CardTitle>{title}</CardTitle>
      <CardDetails>
        {date} | {location}
      </CardDetails>
      <CardSummary>{summary}</CardSummary>
      <CardBulletPoints>
        {bulletPoints.map((point, index) => (
          <CardBulletPoint key={index}>{point}</CardBulletPoint>
        ))}
      </CardBulletPoints>
    </CardContent>
  </Card>
);

const CardList = () => (
  <CardContainer>
    {cardData.map((card, index) => (
      <CardComponent key={index} index={index} {...card} />
    ))}
  </CardContainer>
);

export default CardList;