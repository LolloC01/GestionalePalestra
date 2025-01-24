import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const StyledHeader = styled.header`
  padding: 20px;
  color: black;
  text-align: center;
  position: fixed;
  width: 100%;
  z-index: 1000;
  margin: -10px;
`;

const Header = () => {
  const { t } = useTranslation('header');
  return (
    <StyledHeader>
      <h1>{t('HeaderTitle.Title')}</h1> 
    </StyledHeader>
  );
};

export default Header;