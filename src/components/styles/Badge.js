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

    return(
        <div className={"custom-badge badge badge-pill badge-"+badgeType+""}>
            <span className="badge-message">
                { badgeMessage }
            </span>
            { badgeIcon !== '' ? (
                <i className={'icon '+badgeIcon}></i>
            ) : '' }
        </div>
    );
}

//prop types initialize
Badge.propTypes = {
    message: PropTypes.string,
    type: PropTypes.string,
    icon: PropTypes.string
}

export default Badge;