import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const Avatar = (props) => {
    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';

    //get src
    const imageSrc = typeof props.src !== 'undefined' ? props.src : '';

    //get size
    const size = typeof props.size !== 'undefined' ? ' '+props.size+' ' : ' medium ';

    return(
        <div style={props.style} className={"avatar" + size + customClassName}>
            { imageSrc !== '' ? (
                <img alt={ props.alt } src={ imageSrc }/>
            ) : '' }
        </div>
    );
}

//prop types initialize
Avatar.propTypes = {
    style : PropTypes.object,
    className : PropTypes.string,
    alt : PropTypes.string,
    src : PropTypes.string,
    size : PropTypes.oneOf(['small', 'medium', 'large']),
}

export default Avatar;