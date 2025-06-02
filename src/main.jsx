import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

setTimeout(() => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.opacity = '0';
    preloader.style.transition = 'opacity 0.5s ease';
    setTimeout(() => preloader.remove(), 500);
  }
}, 2000);

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
