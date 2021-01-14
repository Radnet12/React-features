import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Step1 } from './components/Step1/Step1';
function App() {
  return (
        <>
            <Header/>
            <Switch>
              <Route exact path="/" component={Step1} />
            </Switch>
        </>
  );
}

export default App;
