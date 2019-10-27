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
                                <Button label="Primary" type="primary"/>
                                <Button label="Success" type="success"/>
                                <Button label="Danger" type="danger"/>
                                <Button label="Warning" type="warning"/>
                                <Button label="Info" type="info"/>
                                <hr/>
                                <BoxTitle label="Small button"/>
                                <Button label="Primary" type="primary" size="small"/>
                                <Button label="Success" type="success" size="small"/>
                                <Button label="Danger" type="danger" size="small"/>
                                <Button label="Warning" type="warning" size="small"/>
                                <Button label="Info" type="info" size="small"/>
                                <hr/>
                                <BoxTitle label="Large button"/>
                                <Button label="Primary" type="primary" size="large"/>
                                <Button label="Success" type="success" size="large"/>
                                <Button label="Danger" type="danger" size="large"/>
                                <Button label="Warning" type="warning" size="large"/>
                                <Button label="Info" type="info" size="large"/>
                            </div>
                        </Box>
                        <Box md={4} lg={4}>
                            <div className="add-spaces">
                                <BoxTitle label="Rounded button"/>
                                <Button label="Primary" type="primary" isRounded={true} size="small"/>
                                <Button label="Primary" type="primary" isRounded={true} size="medium"/>
                                <Button label="Primary" type="primary" isRounded={true} size="large"/>
                                <hr/>
                                <BoxTitle label="Iconed button"/>
                                <Button label="Primary" type="primary" icon="fa fa-download" size="small"/>
                                <Button label="Danger" type="danger" icon="fa fa-exclamation" size="medium"/>
                                <Button label="Warning" type="warning" icon="fa fa-info-circle" size="large"/>
                                <hr/>
                                <BoxTitle label="Outlined button"/>
                                <Button label="Primary" icon="fa fa-download" type="primary" isOutlined={true}/>
                                <Button label="Success" isRounded={true} type="success" isOutlined={true}/>
                                <Button label="Danger" icon="fa fa-exclamation" type="danger" isRounded={true} isOutlined={true}/>
                            </div>
                        </Box>
                        <Box md={4} lg={4}>
                            <div className="add-spaces">
                                <BoxTitle label="Only Icon button"/>
                                <Button icon="fa fa-download" type="primary" isOutlined={true} size="small"/>
                                <Button icon="fa fa-print" type="success" isRounded={true} size="medium"/>
                                <Button icon="fa fa-github" type="info" size="large"/>
                            </div>
                        </Box>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default ButtonPage;