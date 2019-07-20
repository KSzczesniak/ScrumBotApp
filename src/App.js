import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Layout from './layouts/Layout'
import Home from './containers/Home';
import Landing from './pages/landing/Landing'

function App() {
    return (
        <Layout>
            <Route path="/" exact component={Landing} />
        </Layout>
    );
}

export default App;
