import React from 'react';

/* Styles */
import { Box, BoxTitle, Row, Container, Button } from './../../styles';
/* Styles */

const ButtonPage = () => {
    return(
        <div>
            <div className="title">
                Buttons
                <div className="sub-title">
                    <i className="fa fa-info-circle"></i> various buttons styling.
                </div>
            </div>

            <div className="body">
                <Container>
                    <Row>
                        <Box md={4} lg={4}>
                            <div className="add-spaces">
                                <BoxTitle label="Normal button"/>
                                <Button label="Primary" color="primary"/>
                                <Button label="Success" color="success"/>
                                <Button label="Danger" color="danger"/>
                                <Button label="Warning" color="warning"/>
                                <Button label="Info" color="info"/>
                                <hr/>
                                <BoxTitle label="Small button"/>
                                <Button label="Primary" color="primary" size="small"/>
                                <Button label="Success" color="success" size="small"/>
                                <Button label="Danger" color="danger" size="small"/>
                                <Button label="Warning" color="warning" size="small"/>
                                <Button label="Info" color="info" size="small"/>
                                <hr/>
                                <BoxTitle label="Large button"/>
                                <Button label="Primary" color="primary" size="large"/>
                                <Button label="Success" color="success" size="large"/>
                                <Button label="Danger" color="danger" size="large"/>
                                <Button label="Warning" color="warning" size="large"/>
                                <Button label="Info" color="info" size="large"/>
                            </div>
                        </Box>
                        <Box md={4} lg={4}>
                            <div className="add-spaces">
                                <BoxTitle label="Rounded button"/>
                                <Button label="Primary" color="primary" isRounded={true} size="small"/>
                                <Button label="Primary" color="primary" isRounded={true} size="medium"/>
                                <Button label="Primary" color="primary" isRounded={true} size="large"/>
                                <hr/>
                                <BoxTitle label="Iconed button"/>
                                <Button label="Primary" color="primary" icon="fa fa-download" size="small"/>
                                <Button label="Danger" color="danger" icon="fa fa-exclamation" size="medium"/>
                                <Button label="Warning" color="warning" icon="fa fa-info-circle" size="large"/>
                                <hr/>
                                <BoxTitle label="Outlined button"/>
                                <Button label="Primary" icon="fa fa-download" color="primary" isOutlined={true}/>
                                <Button label="Success" isRounded={true} color="success" isOutlined={true}/>
                                <Button label="Danger" icon="fa fa-exclamation" color="danger" isRounded={true} isOutlined={true}/>
                            </div>
                        </Box>
                        <Box md={4} lg={4}>
                            <div className="add-spaces">
                                <BoxTitle label="Only Icon button"/>
                                <Button icon="fa fa-download" color="primary" isOutlined={true} size="small"/>
                                <Button icon="fa fa-print" color="success" isRounded={true} size="medium"/>
                                <Button icon="fa fa-github" color="info" size="large"/>
                                <BoxTitle label="Full Width button"/>
                                <Button label="Primary" color="primary" isOutlined={true} isFull={true} size="medium"/>
                                <Button label="Export" icon="fa fa-print" color="success" isFull={true} size="medium"/>
                            </div>
                        </Box>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default ButtonPage;