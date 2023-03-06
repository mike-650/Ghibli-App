import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MovieContextProvider from './context/MovieContext';

ReactDOM.render(
  <MovieContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </MovieContextProvider>,
  document.getElementById('root')
);
