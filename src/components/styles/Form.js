import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const Form = (props) => {
    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';

    return(
        <form onSubmit={props.handleSubmit} className={customClassName}>
            { props.children }
        </form>
    );
}

//prop types initialize
Form.propTypes = {
    className : PropTypes.string,
    handleSubmit : PropTypes.func,
}

export default Form;