import React, { useState } from 'react';
import { Box, BoxTitle, Container, Row, Col, IconCard, ChartLine, ChartDonut, ChartPie } from '../styles';

const DashboardECommercePage = () => {
    const favoriteProducts = [
        {
            label: 'Laptops',
            data: 1040,
            color: "#7757F7"
        },
        {
            label: 'Shoess',
            data: 674,
            color: "#6E55CE"
        },
        {
            label: 'Watches',
            data: 233,
            color: "#5742A7"
        }
    ];

    const orders = [
        {
            label : 'Pending',
            data: 102,
            color: '#CFCAE4'
        },
        {
            label : 'On Going',
            data: 671,
            color: '#898AE9'
        },
        {
            label : 'Success',
            data: 1050,
            color: '#7FDDC7'
        },
        {
            label : 'Shipped',
            data: 96,
            color: '#997CAD'
        }
    ]

    const sales = {
        labels : ['Jan', 'Feb', 'Apr', 'May', 'Jun'],
        data: [
            {
                label: '2018',
                color:'#5742A7',
                data: [400, 760, 825, 993, 1020]
            },
            {
                label: '2019',
                color:'#9B89E0',
                data: [500, 600, 700, 750, 700]
            }
        ]
    };

    return(
        <div>
            <BoxTitle label="E-Commerce Dashboard" align="left"/>
            <hr/>
            <Container>
                <Row>
                    <Col md={3} className="m-b-20">
                        <IconCard 
                            isWavy={true} 
                            statisticValue={-12} 
                            statisticPostfix="%" 
                            number={5207} 
                            label="Orders" 
                            icon="fa fa-shopping-cart"/>
                    </Col>
                    <Col md={3} className="m-b-20">
                        <IconCard 
                            isWavy={true} 
                            number={12506} 
                            statisticValue={7} 
                            statisticPostfix="%" 
                            label="Earnings" 
                            icon="fa fa-dollar"/>
                    </Col>
                    <Col md={3} className="m-b-20">
                        <IconCard 
                            isWavy={true} 
                            number={203} 
                            label="Tickets" 
                            icon="fa fa-ticket"/>
                    </Col>
                    <Col md={3} className="m-b-20">
                        <IconCard 
                            isWavy={true} 
                            number={3002} 
                            label="Members" 
                            icon="fa fa-users"/>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} lg={6}>
                        <Box lg={12}>
                            <BoxTitle label="Recent Orders"/>
                        </Box>
                    </Col>
                    <Col md={6} lg={6}>
                        <Container>
                            <Row>
                                <Box md={12} lg={6}>
                                    <ChartDonut title="Most Favorite Products" legend="bottom" items={favoriteProducts}/>
                                </Box>
                                <Box md={12} lg={6}>
                                    <ChartPie title="Orders" legend="bottom" items={orders}/>
                                </Box>
                            </Row>
                            <Row>
                                <Box md={12}>
                                    <ChartLine legend="bottom" title="Sales" items={sales}/>
                                </Box>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default DashboardECommercePage;