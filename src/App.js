import React, {useState} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Today from './components/Today';
import InOneDay from './components/InOneDay';
import InTwoDays from './components/InTwoDays';
import InThreeDays from './components/InThreeDays';
import InFourDays from './components/InFourDays';

const dayShift = (shift) => {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  let d = new Date();
  let day = days[(d.getDay() + shift)%7];

  return `${day}`
}

let dt = new Date();
let month = dt.getMonth();

function App() {
  return (
    <div className = {
      ([0,1,2].includes(month)) ?
      'App winter' : ([3,4,5].includes(month)) ?
      'App spring' : ([6,7,8].includes(month)) ?
      'App summer' : 'App autumn'
    }>
      <main>
      <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Today} />
      <Route path="/components/InOneDay" component={InOneDay} />
      <Route path="/components/InTwoDays" component={InTwoDays} />
      <Route path="/components/InThreeDays" component={InThreeDays} />
      <Route path="/components/InFourDays" component={InFourDays} />
      </Switch>
      
      <ul>
        <Link to="/components/InOneDay"><li>{dayShift(1)}</li></Link>
        <Link to="/components/InTwoDays"><li>{dayShift(2)}</li></Link>
      </ul>
      <ul>
        <Link to="/components/InThreeDays"><li>{dayShift(3)}</li></Link>
        <Link to="/components/InFourDays"><li>{dayShift(4)}</li></Link>
      </ul>
      <Link to="/"><p>Today</p></Link>
      </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
