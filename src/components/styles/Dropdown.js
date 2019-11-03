import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const Dropdown = (props) => {
    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';

    //get position
    const inputPosition = typeof props.position !== 'undefined' ? props.position : '';
    let position;
    switch(inputPosition){
        case 'top':
            position = 'dropup'
            break;
        case 'left':
            position = 'dropleft'
            break;
        case 'right':
            position = 'dropright'
            break;
        default:
            position = ' '
            break;
    }
    position = position !== ' ' ? 'btn-group '+position+' ' : '';

    //get button color
    const inputButtonType = typeof props.color !== 'undefined' ? props.color : ' btn-primary';
    let useAnotherColor = false;
    let anotherColor = '';
    let buttonType;
    switch(inputButtonType){
        case 'success':
            buttonType = 'btn-success'
            break;
        case 'danger':
            buttonType = 'btn-danger'
            break;
        case 'warning':
            buttonType = 'btn-warning'
            break;
        case 'primary':
            buttonType = 'btn-primary'
            break;
        case 'info':
            buttonType = 'btn-info'
            break;
        default:
            buttonType = 'btn-primary';
            useAnotherColor = true;
            anotherColor = props.color;
            break;
    }

    //get button size
    const inputButtonSize = typeof props.size !== 'undefined' ? props.size : 'medium';
    let buttonSize;
    switch(inputButtonSize){
        case 'small':
            buttonSize = 'btn-sm'
            break;
        case 'medium':
            buttonSize = 'btn-md'
            break;
        case 'large':
            buttonSize = 'btn-lg'
            break;
        default:
            buttonSize = 'btn-md'
            break;
    }
    //add space between class
    buttonSize = ' ' + buttonSize;

    //get button icon
    const buttonIcon = typeof props.icon !== 'undefined' ? props.icon : '';

    //get button enable
    const disabled = typeof props.disabled !== 'undefined' ? (props.disabled ? ' disabled ' : ' ') : ' ';

    let customStyle = {};
    if(useAnotherColor){
        customStyle = {
            backgroundColor: anotherColor
        }
    }

    return(
        <div className={"custom-dropdown dropdown"+ position + ' ' + inputButtonSize + ' ' + customClassName}>
            <button style={customStyle} className={"custom-button btn dropdown-toggle" + disabled + buttonType + buttonSize} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {/* show button icon */}
                {buttonIcon !== '' ? (
                    <i className={'label-icon ' + buttonIcon}></i>
                ) : ''}

                {/* show button label */}
                { props.label }
            </button>
            <div className="dropdown-menu">
                { props.children }
            </div>
        </div>
    );
}

//prop types initialize
Dropdown.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
    icon: PropTypes.string,
    disabled: PropTypes.bool,
    position: PropTypes.oneOf(["top", "bottom", "left", "right"]),
}

export default Dropdown;