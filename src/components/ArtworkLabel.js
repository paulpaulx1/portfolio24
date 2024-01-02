import React from 'react';
import styled, { css } from 'styled-components';

const BauhausTheme = css`
  color: ${props => props.inModal ? 'whitesmoke' : 'rgba(84, 84, 84, 0.97)'};
  background-color: ${props => props.inModal ? 'transparent' : 'ffffff00'};
  border: 1px solid ${props => props.inModal ? '#ffffff00' : 'rgba(84, 84, 84, 0.5)'};
  font-family: 'Raleway', 'Arial', sans-serif;
  width: 100%;
`;

const ArtworkLabelContainer = styled.div`
  ${BauhausTheme}
  padding: 10px;
  margin: 0px auto 6px auto;
  font-size: 12px;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border:none;
`;

const ArtworkTitle = styled.h3`
  margin: 0 0 2px 0;
  font-size: 14px;
  width: 100%;
  text-align: center;
`;

const ArtworkDetails = styled.div`
  font-size: 12px;
  text-align: center;
`;

export const ArtworkLabel = ({ title, dimensions, material, inModal }) => {
  return (
    <ArtworkLabelContainer inModal={inModal}>
      <ArtworkTitle>{title}</ArtworkTitle>
      <ArtworkDetails>
        {dimensions && <div>{dimensions}</div>}
        {material && <div>{material}</div>}
      </ArtworkDetails>
    </ArtworkLabelContainer>
  );
};