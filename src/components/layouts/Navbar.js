import React from 'react';

/* components */
import NotificationContainer from './../notifications/NotificationContainer.js';
import MessageContainer from './../messages/MessageContainer.js';
/* components */

const Navbar = () => {
    return(
        <nav className="top-navbar navbar navbar-expand navbar-light bg-light">
            <a className="navbar-brand" href="#">Refast</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbar">
                <form className="form-inline">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                </form>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown notification">
                        <a className="nav-link dropdown-toggle" href="#" id="notificationDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-bell"></i>
                            <span className="total-notification">5</span>
                        </a>
                        <NotificationContainer />
                    </li>
                    <li className="nav-item dropdown notification">
                        <a className="nav-link dropdown-toggle" href="#" id="messageDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-envelope"></i>
                            <span className="total-notification">13</span>
                        </a>
                        <MessageContainer />
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="profileDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="/images/avatar.png" className="avatar"/>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right message-section" aria-labelledby="profileDropdown">
                            <a className="dropdown-item">Profile</a>
                            <a className="dropdown-item">Change Password</a>
                            <div class="dropdown-divider"></div>
                            <a className="dropdown-item">Logout</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;