import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const UserCard = (props) => {
    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';

    return(
        <div className={customClassName}>
        </div>
    );
}

//prop types initialize
UserCard.propTypes = {
    className: PropTypes.string
}

export default UserCard;