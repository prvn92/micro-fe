import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history';

// Mount function to start up the app
const mount = (el,  { onNavigation, defaultHistory, initialPath, onSignIn } ) => {
console.log('Auth App mounted');
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath || '/auth'],
  });
  if (onNavigation) {
    // Listen for changes in the history and call onNavigation
    history.listen(onNavigation);
  }
  ReactDOM.render(<App history={history} onSignIn={onSignIn} />, el);

  return {
    onParentNavigate: ({ pathname: nextPathname }) => {
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
  }
};
}


// If in development and running in isolation, render immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-dev-root');

  if (devRoot) {
  mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

export default mount;
export { mount };
