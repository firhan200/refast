import React from 'react';

/* libs */
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//font-awesome
import 'font-awesome/css/font-awesome.min.css';

//bootstrap
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
/* libs */

/* layouts */
import Adminlayout from './components/layouts/AdminLayout';
import BlankLayout from './components/layouts/BlankLayout';
/* layouts */

/* dashboards */
import ECommercePage from './components/pages/dashboards/ECommercePage';
import BlogPage from './components/pages/dashboards/BlogPage';
/* dashboards */

/* pages sample */
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import ForgotPasswordPage from './components/pages/ForgotPasswordPage';
import ResetPasswordPage from './components/pages/ResetPasswordPage';

//error
import Page404 from './components/pages/Page404';
import Page500 from './components/pages/Page500';

import FAQPage from './components/pages/FAQPage';
import SearchPage from './components/pages/SearchPage';
import MailingPage from './components/pages/MailingPage';
import PricingPage from './components/pages/PricingPage';
/* pages sample */

/* Apps */
import Todo from './components/apps/Todo';
/* Apps */

/* pages components */
import HeaderPage from './components/pages/components/HeaderPage';
import BoxPage from './components/pages/components/BoxPage';
import AlertPage from './components/pages/components/AlertPage';
import BadgePage from './components/pages/components/BadgePage';
import ButtonPage from './components/pages/components/ButtonPage';
import FormsPage from './components/pages/components/FormsPage';
import CardPage from './components/pages/components/CardPage';
import BreadcrumbsPage from './components/pages/components/BreadcrumbsPage';
import CarouselPage from './components/pages/components/CarouselPage';
import ChartsPage from './components/pages/components/ChartsPage';
import AvatarPage from './components/pages/components/AvatarPage';
import CollapsePage from './components/pages/components/CollapsePage';
import DropdownsPage from './components/pages/components/DropdownsPage';
import TablePage from './components/pages/components/TablePage';
import ProgressBarPage from './components/pages/components/ProgressBarPage';
/* pages components */

/* documentation */
import Documentation from './components/pages/documentation';
/* documentation */

// Call it once in your app. At the root of your app is the best place
toast.configure();

const App = (props) => {
    /* use this element to create route that only logged in user can access */
    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={(componentProps) => 
            (
                //check if authenticated or not
                props.isAuthenticated === true
                ? 
                    // authenticated render using admin layout
                    (
                        <Adminlayout>
                            <Component {...componentProps} />
                        </Adminlayout>
                    )
                : <Redirect to='/login' />
            )
        } />
    )
  
    /* use this element to create route that only guest can access */
    const UnauthorizedRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={(componentProps) => (
            !props.isAuthenticated
            ? 
            (
                // authenticated render using blank layout
                <BlankLayout>
                    <Component {...componentProps} />
                </BlankLayout>
            )
            : <Redirect to='/dashboard/ecommerce' />
        )} />
    )

    return(
        <div>          
            {/* Start routing here */}
            <Router>
                
                {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
                <Switch>
                    {/* dashboards */}
                    <PrivateRoute path="/dashboard/ecommerce" component={ECommercePage}/>
                    <PrivateRoute path="/dashboard/blog" component={BlogPage}/>

                    {/* Pages Sample */}
                    <UnauthorizedRoute path="/login" component={LoginPage} />
                    <UnauthorizedRoute path="/signup" component={SignupPage} />
                    <PrivateRoute path="/page/forgot-password" component={ForgotPasswordPage} />
                    <PrivateRoute path="/page/reset-password" component={ResetPasswordPage} />

                    <Route path="/page/404" component={Page404} />
                    <Route path="/page/500" component={Page500} />

                    <PrivateRoute path="/page/faq" component={FAQPage} />
                    <PrivateRoute path="/page/search" component={SearchPage} />
                    <PrivateRoute path="/page/mailing" component={MailingPage} />
                    <PrivateRoute path="/page/pricing" component={PricingPage} />

                    {/* Unautorized sample page */}
                    <PrivateRoute path="/page/login" component={LoginPage} />
                    <PrivateRoute path="/page/signup" component={SignupPage} />

                    {/* Pages Sample */}
                    <PrivateRoute path='/app/todo' component={Todo}/>

                    {/* Components */}
                    <PrivateRoute path="/components/header" component={HeaderPage} />
                    <PrivateRoute path="/components/box" component={BoxPage} />
                    <PrivateRoute path="/components/alert" component={AlertPage} />
                    <PrivateRoute path="/components/badges" component={BadgePage} />
                    <PrivateRoute path="/components/buttons" component={ButtonPage} />
                    <PrivateRoute path="/components/forms" component={FormsPage} />
                    <PrivateRoute path="/components/cards" component={CardPage} />
                    <PrivateRoute path="/components/breadcrumbs" component={BreadcrumbsPage} />
                    <PrivateRoute path="/components/carousel" component={CarouselPage} />
                    <PrivateRoute path="/components/charts" component={ChartsPage} />
                    <PrivateRoute path="/components/avatar" component={AvatarPage} />
                    <PrivateRoute path="/components/collapse" component={CollapsePage} />
                    <PrivateRoute path="/components/dropdowns" component={DropdownsPage} />
                    <PrivateRoute path="/components/tables" component={TablePage} />
                    <PrivateRoute path="/components/progressbar" component={ProgressBarPage} />

                    {/* Documentation */}
                    <PrivateRoute path="/documentation" component={Documentation} />

                    {/* not found page */}
                    <PrivateRoute path="/" component={ECommercePage}/>
                </Switch>

            </Router>
        </div>
    );
}

/* map redux states to be accessed by global props */
const mapStateToProps = state => ({
    isAuthenticated : state.authReducer.isAuthenticated
});

/* map redux actions to be accessed by global props */
const mapActionToProps = () => ({});

/* connect use react redux */
export default connect(mapStateToProps, mapActionToProps)(App);