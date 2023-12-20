import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavTitle = styled.h1`
  h1 {
    &.nav__text {
      &.art__title {
        &.slide__top {
          margin: 0; /* Remove default margin */
          font-size: 2rem; /* Adjust font size as needed */
        }
      }
    }

    .header__name {
      font-size: 5rem;
    }
  }
`;

const Navigation = () => (
  <NavTitle className={'art__title slide__top'}>
    <Link to="/about" className="header__name">
      paulmneenan
    </Link>
  </NavTitle>
);

export default Navigation;