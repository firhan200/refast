import React, { useState } from 'react';

//libs
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

/* redux */
import { logout } from './../../redux/actions/authAction';

/* components */
import NotificationContainer from './NotificationContainer.js'
import MessageContainer from './MessageContainer.js'
/* components */

const Navbar = (props) => {
    /* trigger logout */
    const logoutProcess = () => {
        props.logout(() => {
            //put your callback actions here
        });
    }

    //notification hooks
    const [openNotification, setOpenNotification] = useState(false);
    //message hooks
    const [openMessage, setOpenMessage] = useState(false);

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
                    <li  className="nav-item notification">
                        <span onClick={() => 
                            { 
                                //open notification & close message
                                if(openMessage){
                                    setOpenMessage(false);
                                }
                                setOpenNotification(!openNotification);
                            } 
                            } className="nav-link click-available" role="button" aria-expanded="false">
                            <i className="fa fa-bell-o"></i>
                            <span className="total-notification">8</span>
                        </span>
                        <NotificationContainer setOpenNotification={setOpenNotification} isOpen={openNotification}/>
                    </li>
                    <li className="nav-item notification">
                        <span onClick={() => 
                            { 
                                //close notification & open message
                                if(openNotification){
                                    setOpenNotification(false);
                                }
                                setOpenMessage(!openMessage);
                            }  } className="nav-link click-available" role="button" aria-expanded="false">
                            <i className="fa fa-envelope-o"></i>
                            <span className="total-notification">2</span>
                        </span>
                        <MessageContainer setOpenMessage={setOpenMessage} isOpen={openMessage}/>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#!" id="profileDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="/images/avatar.png" alt="avatar" className="avatar rounded"/>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right message-section" aria-labelledby="profileDropdown">
                            <Link className="dropdown-item" to="/profile">Profile</Link>
                            <Link className="dropdown-item" to="/change-password">Change Password</Link>
                            <div className="dropdown-divider"></div>
                            <span onClick={logoutProcess} className="dropdown-item click-available">Logout</span>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

/* map redux states to be accessed by global props */
const mapStateToProps = state => ({
});

/* connect use react redux */
export default connect(mapStateToProps, {
    /* redux actions to be accessed by global props */
    logout
})(Navbar);