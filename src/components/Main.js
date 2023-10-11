import React from 'react'
import { Redirect, Route, Switch } from "react-router";
import App from '../App';
import Signup from './Signup';
import User from './User';

/**
* @author
* @function Main
**/

const Main = (props) => {
  return(
    <div>
        <Switch>
            <Route exact path="/" component={User} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/ZXCAETTUNnbsg125fj/netflixx" component={App} />
            <Redirect to="/" />
        </Switch>


    </div>
   )

 }

export default Main