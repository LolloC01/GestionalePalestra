import React from 'react';
import Header from '../../components/header';
import i18next from 'i18next';
import { initLocale } from '../../i18n';
import { I18nextProvider } from 'react-i18next';

const App: React.FC = () => {
  const i18n = i18next.createInstance()
  initLocale(i18n)

  return (
    <I18nextProvider i18n={i18n}>
      <Header />
    </I18nextProvider>
    
  );
};

export default App;
