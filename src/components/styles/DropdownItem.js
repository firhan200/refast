import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const DropdownItem = (props) => {
    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';

    //get button enable
    const disabled = typeof props.disabled !== 'undefined' ? props.disabled : false;

    return(
            <button 
                onClick={props.handleClick} 
                { ...{ disabled : disabled} } 
                className={"dropdown-item "+customClassName}>

                { props.children }

            </button>
    );
}

//prop types initialize
DropdownItem.propTypes = {
    className: PropTypes.string,
    handleClick: PropTypes.func,
    disabled: PropTypes.bool,
}

export default DropdownItem;