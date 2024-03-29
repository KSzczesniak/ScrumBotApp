import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './layouts/Layout';
import Landing from './pages/landing/Landing';
import Dashboard from './containers/Dashboard/Dashboard';
import Team from './containers/Team/Team';
import Links from './pages/Links/Links';
import Roles from './pages/Roles/Roles';
import Events from './pages/Events/Events';

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/home" exact component={Landing} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/team" exact component={Team} />
                <Route path="/links" exact component={Links} />
                <Route path="/roles" exact component={Roles} />
                <Route path="/events" component={Events} />
                <Route path="/" component={Landing} />
            </Switch>
        </Layout>
    );
}

export default App;
