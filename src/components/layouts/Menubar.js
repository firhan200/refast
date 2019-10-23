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
                            <a className="nav-link" data-toggle="collapse" href="#submenu-forms" role="button" aria-expanded="false" aria-controls="submenu-forms">
                                Forms
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
                                <Link>Default</Link>
                            </li>
                            <li>
                                <Link>Boxes</Link>
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
                                <Link href="#">Login</Link>
                            </li>
                            <li>
                                <Link href="#">Sign up</Link>
                            </li>
                            <li>
                                <Link href="#">Forgot Password</Link>
                            </li>
                            <li>
                                <Link href="#">Reset Password</Link>
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

                <div className="collapse" data-parent="#main-menu" id="submenu-forms">
                    <div className="horizontal-menu">
                        <ul>
                            <li>
                                <Link>Layout</Link>
                            </li>
                            <li>
                                <Link>Component</Link>
                            </li>
                            <li>
                                <Link>Validation</Link>
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
                                <Link>Alert</Link>
                            </li>
                            <li>
                                <Link>Badges</Link>
                            </li>
                            <li>
                                <Link>Buttons</Link>
                            </li>
                            <li>
                                <Link>Cards</Link>
                            </li>
                            <li>
                                <Link>Breadcrumbs</Link>
                            </li>
                            <li>
                                <Link>Carousel</Link>
                            </li>
                            <li>
                                <Link>Charts</Link>
                            </li>
                            <li>
                                <Link>Collapse</Link>
                            </li>
                            <li>
                                <Link>Dropdowns</Link>
                            </li>
                            <li>
                                <Link>Tables</Link>
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