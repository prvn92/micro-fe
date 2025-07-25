import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
});

const App = ({ history }) => (
  <StylesProvider generateClassName={generateClassName} injectFirst>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/pricing" component={Pricing} />
      </Switch>
    </Router>
  </StylesProvider>
);

export default App;
