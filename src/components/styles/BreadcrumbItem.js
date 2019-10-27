import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const BreadcrumbItem = (props) => {
    //get button outlined
    const isActive = typeof props.isActive !== 'undefined' ? props.isActive : false;

    return(
        <li className={"breadcrumb-item"+(isActive ? ' active' : '')}>
            {props.children}
        </li>
    );
}

//prop types initialize
BreadcrumbItem.propTypes = {
    isActive : PropTypes.bool
}

export default BreadcrumbItem;