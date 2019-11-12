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
        <div {...getCollapseProps()}>
            <div style={ props.style } className={'custom-collapse ' + customClassName}>
                { props.children }
            </div>
        </div>
    );
}

//prop types initialize
Collapse.propTypes = {
    className : PropTypes.string,
    style : PropTypes.object,
    isOpen : PropTypes.bool,
}

export default Collapse;