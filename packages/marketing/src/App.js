import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
});

const App = () => (
  <StylesProvider generateClassName={generateClassName} injectFirst>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/pricing" component={Pricing} />
      </Switch>
    </BrowserRouter>
  </StylesProvider>
);

export default App;
