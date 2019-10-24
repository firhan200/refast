import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const BoxTitle = (props) => {
    return(
        <div className="box-title">
            <i className={props.icon}></i> { props.label }
        </div>
    );
}

//prop types initialize
BoxTitle.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.string
}

export default BoxTitle;