import React from 'react';

/* Styles */
import { Box, Row, Container, ProgressBar, Col, BoxTitle } from './../../styles';
/* Styles */

const ProgressBarPage = () => {
    return(
        <div>
            <div className="title">
                Progress Bar
                <div className="sub-title">
                    <i className="fa fa-info-circle"></i> display progress of a process.
                </div>
            </div>

            <div className="body add-spaces">
                <Container>
                    <Row>
                        <Box md={12}>
                            <Container>
                                <Row>
                                    <Col md={4}>
                                        <BoxTitle label="Small Progress Bar"/>
                                        <ProgressBar size="small" percentage={55}/>
                                    </Col>
                                    <Col md={4}>
                                        <BoxTitle label="Default Progress Bar"/>
                                        <ProgressBar percentage={40}/>
                                    </Col>
                                    <Col md={4}>
                                        <BoxTitle label="Large Progress Bar"/>
                                        <ProgressBar size="large" percentage={70}/>
                                    </Col>
                                </Row>
                            </Container>
                        </Box>
                    </Row>
                    <Row>
                        <Box md={12}>
                            <Container>
                                <Row>
                                    <Col md={4}>
                                        <BoxTitle label="Primary Progress Bar"/>
                                        <ProgressBar percentage={55} color="primary" />
                                    </Col>
                                    <Col md={4}>
                                        <BoxTitle label="Success Progress Bar"/>
                                        <ProgressBar percentage={40} color="success"/>
                                    </Col>
                                    <Col md={4}>
                                        <BoxTitle label="Danger Progress Bar"/>
                                        <ProgressBar percentage={40} color="danger"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={4}>
                                        <BoxTitle label="Warning Progress Bar"/>
                                        <ProgressBar percentage={55} color="warning" />
                                    </Col>
                                    <Col md={4}>
                                        <BoxTitle label="Info Progress Bar"/>
                                        <ProgressBar percentage={40} color="info"/>
                                    </Col>
                                    <Col md={4}>
                                        <BoxTitle label="Custom Progress Bar (#696969)"/>
                                        <ProgressBar percentage={40} color="#696969"/>
                                    </Col>
                                </Row>
                            </Container>
                        </Box>
                    </Row>
                    <Row>
                        <Box md={12}>
                            <Container>
                                <Row>
                                    <Col md={4}>
                                        <BoxTitle label="Left Label Progress Bar"/>
                                        <ProgressBar size="small" label="55%" showLabel={true} labelPosition="left" percentage={55}/>
                                    </Col>
                                    <Col md={4}>
                                        <BoxTitle label="Center Progress Bar"/>
                                        <ProgressBar label="40GB / 100GB" percentage={40} showLabel={true} labelPosition="center"/>
                                    </Col>
                                    <Col md={4}>
                                        <BoxTitle label="Right Progress Bar"/>
                                        <ProgressBar label="14ms / 20ms" size="large" showLabel={true} labelPosition="right" percentage={70}/>
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

export default ProgressBarPage;