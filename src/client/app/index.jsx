import {
    default as React,
    Component
} from "react";
import ReactDOM from 'react-dom';


import {
    GoogleMap
} from "react-google-maps";
import {
    default as InfoBox
} from "react-google-maps/lib/addons/InfoBox";

// Import routing components
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Main from './common/main.component.jsx'
import Home from './common/home.component.jsx'
import About from './common/about.component.jsx'
import MapRender from './common/map.component.jsx'



ReactDOM.render(
    <Router history={browserHistory}>
        <Route component={Main}>
            <Route path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/map" component={MapRender}/>
        </Route>
    </Router>,
    document.getElementById('container')
);



