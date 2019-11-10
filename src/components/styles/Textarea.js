import React, { useState, useEffect } from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const Textarea = (props) => {
    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';
    
    //get name
    const inputName = typeof props.name !== 'undefined' ? props.name : '';

    //get id
    const inputId = typeof props.id !== 'undefined' ? props.id : '';

    //get maxLength
    const maxLength = typeof props.maxLength !== 'undefined' ? props.maxLength : 9999;
    const [currentLength, setCurrentLength] = useState(0);
    useEffect(() => {
        setCurrentLength(() => {
            //check if value already set
            return typeof props.value !== 'undefined' ? props.value.length : 0
        });
    }, [props.value]);

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

    //get icon
    let icon = typeof props.icon !== 'undefined' ? props.icon : '';

    //custom attr
    let attrs = {};
    if(pattern !== ''){
        attrs['pattern'] = pattern;
    }
    if(inputId !== ''){
        attrs['id'] = inputId;
    }
    attrs['required'] = isRequired;

    return(
        <div className={"custom-form-control textarea " + (icon!=='' ? ' iconed' : '')}>
            { message !== '' ? (
                <div className={"message " + isValid}>
                    { message }
                </div>
            ) : '' }

            {/* check icon */}
            { icon !== '' ? (
                <i className={"input-icon " + icon}></i>
            ) : '' }

            <textarea 
                style={props.style}
                className={'form-control ' + isValid + customClassName}
                type="textarea"
                name={inputName}
                maxLength={maxLength}
                { ...attrs }
                placeholder={props.placeholder}
                autoComplete={(autoComplete ? "on" : "off")}
                onChange={props.handleChange}
                onKeyPress={(e) => {
                    // custom handle change
                    if(maxLength!==9999){
                        setCurrentLength(e.target.value.length);
                    }
                }}
                value={props.value}
                >
            </textarea>

            { maxLength !== 9999 ? (
                <div className="right-help">
                    { currentLength } / { maxLength }
                </div>
            ) : '' }
        </div>
    );
}

//prop types initialize
Textarea.propTypes = {
    style : PropTypes.object,
    className : PropTypes.string,
    value: PropTypes.any,
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

export default Textarea;