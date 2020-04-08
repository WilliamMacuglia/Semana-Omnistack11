import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Switch makes sure one route is run at a time.
// EXACT property makes it so that the Login page will only show if the URL is exactly like the path.

import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />  
                <Route path="/register" component={Register} />

                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );
}
