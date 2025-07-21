import React, {lazy, Suspense, useState, useEffect} from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';
import Header from './components/Header';
import Progress from './components/Progress';

const MarketingApp= lazy(() => import('./components/MarketingApp'));
const AuthApp = lazy(() => import('./components/AuthApp')); 
const DashboardApp = lazy(() => import('./components/DashboardApp')); 
const history = createBrowserHistory()
const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {
  const [isSingedIn, setIsSignedIn] = useState(false);
  useEffect(() => {
    if(isSingedIn){
      history.push('/dashboard')
    }
  }, [isSingedIn]);

  return (
    <StylesProvider generateClassName={generateClassName} injectFirst>
      <Router history={history}>
        <div>
          <Header isSignedIn={isSingedIn} onSignOut={() => setIsSignedIn(false)}/>
          <Suspense fallback={<Progress />}>
            <switch>
              <Route path="/auth" >
                <AuthApp onSignIn={() => setIsSignedIn(true)}/>
              </Route>
               <Route path="/dashboard" >
                {!isSingedIn && <Redirect to="/" />}
                {<DashboardApp isSignedIn={isSingedIn} />}
              </Route>
              <Route path="/">
                <MarketingApp isSignedIn={isSingedIn} />
              </Route>
            </switch>
          </Suspense>
        </div>
      </Router>
    </StylesProvider>
  );
}