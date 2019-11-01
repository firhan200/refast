import React from 'react';

/* Styles */
import { Box, Row, Container, Breadcrumb, BreadcrumbItem, ChartDonut } from './../../styles';
/* Styles */

const ChartsPage = () => {
    //donut items
    const donutItems = [
        {
            label: 'Android',
            number: 1040,
            color: "#A2D9CE"
        },
        {
            label: 'iOS',
            number: 674,
            color: "#AED6F1"
        },
        {
            label: 'Win. Phone',
            number: 233,
            color: "#F4D03F"
        }
    ];

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
                            <ChartDonut legend="bottom" title="Game Downloads" items={donutItems}/>
                        </Box>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default ChartsPage;