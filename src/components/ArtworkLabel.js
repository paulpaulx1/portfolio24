import styled from 'styled-components';

const ArtworkLabelContainer = styled.div`
  margin: 10px;
  font-size: 12px;
  cursor: pointer;
  color: rgba(84, 84, 84, 0.97);
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
`;

export const ArtworkLabel = ({ title, slideDir, inModal }) => {

 return (
  <ArtworkLabelContainer className={slideDir}>
    <h3>{title}</h3>
  </ArtworkLabelContainer>
)
};
