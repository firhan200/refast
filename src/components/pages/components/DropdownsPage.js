import React from 'react';

/* Styles */
import { Box, Row, Container, Dropdown } from './../../styles';
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
                            <Dropdown icon="fa fa-user" size="small" label="Dropdown"/>
                        </Box>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default DropdownsPage;