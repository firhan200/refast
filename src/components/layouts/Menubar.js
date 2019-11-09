import React from 'react';

//libs
import { Link } from 'react-router-dom';
import { Menu, MenuLink } from '../styles';

const HorizontalMenubar = () => {
    return(
        <nav id="menu">
            <label htmlFor="tm" id="toggle-menu">Navigation <span className="drop-icon"><i className="fa fa-chevron-down"></i></span></label>
            <input type="checkbox" id="tm" />
            <ul className="main-menu clearfix">
                <Menu isSubmenu={true} label="Dashboard">
                    <MenuLink>
                        <Link to="/">E-Commerce</Link>
                    </MenuLink>
                    <MenuLink>
                        <Link to="/dashboard/blog">Blog Analytics</Link>
                    </MenuLink>
                </Menu>
                <Menu isSubmenu={true} label="Pages">
                    <Menu isSubmenu={true} label="Authorization">
                        <MenuLink>
                            <Link to="/page/login">Login</Link>
                        </MenuLink>
                        <MenuLink>
                        <Link to="/page/signup">Sign up</Link>
                        </MenuLink>
                        <MenuLink>
                        <Link to="/page/forgot-password">Forgot Password</Link>
                        </MenuLink>
                        <MenuLink>
                            <Link to="/page/reset-password">Reset Password</Link>
                        </MenuLink>
                    </Menu>
                    <Menu isSubmenu={true} label="Error">
                        <MenuLink>
                            <Link to="/page/404">Not Found</Link>
                        </MenuLink>
                        <MenuLink>
                            <Link to="/page/500">Internal Server Error</Link>
                        </MenuLink>
                    </Menu>
                    <Menu isSubmenu={true} label="Misc">
                        <MenuLink>
                            <Link to="/page/faq">FAQ</Link>
                        </MenuLink>
                        <MenuLink>
                            <Link to="/page/search">Search</Link>
                        </MenuLink>
                        <MenuLink>
                            <Link to="/page/mailing">Mailing</Link>
                        </MenuLink>
                        <MenuLink>
                            <Link to="/page/pricing">Pricing</Link>
                        </MenuLink>
                    </Menu>
                </Menu>
                <Menu isSubmenu={true} label="App">
                    <MenuLink>
                        <Link to="/app/todo">Todo</Link>
                    </MenuLink>
                </Menu>
                <Menu isSubmenu={true} label="Components">
                    <Menu isSubmenu={true} label="User Interface">
                        <MenuLink>
                            <Link to="/components/box">Box</Link>
                        </MenuLink>
                        <MenuLink>
                            <Link to="/components/forms">Forms &amp; Inputs</Link>
                        </MenuLink>
                        <MenuLink>
                            <Link to="/components/cards">Cards</Link>
                        </MenuLink>
                        <MenuLink>
                            <Link to="/components/alert">Alert</Link>
                        </MenuLink>
                        <MenuLink>
                            <Link to="/components/badges">Badges</Link>
                        </MenuLink>
                        <MenuLink>
                            <Link to="/components/buttons">Buttons</Link>
                        </MenuLink>
                        <MenuLink>
                            <Link to="/components/breadcrumbs">Breadcrumbs</Link>
                        </MenuLink>
                    </Menu>
                    <Menu isSubmenu={true} label="Widgets">
                        <MenuLink>
                            <Link to="/components/carousel">Carousel</Link>
                        </MenuLink>
                        <MenuLink>
                            <Link to="/components/charts">Charts</Link>
                        </MenuLink>
                        <MenuLink>
                            <Link to="/components/collapse">Collapse</Link>
                        </MenuLink>
                        <MenuLink>
                            <Link to="/components/dropdowns">Dropdowns</Link>
                        </MenuLink>
                        <MenuLink>
                            <Link to="/components/tables">Tables</Link>
                        </MenuLink>
                        <MenuLink>
                            <Link to="/components/progressbar">Progress Bar</Link>
                        </MenuLink>
                    </Menu>
                </Menu>
            </ul>
        </nav>
    );
}

export default HorizontalMenubar;