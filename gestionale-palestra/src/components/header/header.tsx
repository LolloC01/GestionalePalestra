import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const StyledHeader = styled.header`
  padding: 40px 0 0 0;
  color: white;
  text-align: center;
  position: fixed;
  width: 100%;
`;

const HeaderContent = styled.div`
  display: grid;
  grid-template-columns: 20fr 1fr; 
  align-items: center;
`;

const Title = styled.h1`
  text-shadow: 2px 2px 5px white;
  margin: 0;
  padding: 0 10px;
`;

export const HeaderPageContent = () => {
  const { t } = useTranslation('header');
  
  return (
    <StyledHeader>
      <HeaderContent>
        <Title>{t('HeaderTitle.Title')}</Title>
      </HeaderContent>
    </StyledHeader>
  )
}