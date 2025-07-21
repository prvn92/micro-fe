import React, {lazy, Suspense, useState} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Header from './components/Header';
import Progress from './components/Progress';

const MarketingApp= lazy(() => import('./components/MarketingApp'));
const AuthApp = lazy(() => import('./components/AuthApp')); 

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {
  const [isSingedIn, setIsSignedIn] = useState(false);
  return (
    <StylesProvider generateClassName={generateClassName} injectFirst>
      <BrowserRouter>
        <div>
          <Header isSignedIn={isSingedIn} onSignOut={() => setIsSignedIn(false)}/>
          <Suspense fallback={<Progress />}>
            <switch>
              <Route path="/auth" >
                <AuthApp onSignIn={() => setIsSignedIn(true)}/>
              </Route>
              <Route path="/">
                <MarketingApp isSignedIn={isSingedIn} />
              </Route>
            </switch>
          </Suspense>
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
}