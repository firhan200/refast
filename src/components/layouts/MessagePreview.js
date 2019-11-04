import React from 'react';

const MessagePreview = ({ message }) => {
    return(
        <div className="media notification-item">
                <img src={message.image} className="mr-3" alt="..." />
            
            <div className="media-body">
                <div className="title">
                    { message.title }
                </div>
                <div className="description">
                    { message.description }
                </div>
                <div className="time">
                    { message.time }
                </div>
            </div>
        </div>
    );
}

export default MessagePreview;