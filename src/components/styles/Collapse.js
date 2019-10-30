import React from 'react';
import useCollapse from 'react-collapsed';

//libs
import PropTypes from 'prop-types'; // prop types

const Collapse = (props) => {
    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';

    //get is open
    const isOpen = typeof props.isOpen !== 'undefined' ? props.isOpen : false;

    //collapse
    const {getCollapseProps} = useCollapse({ isOpen });

    return(
        <div {...getCollapseProps()} className={'custom-collapse ' + customClassName}>
            { props.children }
        </div>
    );
}

//prop types initialize
Collapse.propTypes = {
    className : PropTypes.string,
    isOpen : PropTypes.bool,
}

export default Collapse;