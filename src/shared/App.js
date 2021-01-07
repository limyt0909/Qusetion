import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import {
  Home,
  Aboutaone,
  Aboutaone2,
  Aboutaone3,
  Aboutaone4,
  Aboutaone5,
  Aboutaone6,
  Aboutaone7,
  Aboutaone8,
  Aboutaone9,
  Aboutaone10,
  Aboutaone11,
} from '../pages';

import {
  CustomAone,
  CustomAone2,
  CustomAone3,
  CustomAone4,
  CustomAone5,
  CustomAone6,
  CustomAone7,
  CustomAone8,
  CustomAone9,
} from '../pages';

import {
  Consultation,
  Consultation2,
  Consultation3,
  Consultation4,
  Consultation5,
  Consultation6,
  Consultation7,
  Consultation8,
} from '../pages';

import {
  Education,
  Education2,
  Education3,
  Education4,
  Education5,
} from '../pages';

import {
  Resources,
  Resources2,
  Resources3,
  Resources4,
  Resources5,
} from '../pages';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutaone" component={Aboutaone} />
        <Route exact path="/aboutaone2" component={Aboutaone2} />
        <Route exact path="/aboutaone3" component={Aboutaone3} />
        <Route exact path="/aboutaone4" component={Aboutaone4} />
        <Route exact path="/aboutaone5" component={Aboutaone5} />
        <Route exact path="/aboutaone6" component={Aboutaone6} />
        <Route exact path="/aboutaone7" component={Aboutaone7} />
        <Route exact path="/aboutaone8" component={Aboutaone8} />
        <Route exact path="/aboutaone9" component={Aboutaone9} />
        <Route exact path="/aboutaone10" component={Aboutaone10} />
        <Route exact path="/aboutaone11" component={Aboutaone11} />

        <Route exact path="/CustomAone" component={CustomAone} />
        <Route exact path="/CustomAone2" component={CustomAone2} />
        <Route exact path="/CustomAone3" component={CustomAone3} />
        <Route exact path="/CustomAone4" component={CustomAone4} />
        <Route exact path="/CustomAone5" component={CustomAone5} />
        <Route exact path="/CustomAone6" component={CustomAone6} />
        <Route exact path="/CustomAone7" component={CustomAone7} />
        <Route exact path="/CustomAone8" component={CustomAone8} />
        <Route exact path="/CustomAone9" component={CustomAone9} />

        <Route exact path="/Consultation" component={Consultation} />
        <Route exact path="/Consultation2" component={Consultation2} />
        <Route exact path="/Consultation3" component={Consultation3} />
        <Route exact path="/Consultation4" component={Consultation4} />
        <Route exact path="/Consultation5" component={Consultation5} />
        <Route exact path="/Consultation6" component={Consultation6} />
        <Route exact path="/Consultation7" component={Consultation7} />
        <Route exact path="/Consultation8" component={Consultation8} />

        <Route exact path="/Education" component={Education} />
        <Route exact path="/Education2" component={Education2} />
        <Route exact path="/Education3" component={Education3} />
        <Route exact path="/Education4" component={Education4} />
        <Route exact path="/Education5" component={Education5} />

        <Route exact path="/Resources" component={Resources} />
        <Route exact path="/Resources2" component={Resources2} />
        <Route exact path="/Resources3" component={Resources3} />
        <Route exact path="/Resources4" component={Resources4} />
        <Route exact path="/Resources5" component={Resources5} />
      </div>
    );
  }
}

export default App;
