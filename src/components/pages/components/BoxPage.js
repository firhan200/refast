import React from 'react';

/* Styles */
import { Box, BoxTitle, Row, Container } from './../../styles';
/* Styles */

const BoxPage = () => {
    return(
        <div>
            <div className="title">
                Box
                <div className="sub-title">
                    <i className="fa fa-info-circle"></i> rectangle white box with shadow.
                </div>
            </div>

            <div className="body">
                <Container>
                    <Row>
                        <Box sm={6} md={4} lg={3}>
                            small 6
                            <br/>
                            medium 4
                            <br/>
                            large 3
                        </Box>
                        <Box sm={6} md={8} lg={9}>
                            small 6
                            <br/>
                            medium 6
                            <br/>
                            large 9
                        </Box>
                    </Row>
                    <Row>
                        <Box md={8} mdOffset={2} lg={6} lgOffset={3}>
                            medium 8, offset 2
                            <br/>
                            large 6, offset 3
                        </Box>
                    </Row>
                    <Row>
                        <Box sm={4}>
                            <BoxTitle label="Title and Icon" icon="fa fa-bell"/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Box>
                        <Box sm={4}>
                            <BoxTitle label="Title Only"/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Box>
                        <Box sm={4}>
                            <BoxTitle icon="fa fa-comments"/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Box>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default BoxPage;