import React from 'react';

const Container = (props) => {
    return(
        <div className="container custom-container">
            { props.children }
        </div>
    );
}

export default Container;