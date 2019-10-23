import React from 'react';

const NotificationPreview = ({ message }) => {
    return(
        <a className="dropdown-item">
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
        </a>
    );
}

export default NotificationPreview;