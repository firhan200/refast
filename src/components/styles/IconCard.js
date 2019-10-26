import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const IconCard = (props) => {
    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';

    //get label
    const label = typeof props.label !== 'undefined' ? props.label : '';

    //get icon
    const icon = typeof props.icon !== 'undefined' ? props.icon : '';

    //get number
    const number = typeof props.number !== 'undefined' ? props.number : '';

    return(
        <div className={'custom-icon-card '+customClassName}>
            { label }
        </div>
    );
}

//prop types initialize
IconCard.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string,
    number: PropTypes.number,
}

export default IconCard;