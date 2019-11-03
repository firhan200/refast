import React from 'react';

//libs
import { Link } from 'react-router-dom';

/* components */
import NotificationContainer from './../notifications/NotificationContainer.js';
import MessageContainer from './../messages/MessageContainer.js';
/* components */

const Navbar = () => {
    return(
        <nav className="top-navbar navbar fixed-top navbar-expand navbar-light bg-light">
            <Link to="/" className="navbar-brand">
                <img src="/iconname.png" alt="Logo" className="logo"/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbar">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown notification">
                        <a href="#!" className="nav-link dropdown-toggle" id="notificationDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-bell-o"></i>
                            <span className="total-notification">5</span>
                        </a>
                        <NotificationContainer />
                    </li>
                    <li className="nav-item dropdown notification">
                        <a href="#!" className="nav-link dropdown-toggle" id="messageDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-envelope-o"></i>
                            <span className="total-notification">12</span>
                        </a>
                        <MessageContainer />
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#!" id="profileDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="/images/avatar.png" alt="avatar" className="avatar rounded"/>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right message-section" aria-labelledby="profileDropdown">
                            <Link className="dropdown-item" to="/profile">Profile</Link>
                            <Link className="dropdown-item" to="/change-password">Change Password</Link>
                            <div className="dropdown-divider"></div>
                            <a href="#!" className="dropdown-item">Logout</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;