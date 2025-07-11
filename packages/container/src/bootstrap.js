import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function to start up the app
export const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// If in development and running in isolation, render immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('root');
  if (devRoot) {
    mount(devRoot);
  }
}
