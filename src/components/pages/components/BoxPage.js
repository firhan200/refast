import React from 'react';

/* Styles */
import { Box, Row, Container } from './../../styles';
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
                </Container>
            </div>
        </div>
    );
}

export default BoxPage;