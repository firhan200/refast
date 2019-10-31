import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const Table = (props) => {
    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';

    //get type
    const type = typeof props.type !== 'undefined' ? ' table-'+props.type : ' ';

    //get size
    const size = typeof props.size !== 'undefined' ? " "+props.size+' ' : ' medium ';

    return(
        <table className={"custom-table table table-hover" + type + size + customClassName}>
            { props.children }
        </table>
    );
}

//prop types initialize
Table.propTypes = {
    className : PropTypes.string,
    type : PropTypes.oneOf(['dark', 'striped', 'bordered']),
    size : PropTypes.oneOf(['small', 'medium', 'large']),
}

export default Table;