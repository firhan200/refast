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
                        </Box>
                        <Box md={4} lg={4}>
                            <BoxTitle label="Rounded button"/>
                            <Button label="Primary" type="primary" isRounded={true} size="small"/>
                            <br/>
                            <br/>
                            <Button label="Primary" type="primary" isRounded={true} size="medium"/>
                            <br/>
                            <br/>
                            <Button label="Primary" type="primary" isRounded={true} size="large"/>
                        </Box>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default ButtonPage;