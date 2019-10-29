import React, { useState } from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const Input = (props) => {
    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';

    //get type
    let inputType = typeof props.type !== 'undefined' ? props.type : 'text';
    const [type, setType] = useState(inputType);
    
    //get name
    const inputName = typeof props.name !== 'undefined' ? props.name : '';

    //get id
    const inputId = typeof props.id !== 'undefined' ? props.id : 'text';

    //get maxLength
    const maxLength = typeof props.maxLength !== 'undefined' ? props.maxLength : 9999;
    const [currentLength, setCurrentLength] = useState(0);

    //get pattern
    let pattern = typeof props.pattern !== 'undefined' ? props.pattern : '';

    //get auto complete
    const autoComplete = typeof props.autoComplete !== 'undefined' ? props.autoComplete : false;

    //get required
    const isRequired = typeof props.required !== 'undefined' ? props.required : false;

    //get is valid
    const isValid = typeof props.isValid !== 'undefined' ? (props.isValid ? 'valid ' : 'invalid ') : ' ';

    //get message
    let message = typeof props.message !== 'undefined' ? props.message : '';

    return(
        <div className="custom-form-control">
            { message !== '' ? (
                <div className={"message " + isValid}>
                    { message }
                </div>
            ) : '' }
            <input 
                className={'form-control ' + isValid + customClassName}
                type={type}
                name={inputName}
                id={inputId}
                value={props.value}
                maxLength={maxLength}
                { ...{ required : isRequired } }
                { ...{ pattern : (pattern==='' ? false : pattern) } }
                placeholder={props.placeholder}
                autoComplete={(autoComplete ? "on" : "off")}
                onChange={props.handleChange}
                onKeyUp={(e) => {
                    // custom handle change
                    if(maxLength!==9999){
                        setCurrentLength(e.target.value.length);
                    }
                }}
                />

            {/* password type */}
            { inputType.toLowerCase() === 'password' ? (
                <div className="icon">
                    <i className={"fa " + (type.toLowerCase()==='password' ? "fa-eye" : "fa-eye-slash") } onClick={() => {
                        inputType = type.toLowerCase()==='password' ? 'text' : 'password';
                        setType(inputType);
                    }}></i>
                </div>
            ) : '' }

            { maxLength !== 9999 ? (
                <div className="right-help">
                    { currentLength } / { maxLength }
                </div>
            ) : '' }
        </div>
    );
}

//prop types initialize
Input.propTypes = {
    className : PropTypes.string,
    value : PropTypes.any,
    type : PropTypes.string,
    name : PropTypes.string,
    id : PropTypes.string,
    maxLength : PropTypes.number,
    autoComplete : PropTypes.bool,
    required : PropTypes.bool,
    pattern : PropTypes.string,
    placeholder : PropTypes.string,
    handleChange : PropTypes.func,
    isValid : PropTypes.bool,
    message : PropTypes.string,
}

export default Input;