import React from 'react';

const Button = (props) => {
    return(
        <button className="btn">
            { props.label }
        </button>
    );
}

export default Button;