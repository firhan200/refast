import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

//components
import NotificationPreview from './NotificationPreview.js';

const NotificationContainer = (props) => {
    //get is open
    const isOpen = typeof props.isOpen !== 'undefined' ? props.isOpen : false;
    let navWidthResult = isOpen ? '320px' : '0px';

    //slide left nav
    if(isOpen){
        //document.getElementById("root").style.marginLeft = "320px";
    }else{
        //document.getElementById("root").style.marginLeft = "0px";
    }

    /* Set the width of the side navigation to 0 */
    const closeNav = () => {
        props.setOpenNotification(false);
    }

    return(
        <div style={{
            width : navWidthResult
        }} id="notificationNav" className="sidenav">
            <div className="sidenav-title">
                <i className="fa fa-bell-o"></i>&nbsp;Notifications
            </div>
            <a href="#!" onClick={closeNav} className="closebtn">&times;</a>

            <NotificationPreview 
                notification={{
                    image : "/images/avatar.png",
                    title : "John doe order 3 new items.",
                    description : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.",
                    time : "20:04, 14 Dec 2019"
                }}
            />
            <NotificationPreview 
                notification={{
                    image : "/images/slider1.jpg",
                    title : "sarah cancelled order.",
                    description : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.",
                    time : "20:04, 14 Dec 2019"
                }}
            />
            <NotificationPreview 
                notification={{
                    image : "/images/asus.jpg",
                    title : "top products this week.",
                    description : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.",
                    time : "20:04, 14 Dec 2019"
                }}
            />
            <NotificationPreview 
                notification={{
                    image : "/images/iphone.jpg",
                    title : "25 comments on new articles.",
                    description : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.",
                    time : "20:04, 14 Dec 2019"
                }}
            />
            <NotificationPreview 
                notification={{
                    image : "/images/avatar.png",
                    title : "John doe order 3 new items.",
                    description : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.",
                    time : "20:04, 14 Dec 2019"
                }}
            />
            <NotificationPreview 
                notification={{
                    image : "/images/slider1.jpg",
                    title : "sarah cancelled order.",
                    description : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.",
                    time : "20:04, 14 Dec 2019"
                }}
            />
            <NotificationPreview 
                notification={{
                    image : "/images/asus.jpg",
                    title : "top products this week.",
                    description : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.",
                    time : "20:04, 14 Dec 2019"
                }}
            />
            <NotificationPreview 
                notification={{
                    image : "/images/iphone.jpg",
                    title : "25 comments on new articles.",
                    description : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.",
                    time : "20:04, 14 Dec 2019"
                }}
            />
        </div>
    );
}

//prop types initialize
NotificationContainer.propTypes = {
    isOpen : PropTypes.bool,
}

export default NotificationContainer;