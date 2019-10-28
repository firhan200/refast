import React, { useState } from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const Textarea = (props) => {
    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';
    
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

    return(
        <div className="custom-form-control textarea">
            <textarea 
                className={'form-control ' + customClassName}
                type="textarea"
                name={inputName}
                id={inputId}
                maxLength={maxLength}
                { ...{ required : isRequired } }
                { ...{ pattern : (pattern==='' ? 'false' : pattern) } }
                placeholder={props.placeholder}
                autoComplete={(autoComplete ? "on" : "off")}
                onChange={props.handleChange}
                onKeyUp={(e) => {
                    // custom handle change
                    if(maxLength!==9999){
                        setCurrentLength(e.target.value.length);
                    }
                }}
                >
                    {props.value}
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
}

export default Textarea;