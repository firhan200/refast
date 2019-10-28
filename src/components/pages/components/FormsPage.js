import React from 'react';

/* Styles */
import { Box, Row, Container, BoxTitle, Form, FormGroup, Input, Select } from './../../styles';
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
                                    <Select name="fruits" id="fruits" placeholder="Fruits">
                                        <option>Apple</option>
                                        <option>Manggo</option>
                                        <option>Orange</option>
                                        <option>Lemon</option>
                                    </Select>
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