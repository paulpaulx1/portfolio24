import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavTitle = styled.h1`
font-size: 8vw;
display: flex;
align-items: center;
justify-content: center;
font-weight: 900;
min-height: fit-content;
`;

const Navigation = () => (
  <NavTitle className={'art__title slide__top'}>
    <Link to="/" className="header__name">
      paulmneenan
    </Link>
  </NavTitle>
);

export default Navigation;