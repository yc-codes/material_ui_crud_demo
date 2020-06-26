import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Login from './login';
import Register from './register';
import Home from './home';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/">
                    <Redirect exact to="/login" />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;