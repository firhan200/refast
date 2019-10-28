import React from 'react';

/* Styles */
import { Box, Row, Container, BoxTitle, Form, FormGroup, Input, Select, Button } from './../../styles';
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
                            </Form>
                        </Box>
                        <Box sm={12} md={6} lg={6}>
                            <BoxTitle label="Length Validation"/>
                            <Form>
                                <FormGroup>
                                    <Input type="text" handleChange={(e) => {
                                        console.log(e.target.value);
                                    }} maxLength={40} name="first_name" id="first_name" placeholder="First Name"/>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="password" maxLength={20} name="password" id="password" placeholder="Password"/>
                                </FormGroup>
                            </Form>
                        </Box>
                    </Row>
                    <Row>
                        <Box sm={12} md={6} lg={6}>
                            <BoxTitle label="Required Validation"/>
                            <Form handleSubmit={(e) => { e.preventDefault(); alert('submitted'); }}>
                                <FormGroup>
                                    <Input type="email" required={true} name="email" id="email" placeholder="Email Address"/>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="password" required={true} maxLength={20} name="password" id="password" placeholder="Password"/>
                                </FormGroup>
                                <FormGroup>
                                    <Select name="role" id="role" required={true} placeholder="Select Role">
                                        <option value="admin">Administrator</option>
                                        <option value="employee">Employee</option>
                                    </Select>
                                </FormGroup>
                                <Button type="submit" color="primary" label="Submit"/>
                            </Form>
                        </Box>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default FormsPage;