import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const ProgressBar = (props) => {
    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';

    //get percentage
    const percentage = typeof props.percentage !== 'undefined' ? (props.percentage < 10 ? 10 : props.percentage) : 10;

    //get size
    const size = typeof props.size !== 'undefined' ? ' '+props.size+' ' : ' medium ';

    //get fill color
    const inputfillType = typeof props.color !== 'undefined' ? props.color : 'primary';
    let useAnotherColor = false;
    let anotherColor = '';
    let fill;
    switch(inputfillType){
        case 'success':
            fill = 'success';
            break;
        case 'danger':
            fill = 'danger';
            break;
        case 'warning':
            fill = 'warning';
            break;
        case 'primary':
            fill = 'primary'
            break;
        case 'info':
            fill = 'info'
            break;
        default:
            useAnotherColor = true;
            anotherColor = props.color;
            break;
    }
    //check if use another color or not
    fill = useAnotherColor ? '' : ' progress-bar-'+fill;
    
    /* custom style */
    let style = {
        width : (percentage + '%')
    }
    //check if use another color
    if(useAnotherColor){
        style['backgroundColor'] = anotherColor;
    }

    //get label
    const label = typeof props.label !== 'undefined' ? props.label : '';

    //get show label
    const showLabel = typeof props.showLabel !== 'undefined' ? props.showLabel : false;

    //get label position
    const labelPosition = typeof props.labelPosition !== 'undefined' ? props.labelPosition : 'left';

    return(
        <div className={"custom-progress-bar-container" + size}>
            <div className={"custom-progress-bar " + customClassName}>
                {/* progress bar fill */}
                <div className={"progress-bar-fill" + fill} style={style}/>
            </div>

            {/* progress label */}
            { showLabel ? (
                <div className={"progress-bar-value " + labelPosition}>{ label }</div>
            ) : '' }
        </div>
    );
}

//prop types initialize
ProgressBar.propTypes = {
    className : PropTypes.string,
    percentage : PropTypes.number,
    size : PropTypes.oneOf(['small', 'medium', 'large']),
    label : PropTypes.any,
    labelPosition : PropTypes.oneOf(['left', 'center', 'right']),
    showLabel : PropTypes.bool,
    color : PropTypes.string
}

export default ProgressBar;