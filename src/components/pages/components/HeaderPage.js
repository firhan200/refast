import React from 'react';

/* Styles */
import { 
    Box, 
    Row, 
    Container, 
    H1, 
    H2, 
    H3, 
    H4, 
    H5, 
    BoxTitle} from './../../styles';
/* Styles */

const BadgePage = () => {
    return(
        <div>
            <div className="title">
                Header
                <div className="sub-title">
                    <i className="fa fa-info-circle"></i> various header text size.
                </div>
            </div>

            <div className="body">
                <Container>
                    <Row>
                        <Box md={6}>
                            <BoxTitle label="Header Size"/>
                            <H1>Header 1</H1>
                            <H2>Header 2</H2>
                            <H3>Header 3</H3>
                            <H4>Header 4</H4>
                            <H5>Header 5</H5>
                        </Box>
                        <Box md={6}>
                            <BoxTitle label="Header Alignment"/>
                            <H1 align="center">Header 1 Center</H1>
                            <H2 align="left">Header 2 Left</H2>
                            <H3 align="right">Header 3 Right</H3>
                            <H4 align="center">Header 4 Center</H4>
                            <H5 align="right">Header 5 Right</H5>
                        </Box>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default BadgePage;