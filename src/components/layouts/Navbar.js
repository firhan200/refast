import React from 'react';

const Navbar = () => {
    return(
        <nav className="top-navbar navbar navbar-expand navbar-light bg-light">
            <a className="navbar-brand" href="#">Refast</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbar">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown notification">
                        <a className="nav-link dropdown-toggle" href="#" id="notificationDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-bell"></i>
                            <span className="total-notification">5</span>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="notificationDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown notification">
                        <a className="nav-link dropdown-toggle" href="#" id="messageDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-envelope"></i>
                            <span className="total-notification">13</span>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="messageDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                        </div>
                    </li>
                </ul>
                <form className="form-inline">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                </form>
            </div>
        </nav>
    );
}

export default Navbar;