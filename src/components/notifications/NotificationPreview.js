import React from 'react';

const NotificationPreview = ({ notification }) => {
    return(
        <a className="dropdown-item">
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
        </a>
    );
}

export default NotificationPreview;