import React from 'react';
import Singin from '../pages/singin';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Singup from '../pages/singup';

const Public = (props) => {
    return (
        <Router>
            <div> 
                <Switch>
                    <Route exact path="/" component={() => (
                        !props.user ? <Redirect to="/singin" /> : <Redirect to="/" />
                    )} />
                    <Route path="/singin" component={() => (<Singin setUser={props.setUser} />)} />
                    <Route path="/singup" component={() => (<Singup/>)} />
                </Switch>
            </div>
        </Router>
    )
}

export default Public;