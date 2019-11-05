import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const Badge = (props) => {
    //get badge type
    const badgeType = typeof props.type !== 'undefined' ? props.type : '';

    //get badge message
    const badgeMessage = typeof props.message !== 'undefined' ? props.message : '';

    //get badge icon
    const badgeIcon = typeof props.icon !== 'undefined' ? props.icon : '';

    //get badge image
    const badgeImage = typeof props.image !== 'undefined' ? props.image : '';

    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';

    //get size
    const size = typeof props.size !== 'undefined' ? ' '+props.size+' ' : ' medium ';

    return(
        <div className={"custom-badge badge badge-pill badge-"+badgeType+" "+size+customClassName}>
            {/* Badge Image */}
            { badgeImage !== '' ? (
                <div className="image">
                    <img src={badgeImage} alt={""}/>
                </div>
            ) : '' }

            {/* Badge Icon */}
            { badgeIcon !== '' ? (
                <i className={'icon '+badgeIcon}></i>
            ) : '' }

            {/* Badge Label */}
            <span className="badge-message">
                { badgeMessage }
            </span>
        </div>
    );
}

//prop types initialize
Badge.propTypes = {
    className: PropTypes.string,
    message: PropTypes.any,
    type: PropTypes.string,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    icon: PropTypes.string
}

export default Badge;