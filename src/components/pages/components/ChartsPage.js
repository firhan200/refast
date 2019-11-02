import React from 'react';

/* Styles */
import { Box, Row, Container, ChartDonut, ChartPie, ChartRadar } from './../../styles';
/* Styles */

const ChartsPage = () => {
    //donut items
    const donutItems = [
        {
            label: 'Android',
            data: 1040,
            color: "#7757F7"
        },
        {
            label: 'iOS',
            data: 674,
            color: "#6E55CE"
        },
        {
            label: 'Win. Phone',
            data: 233,
            color: "#5742A7"
        }
    ];

    //radar items
    const radarItems = {
        labels : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        data : [{
            label: 'Android Downloads',
            color:'#7757F7',
            data : [203, 175, 377, 245, 289, 200]
        },
        {
            label: 'iOS Downloads',
            color:'#6E55CE',
            data : [14, 33, 85, 124, 203, 201]
        }]
    };

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
                        <Box sm={12} md={6} lg={3}>
                            <ChartDonut legend="bottom" title="Donut Chart" items={donutItems}/>
                        </Box>
                        <Box sm={12} md={6} lg={5}>
                            <ChartPie legend="right" title="Pie Chart" items={donutItems}/>
                        </Box>
                        <Box sm={12} md={6} lg={4}>
                            <ChartRadar legend="bottom" title="Radar Chart" size={50} items={radarItems}/>
                        </Box>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default ChartsPage;