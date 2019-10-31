import React from 'react';

/* Styles */
import { Box, Row, Container, Col, Dropdown, DropdownItem, BoxTitle } from './../../styles';
/* Styles */

const DropdownsPage = () => {
    return(
        <div>
            <div className="title">
                Dropdowns
                <div className="sub-title">
                    <i className="fa fa-info-circle"></i> toggle button for displaying list of links and etc..
                </div>
            </div>

            <div className="body">
                <Container>
                    <Row>
                        <Box sm={12} md={12} lg={12}>
                            <Container>
                                <Row>
                                    <Col md={3}>
                                        <BoxTitle label="Small & Bottom Position"/>
                                        <Dropdown icon="fa fa-user" size="small" label="Dropdown" position="bottom">
                                            <DropdownItem>Link 1</DropdownItem>
                                            <DropdownItem>Link 2</DropdownItem>
                                            <DropdownItem disabled={true}>Link 2</DropdownItem>
                                            <div class="dropdown-divider"></div>
                                            <DropdownItem>Link 3</DropdownItem>
                                        </Dropdown>
                                    </Col>
                                    <Col md={3}>
                                        <BoxTitle label="Medium & Left Position"/>
                                        <Dropdown color="danger" icon="fa fa-user" size="medium" label="Dropdown" position="left">
                                            <DropdownItem>Link 1</DropdownItem>
                                            <DropdownItem>Link 2</DropdownItem>
                                            <DropdownItem disabled={true}>Link 2</DropdownItem>
                                            <div class="dropdown-divider"></div>
                                            <DropdownItem>Link 3</DropdownItem>
                                        </Dropdown>
                                    </Col>
                                    <Col md={3}>
                                        <BoxTitle label="Large & Top Position"/>
                                        <Dropdown color="success" icon="fa fa-user" size="large" label="Dropdown" position="top">
                                            <DropdownItem>Link 1</DropdownItem>
                                            <DropdownItem>Link 2</DropdownItem>
                                            <DropdownItem disabled={true}>Link 2</DropdownItem>
                                            <div class="dropdown-divider"></div>
                                            <DropdownItem>Link 3</DropdownItem>
                                        </Dropdown>
                                    </Col>
                                    <Col md={3}>
                                        <BoxTitle label="Medium & Right Position"/>
                                        <Dropdown color="#000" icon="fa fa-user" size="medium" label="Dropdown" position="right">
                                            <DropdownItem>Link 1</DropdownItem>
                                            <DropdownItem>Link 2</DropdownItem>
                                            <DropdownItem disabled={true}>Link 2</DropdownItem>
                                            <div class="dropdown-divider"></div>
                                            <DropdownItem>Link 3</DropdownItem>
                                        </Dropdown>
                                    </Col>
                                </Row>
                            </Container>
                        </Box>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default DropdownsPage;