import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/globals';
import Header from './components/Header';

import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
  // return <h1>Hello Redux</h1>;
}

export default App;
