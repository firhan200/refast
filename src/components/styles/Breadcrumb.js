import React from 'react';

const Breadcrumb = (props) => {
    return(
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb custom-breadcrumb">
                {props.children}
            </ol>
        </nav>
    );
}

export default Breadcrumb;