import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const BoxTitle = (props) => {
    //get align
    const align = typeof props.align !== 'undefined' ? props.align : 'left';

    //get icon
    const icon = typeof props.icon !== 'undefined' ? props.icon : '';

    return(
        <div style={props.style} className={align + " box-title-container"}>
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
    style : PropTypes.object,
    label: PropTypes.string,
    subLabel: PropTypes.string,
    align: PropTypes.string,
    icon: PropTypes.string
}

export default BoxTitle;