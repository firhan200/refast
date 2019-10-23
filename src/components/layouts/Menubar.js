import React from 'react';

const Menubar = () => {
    return(
        <nav className="menu-navbar navbar navbar-expand-lg navbar-light bg-light">
            <div id="menubar">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li> 
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li> 
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li> 
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li> 
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>             
                </ul>
            </div>
        </nav>
    );
}

export default Menubar;