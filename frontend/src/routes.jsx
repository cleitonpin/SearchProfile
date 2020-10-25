import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Landing from './pages/Landing/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/profile" component={Home}/>

        </BrowserRouter>
    )
}