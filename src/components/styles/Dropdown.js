import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const Dropdown = (props) => {
    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';

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
    const inputButtonSize = typeof props.size !== 'undefined' ? props.size : ' btn-sm';
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

    let customStyle = {};
    if(useAnotherColor){
        customStyle = {
            backgroundColor: anotherColor
        }
    }

    return(
        <div className={"custom-dropdown dropdown "+customClassName}>
            <button style={customStyle} className={"btn btn-secondary dropdown-toggle " + buttonType + buttonSize} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {/* show button icon */}
                <i className={buttonIcon}></i>
                {/* show button label */}
                { props.label }
            </button>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
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
    position: PropTypes.oneOf(["top", "bottom", "left", "right"]),
}

export default Dropdown;