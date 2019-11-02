import React from 'react';

//libs
import { Link } from 'react-router-dom';

const Menubar = () => {
    return(
        <div id="main-menu">
            {/* Level 1 main menu navigation start */}
            <nav className="horizontal-menu menu-navbar navbar navbar-expand-lg navbar-light bg-light">
                <div id="menubar">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="collapse" href="#submenu-dashboard" role="button" aria-expanded="false" aria-controls="submenu-dashboard">
                                Dashboard
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="collapse" href="#submenu-pages" role="button" aria-expanded="false" aria-controls="submenu-pages">
                                Pages
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="collapse" href="#submenu-components" role="button" aria-expanded="false" aria-controls="submenu-components">
                                Components
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="collapse" href="#submenu-layouts" role="button" aria-expanded="false" aria-controls="submenu-layouts">
                                Layouts
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* Level 1 main menu navigation end */}

            {/* Level 2 sub main menu navigation start */}
            <div className="submenu">
                <div className="collapse" data-parent="#main-menu" id="submenu-dashboard">
                    <div className="horizontal-menu">
                        <ul>
                            <li>
                                <Link to="/dashboard/ecommerce">E-Commerce</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="collapse" data-parent="#main-menu" id="submenu-pages">
                    <div className="horizontal-menu">
                        <div className="title">
                            Authorization
                        </div>
                        <ul>
                            <li>
                                <Link to="/page/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/page/signup">Sign up</Link>
                            </li>
                            <li>
                                <Link to="/page/forgot-password">Forgot Password</Link>
                            </li>
                            <li>
                                <Link to="/page/reset-password">Reset Password</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="horizontal-menu pull">
                        <div className="title">
                            Misc
                        </div>
                        <ul>
                            <li>
                                <Link href="#">FAQ</Link>
                            </li>
                            <li>
                                <Link href="#">404</Link>
                            </li>
                            <li>
                                <Link href="#">Search</Link>
                            </li>
                            <li>
                                <Link href="#">Mailing</Link>
                            </li>
                            <li>
                                <Link href="#">Pricing</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="collapse" data-parent="#main-menu" id="submenu-components">
                    <div className="horizontal-menu">
                        <ul>
                            <li>
                                <Link to="/components/box">Box</Link>
                            </li>
                            <li>
                                <Link to="/components/alert">Alert</Link>
                            </li>
                            <li>
                                <Link to="/components/badges">Badges</Link>
                            </li>
                            <li>
                                <Link to="/components/buttons">Buttons</Link>
                            </li>
                            <li>
                                <Link to="/components/forms">Forms</Link>
                            </li>
                            <li>
                                <Link to="/components/cards">Cards</Link>
                            </li>
                            <li>
                                <Link to="/components/breadcrumbs">Breadcrumbs</Link>
                            </li>
                            <li>
                                <Link to="/components/carousel">Carousel</Link>
                            </li>
                            <li>
                                <Link to="/components/charts">Charts</Link>
                            </li>
                            <li>
                                <Link to="/components/collapse">Collapse</Link>
                            </li>
                            <li>
                                <Link to="/components/dropdowns">Dropdowns</Link>
                            </li>
                            <li>
                                <Link to="/components/tables">Tables</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="collapse" data-parent="#main-menu" id="submenu-layouts">
                    <div className="horizontal-menu">
                        <ul>
                            <li>
                                <Link>full grid</Link>
                            </li>
                            <li>
                                <Link>2 grid</Link>
                            </li>
                            <li>
                                <Link>2 grid with top</Link>
                            </li>
                            <li>
                                <Link>2 grid with top &amp; bottom</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Level 2 sub main menu navigation end */}
        </div>
    );
}

export default Menubar;