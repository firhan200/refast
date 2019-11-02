//default react
import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const Col = (props) => {
    //default bootstrap col grid size
    const xs = typeof props.xs !== 'undefined' ? ' col-'+props.xs : '';
    const xsOffset = typeof props.xsOffset !== 'undefined' ? ' offset-'+props.xsOffset : '';

    const sm = typeof props.sm !== 'undefined' ? ' col-sm-'+props.sm : '';
    const smOffset = typeof props.smOffset !== 'undefined' ? ' offset-sm-'+props.smOffset : '';

    const md = typeof props.md !== 'undefined' ? ' col-md-'+props.md : '';
    const mdOffset = typeof props.mdOffset !== 'undefined' ? ' offset-md-'+props.mdOffset : '';

    const lg = typeof props.lg !== 'undefined' ? ' col-lg-'+props.lg : '';
    const lgOffset = typeof props.lgOffset !== 'undefined' ? ' offset-lg-'+props.lgOffset : '';

    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';

    return(
        <div className={'custom-col'+xs + xsOffset + sm + smOffset + md + mdOffset + lg + lgOffset + " "+customClassName}>
            { props.children }
        </div>
    );
}

//prop types initialize
Col.propTypes = {
    className: PropTypes.string,
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number
}

export default Col;