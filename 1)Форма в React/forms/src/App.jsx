import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Result } from './components/Result/Result';
import { Step1 } from './components/Step1/Step1';
import { Step2 } from './components/Step2/Step2';
import { Step3 } from './components/Step3/Step3';

function App() {
  return (
        <>
            <Header/>
            <Switch>
              <Route exact path="/" component={Step1} />
              <Route path="/step2" component={Step2} />
              <Route path="/step3" component={Step3} />
              <Route path="/result" component={Result} />
            </Switch>
        </>
  );
}

export default App;
