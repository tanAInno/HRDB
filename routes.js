import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './containers/App';
import AddPerson from './containers/AddPerson';
import ViewPerson from './containers/ViewPerson';
import EditPerson from './containers/EditPerson';
import Login from './containers/Login';
export default () => {
 return (
   <BrowserRouter>
   <Switch>
   <Route path='/main' component={App}/>
   <Route exact path='/' component={Login}/>
   <Route path='/add' component={AddPerson}/>
   <Route path='/view' component={ViewPerson}/>
   <Route path='/edit' component={EditPerson}/>
   </Switch>
   </BrowserRouter>
 )
}