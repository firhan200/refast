import React from 'react';

/* Styles */
import { Box, BoxTitle, Row, Container, Badge } from './../../styles';
/* Styles */

const BadgePage = () => {
    return(
        <div>
            <div className="title">
                Badges
                <div className="sub-title">
                    <i className="fa fa-info-circle"></i> show small text with icon and image in various background color.
                </div>
            </div>

            <div className="body">
                <Container>
                    <Row>
                        <Box md={4}>
                            <BoxTitle label="Badge"/>
                            <Badge type="success" message="success"/>
                            <Badge type="danger" message="danger"/>
                            <Badge type="primary" message="primary"/>
                            <Badge type="warning" message="warning"/>
                            <Badge type="info" message="info"/>
                        </Box>
                        <Box md={4}>
                            <BoxTitle label="Badge with icon"/>
                            <Badge type="success" icon="fa fa-check-circle" message="success"/>
                            <Badge type="danger" icon="fa fa-exclamation" message="danger"/>
                            <Badge type="primary" icon="fa fa-star" message="primary"/>
                            <Badge type="warning" icon="fa fa-info-circle" message="warning"/>
                            <Badge type="info" icon="fa fa-paper-plane" message="info"/>
                        </Box>
                        <Box md={4}>
                            <BoxTitle label="Badge with icon and image"/>
                        </Box>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default BadgePage;