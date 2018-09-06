import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './containers/App';
import AddPerson from './containers/AddPerson';
import ViewPerson from './containers/ViewPerson';
export default () => {
 return (
   <BrowserRouter>
   <Switch>
   <Route exact path='/' component={App}/>
   <Route path='/add' component={AddPerson}/>
   <Route path='/view' component={ViewPerson}/>
   </Switch>
   </BrowserRouter>
 )
}