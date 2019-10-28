import React from 'react';

/* Styles */
import { Box, Row, Container, BoxTitle, Form, FormGroup, Input, Select, Button, Textarea } from './../../styles';
/* Styles */

const FormsPage = () => {
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
                            <BoxTitle label="form controls"/>
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
                                    <Input type="text" isValid={false} message="*please fill this field" name="first_name" id="first_name_valid" placeholder="First Name"/>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="password" value="password" isValid={true} message="password ok!" maxLength={20} name="password" id="password_length" placeholder="Password"/>
                                </FormGroup>
                                <FormGroup>
                                    <Textarea  maxLength={100} name="Address" id="address" placeholder="Address"/>
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