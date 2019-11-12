import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const BoxTitle = (props) => {
    //get align
    const align = typeof props.align !== 'undefined' ? props.align : 'left';

    //get icon
    const icon = typeof props.icon !== 'undefined' ? props.icon : '';

    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';

    return(
        <div style={props.style} className={align + " box-title-container " + customClassName}>
            <div className="box-title">
                { icon !== '' ? (
                    <i className={props.icon}></i>
                ) : '' }
                { props.label }
            </div>
            <div className="box-subtitle">
                { props.subLabel }
            </div>
        </div>
    );
}

//prop types initialize
BoxTitle.propTypes = {
    className : PropTypes.string,
    style : PropTypes.object,
    label: PropTypes.string,
    subLabel: PropTypes.string,
    align: PropTypes.string,
    icon: PropTypes.string
}

export default BoxTitle;