//default react
import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const Box = (props) => {
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

    //get transparent
    const isTransparent = typeof props.isTransparent !== 'undefined' ? (props.isTransparent ? ' transparent' : '') : '';

    return(
        <div className={'custom-col col-box'+ xs + xsOffset + sm + smOffset + md + mdOffset + lg + lgOffset + " "+customClassName}>
            <div className={"box" + isTransparent}>
                { props.children }
            </div>
        </div>
    );
}

//prop types initialize
Box.propTypes = {
    className: PropTypes.string,
    xs: PropTypes.number,
    xsOffset: PropTypes.number,
    sm: PropTypes.number,
    smOffset: PropTypes.number,
    md: PropTypes.number,
    mdOffset: PropTypes.number,
    lg: PropTypes.number,
    lgOffset: PropTypes.number,
    isTransparent: PropTypes.bool,
}

export default Box;