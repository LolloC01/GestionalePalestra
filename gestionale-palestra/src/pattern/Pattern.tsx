import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Assicurati che il pattern sia dietro tutti gli altri contenuti */

  .container {
    width: 100%;
    height: 100%;
    background-color: #111111;
    background-image: linear-gradient(
      32deg,
      rgba(8, 8, 8, 0.74) 30px,
      transparent
    );
    background-size: 60px 60px;
    background-position: -5px -5px;
  }
`;

export const Pattern = () => {
  return (
    <StyledWrapper>
      <div className="container" />
    </StyledWrapper>
  )
}