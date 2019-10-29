import React, { useState } from 'react';

/* Styles */
import { Box, Row, Container, BoxTitle, Form, FormGroup, Input, Select, Button, Textarea, Checkbox } from './../../styles';
/* Styles */

const FormsPage = () => {

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

    const [squareCb, setSquareCb] = useState(false);
    const [circularCb, setCircularCb] = useState(false);
    const [squareCbChecked, setSquareCbChecked] = useState(true);
    const [circularCbChecked, setCircularCbChecked] = useState(true);

    return(
        <div>
            <div className="title">
                Forms
                <div className="sub-title">
                    <i className="fa fa-info-circle"></i> input, textarea, select, multiple select, etc.
                </div>
            </div>

            <div className="body">
                <Container>
                    <Row>
                        <Box sm={12} md={6} lg={6}>
                            <BoxTitle label="Form Controls"/>
                            <Form>
                                <div className="help">
                                    Text Input
                                </div>
                                <FormGroup>
                                    <Input type="text" name="first_name" id="first_name" placeholder="First Name"/>
                                </FormGroup>
                                <div className="help">
                                    Password Input
                                </div>
                                <FormGroup>
                                    <Input type="password" name="password" id="password" placeholder="Password"/>
                                </FormGroup>
                                <div className="help">
                                    Select Options
                                </div>
                                <FormGroup>
                                    <Select name="fruits" id="fruits">
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
                                    <Textarea name="Address" id="address" placeholder="Address"/>
                                </FormGroup>
                                <div className="help">
                                    Checkbox
                                </div>
                                <FormGroup>
                                    <Checkbox label="Active" isChecked={squareCb} handleChange={(e) => setSquareCb(e.target.checked)} className="m-r-20"/>
                                    <Checkbox label="Deleted" isChecked={circularCb} handleChange={(e) => setCircularCb(e.target.checked)} isCircular={true} className="m-r-20"/>
                                    <Checkbox label="On" isChecked={squareCbChecked} handleChange={(e) => setSquareCbChecked(e.target.checked)} className="m-r-20"/>
                                    <Checkbox label="Connect" isChecked={circularCbChecked} handleChange={(e) => setCircularCbChecked(e.target.checked)} isCircular={true} className="m-r-20"/>
                                </FormGroup>
                            </Form>
                        </Box>
                        <Box sm={12} md={6} lg={6}>
                            <BoxTitle label="Length Validation"/>
                            <Form>
                                <FormGroup>
                                    <Input type="text" maxLength={40} name="first_name" id="first_name_length" placeholder="First Name"/>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="password" maxLength={20} name="password" id="password_length" placeholder="Password"/>
                                </FormGroup>
                                <FormGroup>
                                    <Textarea  maxLength={100} name="Address" id="address" placeholder="Address"/>
                                </FormGroup>
                            </Form>
                            <BoxTitle label="Error Validation"/>
                            <Form>
                                <FormGroup>
                                    <Input 
                                        type="text" 
                                        value={firstNameValidation.text}
                                        isValid={firstNameValidation.isValid} 
                                        message={firstNameValidation.message} 
                                        name="first_name" 
                                        id="first_name_valid" 
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
                                        name="password" 
                                        id="password_length_validation" 
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
                                        name="Address" 
                                        id="address" 
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
                        </Box>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default FormsPage;