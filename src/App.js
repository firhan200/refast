import React from 'react';

/* libs */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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

/* pages */
import Box from './components/pages/components/Box.js';
/* pages */

const App = () => {
    return(
        <div>          
            {/* Start routing here */}
            <Router>
                {/* Top navigation bar and Menu bar */}
                <Navbar />
                <Menubar />
                
                {/* set container width to all content */}
                <div className="container content">
                    {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                    <Switch>
                        {/* Components */}
                        <Route path="/components/box" component={Box} />

                        {/* Default index page */}
                        <Route path="/" />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;