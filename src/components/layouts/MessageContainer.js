import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

//components
import MessagePreview from './MessagePreview';

const MessageContainer = (props) => {
    //get is open
    const isOpen = typeof props.isOpen !== 'undefined' ? props.isOpen : false;
    let navWidthResult = isOpen ? '320px' : '0px';

    /* Set the width of the side navigation to 0 */
    const closeNav = () => {
        props.setOpenMessage(false);
    }

    return(
        <div style={{
            width : navWidthResult
        }} id="messageNav" className="sidenav">
            <div className="sidenav-title">
                <i className="fa fa-envelope-o"></i>&nbsp;Messages
            </div>
            <a href="#!" onClick={closeNav} className="closebtn">&times;</a>

            <MessagePreview 
                message={{
                    image : "/images/avatar.png",
                    title : "John doe.",
                    description : "Hello there, are you free this weekend?.",
                    time : "20:04, 14 Dec 2019"
                }}
            />
            <MessagePreview 
                message={{
                    image : "/images/slider1.jpg",
                    title : "John doe.",
                    description : "hey we need to deploy it right now!.",
                    time : "20:04, 14 Dec 2019"
                }}
            />
        </div>
    );
}

//prop types initialize
MessageContainer.propTypes = {
    isOpen : PropTypes.bool,
}

export default MessageContainer;