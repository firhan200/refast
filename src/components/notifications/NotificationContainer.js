import React from 'react';

//libs
import { Link } from 'react-router-dom';

/* components */
import NotificationPreview from './NotificationPreview.js';
/* components */

const NotificationContainer = () => {
    const notifications = [
        {
            id: 0,
            image: '/images/avatar.png',
            title: 'new order from John Doe',
            time: '10:30 12 December 2019'
        },
        {
            id: 1,
            image: '/images/avatar.png',
            title: 'order has been canceled by Thomas',
            time: '10:07 12 December 2019'
        },
        {
            id: 2,
            image: '/images/avatar.png',
            title: 'your password has been reset',
            time: '08:16 7 November 2019'
        }
    ];

    return(
        <div className="dropdown-menu dropdown-menu-right notification-section" aria-labelledby="notificationDropdown">
            <div className="container-title"><i className="fa fa-bell"></i> Notifications</div>
            { notifications.map(notification => (
                <NotificationPreview key={notification.id} notification={notification}/>
            )) }
            <center><Link to="/" className="link">show more</Link></center>
        </div>
    );
}

export default NotificationContainer;