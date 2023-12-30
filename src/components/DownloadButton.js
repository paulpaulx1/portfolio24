import React from "react";
import styled from "styled-components";

const DownloadButtonStyled = styled.button`
  grid-column: 1 / -1;
  justify-self: center;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  color: #545454f7;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const Button = () => (
  <DownloadButtonStyled href="/Dec21Res.pdf" download="My_Resume.pdf">
    Download Resume
  </DownloadButtonStyled>
);
