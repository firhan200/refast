import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const BoxTitle = (props) => {
    //get align
    const align = typeof props.align !== 'undefined' ? props.align : 'left';

    return(
        <div className={align + " box-title-container"}>
            <div className="box-title">
                <i className={props.icon}></i> { props.label }
            </div>
            <div className="box-subtitle">
                { props.subLabel }
            </div>
        </div>
    );
}

//prop types initialize
BoxTitle.propTypes = {
    label: PropTypes.string,
    subLabel: PropTypes.string,
    align: PropTypes.string,
    icon: PropTypes.string
}

export default BoxTitle;