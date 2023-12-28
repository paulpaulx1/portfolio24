import React from 'react';
import styled from 'styled-components';

const ArtworkLabelContainer = styled.div`
  margin: 10px;
  font-size: 12px;
  cursor: pointer;
  color: ${props => props.inModal ? 'whitesmoke' : 'rgba(84, 84, 84, 0.97)'};
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
`;

export const ArtworkLabel = ({ title, inModal }) => {
  return (
    <ArtworkLabelContainer inModal={inModal}>
      <h3>{title}</h3>
    </ArtworkLabelContainer>
  );
};