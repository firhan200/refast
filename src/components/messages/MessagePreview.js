import React from 'react';

//libs
import { Link } from 'react-router-dom';

const NotificationPreview = ({ message }) => {
    return(
        <Link className="dropdown-item">
            <div className="media">
                <img src={message.image} className="img-fluid rounded align-self-start" alt="..." />
                <div className="media-body">
                    <div className="title">
                        { message.text }
                    </div>
                    <div className="time">
                        { message.time }
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default NotificationPreview;