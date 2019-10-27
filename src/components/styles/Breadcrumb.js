import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const Breadcrumb = (props) => {
    return(
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb custom-breadcrumb">
                {props.children}
            </ol>
        </nav>
    );
}

//prop types initialize
Breadcrumb.propTypes = {
}

export default Breadcrumb;