import React, { useState, Fragment } from 'react';
import DocsExample from './../DocsExample';
import { 
    Form,
    FormGroup,
    Input,
    Textarea,
    Select,
    Checkbox,
} from '../../../styles';

const FormsInputs = () => {
    // error validation
    const [firstNameValidation, setFirstNameValidation] = useState({
        text : '',
        isValid : false,
        message : '*please fill this field'
    });
    const [passwordValidation, setPasswordValidation] = useState({
        text : '',
        isValid : false,
        message : '*please fill this field'
    });
    const [selectValidation, setSelectValidation] = useState({
        text : '',
        isValid : false,
        message : '*please select fruit'
    });
    const [addressValidation, setAddressValidation] = useState({
        text : '',
        isValid : false,
        message : '*address cannot be empty.'
    });

    //checkbox hooks
    const [squareCb, setSquareCb] = useState(false);
    const [circularCb, setCircularCb] = useState(false);
    const [squareCbChecked, setSquareCbChecked] = useState(true);
    const [circularCbChecked, setCircularCbChecked] = useState(true);

    return (
        <Fragment>
            <DocsExample 
                title="Form Inputs"
                example={(
                    <Form>
                        <div className="help">
                            Text Input
                        </div>
                        <FormGroup>
                            <Input type="text" placeholder="First Name"/>
                        </FormGroup>
                        <div className="help">
                            Password Input
                        </div>
                        <FormGroup>
                            <Input type="password" placeholder="Password"/>
                        </FormGroup>
                        <div className="help">
                            Select Options
                        </div>
                        <FormGroup>
                            <Select>
                                <option>Apple</option>
                                <option>Manggo</option>
                                <option>Orange</option>
                                <option>Lemon</option>
                            </Select>
                        </FormGroup>
                        <div className="help">
                            Password Input
                        </div>
                        <FormGroup>
                            <Textarea placeholder="Address"/>
                        </FormGroup>
                        <div className="help">
                            Checkbox
                        </div>
                        <FormGroup>
                            <Checkbox 
                                label="Active" 
                                isChecked={squareCb} 
                                handleChange={(e) => setSquareCb(e.target.checked)} 
                                className="m-r-20"/>
                            <Checkbox 
                                label="Deleted" 
                                isChecked={circularCb} 
                                handleChange={(e) => setCircularCb(e.target.checked)} 
                                isCircular={true} 
                                className="m-r-20"/>
                            <Checkbox 
                                label="On" 
                                isChecked={squareCbChecked} 
                                handleChange={(e) => setSquareCbChecked(e.target.checked)} 
                                className="m-r-20"/>
                            <Checkbox 
                                label="Connect" 
                                isChecked={circularCbChecked} 
                                handleChange={(e) => setCircularCbChecked(e.target.checked)} 
                                isCircular={true} 
                                className="m-r-20"/>
                        </FormGroup>
                    </Form>
                )}
                code={(
`import React, { useState } from 'react';
import { Form, FormGroup, Input, Checkbox, Textarea, Select } from './styles';

const Forms = () => {
    //checkbox hooks
    const [squareCb, setSquareCb] = useState(false);
    const [circularCb, setCircularCb] = useState(false);
    const [squareCbChecked, setSquareCbChecked] = useState(true);
    const [circularCbChecked, setCircularCbChecked] = useState(true);

    return(
        <Form>
            <div className="help">
            Text Input
        </div>
        <FormGroup>
            <Input type="text" placeholder="First Name"/>
        </FormGroup>
        <div className="help">
            Password Input
        </div>
        <FormGroup>
            <Input type="password" placeholder="Password"/>
        </FormGroup>
        <div className="help">
            Select Options
        </div>
        <FormGroup>
            <Select>
                <option>Apple</option>
                <option>Manggo</option>
                <option>Orange</option>
                <option>Lemon</option>
            </Select>
        </FormGroup>
        <div className="help">
            Password Input
        </div>
        <FormGroup>
            <Textarea placeholder="Address"/>
        </FormGroup>
            <div className="help">
                Checkbox
            </div>
            <FormGroup>
                <Checkbox 
                    label="Active" 
                    isChecked={squareCb} 
                    handleChange={(e) => setSquareCb(e.target.checked)} 
                    className="m-r-20"/>
                <Checkbox 
                    label="Deleted" 
                    isChecked={circularCb} 
                    handleChange={(e) => setCircularCb(e.target.checked)} 
                    isCircular={true} 
                    className="m-r-20"/>
                <Checkbox 
                    label="On" 
                    isChecked={squareCbChecked} 
                    handleChange={(e) => setSquareCbChecked(e.target.checked)} 
                    className="m-r-20"/>
                <Checkbox 
                    label="Connect" 
                    isChecked={circularCbChecked} 
                    handleChange={(e) => setCircularCbChecked(e.target.checked)} 
                    isCircular={true} 
                    className="m-r-20"/>
            </FormGroup>
        </Form>
    )
}

export default Forms;
`
                )}
                properties={(
`//prop types for Input
Input.propTypes = {
    style : PropTypes.object, //your custom style object here
    className : PropTypes.string, //your custom styling class here
    value : PropTypes.any, //value
    type : PropTypes.string, //text, password, email , etc.
    name : PropTypes.string, //name attribute
    id : PropTypes.string, //id attribute
    maxLength : PropTypes.number, //maximung length
    autoComplete : PropTypes.bool, //show auto complete
    required : PropTypes.bool, //is input required
    pattern : PropTypes.string, //html pattern validation
    placeholder : PropTypes.string,
    handleChange : PropTypes.func, //on input change callback
    handleKeyPress : PropTypes.func, //on key press callback
    handleKeyDown : PropTypes.func, //on key down callback
    isValid : PropTypes.bool, //show red border if invalid and green border if valid
    message : PropTypes.string, //message text above input
    icon : PropTypes.string, //icon beside input
}

//prop types for textarea
Textarea.propTypes = {
    style : PropTypes.object, //your custom style object here
    className : PropTypes.string, //your custom styling class here
    value: PropTypes.any, //value
    name : PropTypes.string, //name attribute
    id : PropTypes.string, //id attribute
    maxLength : PropTypes.number, //maximung length
    autoComplete : PropTypes.bool, //show auto complete
    required : PropTypes.bool, //is input required
    pattern : PropTypes.string, //html pattern validation
    placeholder : PropTypes.string,
    handleChange : PropTypes.func, //on input change callback
    isValid : PropTypes.bool, //show red border if invalid and green border if valid
    message : PropTypes.string, //message text above input
    icon : PropTypes.string, //icon beside input
}

//prop types for Select
Select.propTypes = {
    className : PropTypes.string, //your custom styling class here
    name : PropTypes.string, //name attribute
    value : PropTypes.any, //selected value
    id : PropTypes.string, //id attribute
    placeholder : PropTypes.string,
    required : PropTypes.bool, //is select required
    handleChange : PropTypes.func, //on select change callback
    isValid : PropTypes.bool, //show red border if invalid and green border if valid
    message : PropTypes.string, //message text above select
}

//prop types for Checkbox
Checkbox.propTypes = {
    className : PropTypes.string, //your custom styling class here
    handleChange: PropTypes.func, //on checkbox change callback
    label: PropTypes.string, //label on right side
    isChecked : PropTypes.bool, //is checkbox checked
    isCircular: PropTypes.bool //is checkbox use circular styling
}
`
                )}
            />
           
           <DocsExample 
                title="Length Validation"
                example={(
                    <Form>
                        <FormGroup>
                            <Input type="text" maxLength={40} placeholder="First Name"/>
                        </FormGroup>
                        <FormGroup>
                            <Input type="password" maxLength={20} placeholder="Password"/>
                        </FormGroup>
                        <FormGroup>
                            <Textarea maxLength={100} name="Address" placeholder="Address"/>
                        </FormGroup>
                    </Form>
                )}
                code={(
`import React from 'react';
import { Form, FormGroup, Input, Textarea } from './styles';

const Forms = () => {
    return(
        <Form>
            <FormGroup>
                <Input type="text" maxLength={40} placeholder="First Name"/>
            </FormGroup>
            <FormGroup>
                <Input type="password" maxLength={20} placeholder="Password"/>
            </FormGroup>
            <FormGroup>
                <Textarea maxLength={100} name="Address" placeholder="Address"/>
            </FormGroup>
        </Form>
    )
}

export default Forms;
`
                )}
            />

            <DocsExample 
                title="Error Validation"
                example={(
                    <Form>
                        <FormGroup>
                            <Input 
                                type="text" 
                                value={firstNameValidation.text}
                                isValid={firstNameValidation.isValid} 
                                message={firstNameValidation.message} 
                                placeholder="First Name"
                                handleChange={(e) => {
                                    setFirstNameValidation(
                                        {
                                            text : e.target.value,
                                            isValid : (e.target.value.length > 0 ? true : false),
                                            message : (e.target.value.length > 0 ? 'ok!' : '*please fill this field'),
                                        }
                                    )
                                }}/>
                        </FormGroup>
                        <FormGroup>
                            <Input 
                                type="password" 
                                value={passwordValidation.text}
                                isValid={passwordValidation.isValid} 
                                message={passwordValidation.message} 
                                maxLength={20} 
                                placeholder="Password"
                                handleChange={(e) => {
                                    setPasswordValidation(
                                        {
                                            text : e.target.value,
                                            isValid : (e.target.value.length > 0 ? true : false),
                                            message : (e.target.value.length > 0 ? 'ok!' : '*please fill this field'),
                                        }
                                    )
                                }}/>
                        </FormGroup>
                        <FormGroup>
                            <Select 
                                name="fruits" 
                                id="fruits_validation" 
                                value={selectValidation.text}
                                isValid={selectValidation.isValid} 
                                message={selectValidation.message} 
                                placeholder="Select Fruit"
                                handleChange={(e) => {
                                    setSelectValidation(
                                        {
                                            text : e.target.value,
                                            isValid : (e.target.value.length > 0 ? true : false),
                                            message : (e.target.value.length > 0 ? 'ok!' : '*please fill this field'),
                                        }
                                    )
                                }}>
                                <option>Apple</option>
                                <option>Manggo</option>
                                <option>Orange</option>
                                <option>Lemon</option>
                            </Select>
                        </FormGroup>
                        <FormGroup>
                            <Textarea 
                                maxLength={100} 
                                value={addressValidation.text}
                                isValid={addressValidation.isValid} 
                                message={addressValidation.message} 
                                placeholder="Address"
                                handleChange={(e) => {
                                    setAddressValidation(
                                        {
                                            text : e.target.value,
                                            isValid : (e.target.value.length > 0 ? true : false),
                                            message : (e.target.value.length > 0 ? 'ok!' : '*please fill this field'),
                                        }
                                    )
                                }}/>
                        </FormGroup>
                    </Form>
                )}
                code={(
`import React, { useState } from 'react';
import { Form, FormGroup, Input, Textarea, Select } from './styles';

const Forms = () => {
    // error validation
    const [firstNameValidation, setFirstNameValidation] = useState({
        text : '',
        isValid : false,
        message : '*please fill this field'
    });
    const [passwordValidation, setPasswordValidation] = useState({
        text : '',
        isValid : false,
        message : '*please fill this field'
    });
    const [selectValidation, setSelectValidation] = useState({
        text : '',
        isValid : false,
        message : '*please select fruit'
    });
    const [addressValidation, setAddressValidation] = useState({
        text : '',
        isValid : false,
        message : '*address cannot be empty.'
    });

    return(
        <Form>
            <FormGroup>
                <Input 
                    type="text" 
                    value={firstNameValidation.text}
                    isValid={firstNameValidation.isValid} 
                    message={firstNameValidation.message} 
                    placeholder="First Name"
                    handleChange={(e) => {
                        setFirstNameValidation(
                            {
                                text : e.target.value,
                                isValid : (e.target.value.length > 0 ? true : false),
                                message : (e.target.value.length > 0 ? 'ok!' : '*please fill this field'),
                            }
                        )
                    }}/>
            </FormGroup>
            <FormGroup>
                <Input 
                    type="password" 
                    value={passwordValidation.text}
                    isValid={passwordValidation.isValid} 
                    message={passwordValidation.message} 
                    maxLength={20} 
                    placeholder="Password"
                    handleChange={(e) => {
                        setPasswordValidation(
                            {
                                text : e.target.value,
                                isValid : (e.target.value.length > 0 ? true : false),
                                message : (e.target.value.length > 0 ? 'ok!' : '*please fill this field'),
                            }
                        )
                    }}/>
            </FormGroup>
            <FormGroup>
                <Select 
                    name="fruits" 
                    id="fruits_validation" 
                    value={selectValidation.text}
                    isValid={selectValidation.isValid} 
                    message={selectValidation.message} 
                    placeholder="Select Fruit"
                    handleChange={(e) => {
                        setSelectValidation(
                            {
                                text : e.target.value,
                                isValid : (e.target.value.length > 0 ? true : false),
                                message : (e.target.value.length > 0 ? 'ok!' : '*please fill this field'),
                            }
                        )
                    }}>
                    <option>Apple</option>
                    <option>Manggo</option>
                    <option>Orange</option>
                    <option>Lemon</option>
                </Select>
            </FormGroup>
            <FormGroup>
                <Textarea 
                    maxLength={100} 
                    value={addressValidation.text}
                    isValid={addressValidation.isValid} 
                    message={addressValidation.message} 
                    placeholder="Address"
                    handleChange={(e) => {
                        setAddressValidation(
                            {
                                text : e.target.value,
                                isValid : (e.target.value.length > 0 ? true : false),
                                message : (e.target.value.length > 0 ? 'ok!' : '*please fill this field'),
                            }
                        )
                    }}/>
            </FormGroup>
        </Form>
    )
}

export default Forms;
`
                )}
            />

            <DocsExample 
                title="Iconed Input"
                example={(
                    <Form>
                        <FormGroup>
                            <Input icon="fa fa-search" type="text" placeholder="Search"/>
                        </FormGroup>
                        <FormGroup>
                            <Textarea icon="fa fa-pencil" placeholder="Address"/>
                        </FormGroup>
                    </Form>
                )}
                code={(
`import React from 'react';
import { Form, FormGroup, Input, Textarea } from './styles';

const Forms = () => {
    return(
        <Form>
            <FormGroup>
                <Input icon="fa fa-search" type="text" placeholder="Search"/>
            </FormGroup>
            <FormGroup>
                <Textarea icon="fa fa-pencil" placeholder="Address"/>
            </FormGroup>
        </Form>
    )
}

export default Forms;
`
                )}
            />
        </Fragment>
    )
}

export default FormsInputs;