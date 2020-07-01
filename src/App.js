import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import { Provider } from 'react-redux'; // Enable my store redux
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import GlobalStyles from './styles/globals';
import Header from './components/Header';

import Routes from './routes';

import history from './services/history';
import store from './store';

function App() {
  return (
    // Enable to all componentes
    <Provider store={store}>
      {/* BrowserRouter is a component that will be responsible for informing our application that from where it is called we will have a component routing */}
      {/* <BrowserRouter> */}
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyles />
        {/* Milliseconds that our message will appear on screen */}
        <ToastContainer autoClose={3000} />
      </Router>
      {/* </BrowserRouter> */}
    </Provider>
  );
  // return <h1>Hello Redux</h1>;
}

export default App;
