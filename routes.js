import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './containers/App';
import AddPerson from './containers/AddPerson';
export default () => {
 return (
   <BrowserRouter>
   <Switch>
   <Route exact path='/' component={App}/>
   <Route path='/add' component={AddPerson}/>
   </Switch>
   </BrowserRouter>
 )
}