import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Layout from './layouts/Layout'
import Home from './containers/Home/Home';
import Landing from './pages/landing/Landing'
import Dashboard from './containers/Dashboard/Dashboard';

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/home" exact component={Home} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/" exact component={Landing} />
            </Switch>
        </Layout>
    );
}

export default App;
