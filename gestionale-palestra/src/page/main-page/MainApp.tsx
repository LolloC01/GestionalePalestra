import React from 'react';
import i18next from 'i18next';
import { initLocale } from '../../i18n';
import { I18nextProvider } from 'react-i18next';
import { HeaderPageContent } from '../../components/header/Header';
import { Pattern } from '../../pattern/Pattern';
import styled from 'styled-components';
import { MyCalendar } from '../../components/my-calendar/MyCalendar';

const ContentWrapper = styled.div`
  margin-top: 100px; 
`;

const App: React.FC = () => {
  const i18n = i18next.createInstance();
  initLocale(i18n);

  return (
    <I18nextProvider i18n={i18n}>
      <Pattern />
      <HeaderPageContent />
      <ContentWrapper>
        <MyCalendar />
      </ContentWrapper>
    </I18nextProvider>
  );
};

export default App;