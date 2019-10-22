import React from 'react';

/* libs */
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//font-awesome
import 'font-awesome/css/font-awesome.min.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
/* libs */

/* components */
import Navbar from './components/layouts/Navbar.js';
import Menubar from './components/layouts/Menubar';
/* components */

const App = () => {
    return(
        <div>
            {/* Top navigation bar and Menu bar */}
            <Navbar />
            <Menubar />

            {/* Start routing here */}
            <Router>
                {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/">
                    </Route>
                    <Route path="/about">
                    </Route>
                    <Route path="/users">
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;