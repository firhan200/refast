import React from 'react';

const NotificationPreview = ({ notification }) => {
    return(
        <div className="media notification-item">
                <img src={notification.image} className="mr-3" alt="..." />
            
            <div className="media-body">
                <div className="title">
                    { notification.title }
                </div>
                <div className="description">
                    { notification.description }
                </div>
                <div className="time">
                    { notification.time }
                </div>
            </div>
        </div>
    );
}

export default NotificationPreview;