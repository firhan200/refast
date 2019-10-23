import React from 'react';

//libs
import { Link } from 'react-router-dom';

const NotificationPreview = ({ notification }) => {
    return(
        <Link className="dropdown-item">
            <div className="media">
                <img src={notification.image} className="img-fluid rounded align-self-start" alt="..." />
                <div className="media-body">
                    <div className="title">
                        { notification.title }
                    </div>
                    <div className="time">
                        { notification.time }
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default NotificationPreview;