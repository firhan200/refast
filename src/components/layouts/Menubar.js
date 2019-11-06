import React, { useState } from 'react';

//libs
import { Link } from 'react-router-dom';
import { Menu, MenuLink } from '../styles';

const HorizontalMenubar = () => {
    return(
        <nav id="menu">
            <label htmlFor="tm" id="toggle-menu">Navigation <span className="drop-icon">▾</span></label>
            <input type="checkbox" id="tm" />
            <ul className="main-menu clearfix">
                <Menu>
                    <MenuLink>
                        Dashboard
                    </MenuLink>
                </Menu>
                {/* <li onClick={(e) => {
                    setOpenSubmenu(!openSubmenu)
                }}>
                    <a href="#!">
                        Dashboard
                        <label title="Toggle Drop-down" className="drop-icon" htmlFor="menu-dashboard">▾</label>
                    </a>
                    <input type="checkbox" id="menu-dashboard" checked={openSubmenu} onChange={(e) => setOpenSubmenu(e.checked)}/>
                    <ul className="sub-menu">
                        <li>
                            <Link to="/">E-Commerce</Link>
                        </li>
                    </ul>
                </li> */}
                <li>
                    <a href="#!">
                        Pages
                        <label title="Toggle Drop-down" className="drop-icon" htmlFor="menu-pages">▾</label>
                    </a>
                    <input type="checkbox" id="menu-pages"/>
                    <ul className="sub-menu">
                        <li>
                            <a href="#!">
                                Authorization
                                <label title="Toggle Drop-down" className="drop-icon" htmlFor="menu-authorization">▾</label>
                            </a>
                            <input type="checkbox" id="menu-authorization"/>
                            <ul className="sub-menu">
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
                        </li>
                        <li>
                            <a href="#!">
                                Misc
                                <label title="Toggle Drop-down" className="drop-icon" htmlFor="menu-misc">▾</label>
                            </a>
                            <input type="checkbox" id="menu-misc"/>
                            <ul className="sub-menu">
                                <li>
                                    <Link to="/page/faq">FAQ</Link>
                                </li>
                                <li>
                                    <Link to="/page/404">404</Link>
                                </li>
                                <li>
                                    <Link to="/page/search">Search</Link>
                                </li>
                                <li>
                                    <Link to="/page/mailing">Mailing</Link>
                                </li>
                                <li>
                                    <Link to="/page/pricing">Pricing</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#!">
                        Components
                        <label title="Toggle Drop-down" className="drop-icon" htmlFor="menu-components">▾</label>
                    </a>
                    <input type="checkbox" id="menu-components"/>
                    <ul className="sub-menu">
                        <li>
                            <a href="#!">
                                User Interface
                                <label title="Toggle Drop-down" className="drop-icon" htmlFor="menu-user-interface">▾</label>
                            </a>
                            <input type="checkbox" id="menu-user-interface"/>
                            <ul className="sub-menu">
                                <li>
                                    <Link to="/components/box">Box</Link>
                                </li>
                                <li>
                                    <Link to="/components/forms">Forms &amp; Inputs</Link>
                                </li>
                                <li>
                                    <Link to="/components/cards">Cards</Link>
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
                                    <Link to="/components/breadcrumbs">Breadcrumbs</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#!">
                                Widgets
                                <label title="Toggle Drop-down" className="drop-icon" htmlFor="menu-widgets">▾</label>
                            </a>
                            <input type="checkbox" id="menu-widgets"/>
                            <ul className="sub-menu">
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
                                <li>
                                    <Link to="/components/progressbar">Progress Bar</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default HorizontalMenubar;