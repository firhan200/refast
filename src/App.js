import React from 'react';

/* libs */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//font-awesome
import 'font-awesome/css/font-awesome.min.css';

//bootstrap
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
/* libs */

/* components */
import Navbar from './components/layouts/Navbar.js';
import Menubar from './components/layouts/Menubar';
/* components */

/* pages sample */
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import ForgotPasswordPage from './components/pages/ForgotPasswordPage';
import ResetPasswordPage from './components/pages/ResetPasswordPage';
/* pages sample */

/* pages components */
import BoxPage from './components/pages/components/BoxPage.js';
import AlertPage from './components/pages/components/AlertPage.js';
import BadgePage from './components/pages/components/BadgePage.js';
import ButtonPage from './components/pages/components/ButtonPage.js';
import FormsPage from './components/pages/components/FormsPage';
import CardPage from './components/pages/components/CardPage.js';
import BreadcrumbsPage from './components/pages/components/BreadcrumbsPage';
import CarouselPage from './components/pages/components/CarouselPage';
/* pages components */

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
                        {/* Pages Sample */}
                        <Route path="/page/login" component={LoginPage} />
                        <Route path="/page/signup" component={SignupPage} />
                        <Route path="/page/forgot-password" component={ForgotPasswordPage} />
                        <Route path="/page/reset-password" component={ResetPasswordPage} />

                        {/* Components */}
                        <Route path="/components/box" component={BoxPage} />
                        <Route path="/components/alert" component={AlertPage} />
                        <Route path="/components/badges" component={BadgePage} />
                        <Route path="/components/buttons" component={ButtonPage} />
                        <Route path="/components/forms" component={FormsPage} />
                        <Route path="/components/cards" component={CardPage} />
                        <Route path="/components/breadcrumbs" component={BreadcrumbsPage} />
                        <Route path="/components/carousel" component={CarouselPage} />

                        {/* Default index page */}
                        <Route path="/" />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;