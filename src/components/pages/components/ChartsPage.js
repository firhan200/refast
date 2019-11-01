import React from 'react';

/* Styles */
import { Box, Row, Container, Breadcrumb, BreadcrumbItem, ChartDonut } from './../../styles';
/* Styles */

const ChartsPage = () => {
    return(
        <div>
            <div className="title">
                Charts
                <div className="sub-title">
                    <i className="fa fa-info-circle"></i> various chart styles with ApexChart.
                </div>
            </div>

            <div className="body">
                <Container>
                    <Row>
                        <Box sm={12} md={6} lg={4}>
                            <ChartDonut />
                        </Box>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default ChartsPage;