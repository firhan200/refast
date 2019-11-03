import React from 'react';

const Breadcrumb = (props) => {
    return(
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb custom-breadcrumb">
                {props.children}
            </ol>
        </nav>
    );
}

export default Breadcrumb;