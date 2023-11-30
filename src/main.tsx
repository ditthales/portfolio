import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initI18n } from './1. locales/i18n.ts';
import { CSSTransition } from 'react-transition-group';

const LoadingScreen = () => (
  <div className="flex flex-col items-center justify-center h-screen">
    <div className="loader border-t-8 border-blue-500 border-solid rounded-full animate-spin w-16 h-16"></div>
    <p className="mt-4">Carregando...</p>
  </div>
);

const Root = () => {
  const [translationsLoaded, setTranslationsLoaded] = useState(false);

  useEffect(() => {
    initI18n().then(() => {
      setTranslationsLoaded(true);
    });
  }, []);

  return (
    <React.StrictMode>
      <CSSTransition
        in={translationsLoaded}
        timeout={500} // Tempo da transição em milissegundos
        classNames="fade"
        unmountOnExit
      >
        <App />
      </CSSTransition>
      {!translationsLoaded && <LoadingScreen />}
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<Root />);
