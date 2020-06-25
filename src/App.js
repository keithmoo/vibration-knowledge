import React from 'react';
import Password from './Password'
import './styles.css'
import {Route, Switch} from 'react-router-dom'
import MR_SCARS from './Mr_scars'
import Cursor from './Cursor'
import Firebrand from './Firebrand'
import Persolus from './Persolus'
import Deadhead from './Deadhead'
import Swain from './Swain'
import Observer from './Observer'
import Robert from './Robert'
import Losethose from './Losethose'
import Judy from './Judy'
import English from './English'
import Gallery from './Gallery'




function App() {
  return (
    <Switch>
    <Route path='/Mr_scars'><MR_SCARS /></Route>
    <Route path='/Cursor'><Cursor /></Route>
    <Route path='/Firebrand'><Firebrand /></Route>
    <Route path='/Persolus'><Persolus /></Route>
    <Route path='/Deadhead'><Deadhead /></Route>
    <Route path='/Observer'><Observer /></Route>
    <Route path='/Swain'><Swain /></Route>
    <Route path='/Robert'><Robert /></Route>
    <Route path='/Losethose'><Losethose /></Route>
    <Route path='/Jowday'><Judy /></Route>
    <Route path='/English'><English /></Route>
    <Route path='/gallery'><Gallery /></Route>
    
    
    <Password />
    </Switch>
  );
}

export default App;
