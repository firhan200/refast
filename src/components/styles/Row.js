import React from 'react';

const Row = (props) => {
    return(
        <div className="row custom-row">
            { props.children }
        </div>
    );
}

export default Row;