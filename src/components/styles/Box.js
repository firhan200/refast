import React from 'react';

const Box = (props) => {
    return(
        <div className="box">
            { props.children }
        </div>
    );
}

export default Box;