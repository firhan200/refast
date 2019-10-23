import React from 'react';

//libs
import { Link } from 'react-router-dom';

/* components */
import NotificationContainer from './../notifications/NotificationContainer.js';
import MessageContainer from './../messages/MessageContainer.js';
/* components */

const Navbar = () => {
    return(
        <nav className="top-navbar navbar navbar-expand navbar-light bg-light">
            <Link to="/" className="navbar-brand">Refast</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbar">
                <form className="form-inline">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                </form>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown notification">
                        <Link className="nav-link dropdown-toggle" id="notificationDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-bell"></i>
                            <span className="total-notification">5</span>
                        </Link>
                        <NotificationContainer />
                    </li>
                    <li className="nav-item dropdown notification">
                        <Link className="nav-link dropdown-toggle" id="messageDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-envelope"></i>
                            <span className="total-notification">13</span>
                        </Link>
                        <MessageContainer />
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" href="#" id="profileDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="/images/avatar.png" alt="avatar" className="avatar rounded"/>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right message-section" aria-labelledby="profileDropdown">
                            <Link className="dropdown-item">Profile</Link>
                            <Link className="dropdown-item">Change Password</Link>
                            <div class="dropdown-divider"></div>
                            <Link className="dropdown-item">Logout</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;