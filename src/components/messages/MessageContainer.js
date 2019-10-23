import React from 'react';

//libs
import { Link } from 'react-router-dom';

/* components */
import MessagePreview from './MessagePreview.js';
/* components */

const NotificationContainer = () => {
    const messages = [
        {
            id: 0,
            image: '/images/avatar.png',
            text: 'Hello john, how are you today?',
            time: '10:30 12 December 2019'
        },
        {
            id: 1,
            image: '/images/avatar.png',
            text: 'do we need to deploy this after noon?',
            time: '10:07 12 December 2019'
        },
        {
            id: 2,
            image: '/images/avatar.png',
            text: 'Thanks.',
            time: '08:16 7 November 2019'
        }
    ];

    return(
        <div className="dropdown-menu dropdown-menu-right message-section" aria-labelledby="messageDropdown">
            <div className="container-title"><i className="fa fa-envelope"></i> Messages</div>
            { messages.map(message => (
                <MessagePreview key={message.id} message={message}/>
            )) }
            <center><Link to="/" className="link">show more</Link></center>
        </div>
    );
}

export default NotificationContainer;