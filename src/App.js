import React from 'react';
import Password from './Password'
import './styles.css'
import {Route, Switch} from 'react-router-dom'
import Mr_scars from './Mr_scars'
import Cursor from './Cursor'
import Firebrand from './Firebrand'
import Persolus from './Persolus'
import Deadhead from './Deadhead'
import Swain from './Swain'
import Observer from './Observer'
import Robert from './Robert'




function App() {
  return (
    <Switch>
    <Route path='/Mr_scars'><Mr_scars /></Route>
    <Route path='/Cursor'><Cursor /></Route>
    <Route path='/Firebrand'><Firebrand /></Route>
    <Route path='/Persolus'><Persolus /></Route>
    <Route path='/Deadhead'><Deadhead /></Route>
    <Route path='/Observer'><Observer /></Route>
    <Route path='/Swain'><Swain /></Route>
    <Route path='/Robert'><Robert /></Route>
    
    {/* <Route exact path='/cursor' component={<cursor />} /> */}
    {/* <Route exact path='/mr_scars' component={<mr_scars />} />
    <Route exact path='/mr_scars' component={<mr_scars />} />
    <Route exact path='/mr_scars' component={<mr_scars />} />
    <Route exact path='/mr_scars' component={<mr_scars />} /> */}
    <Password />
    </Switch>
  );
}

export default App;
