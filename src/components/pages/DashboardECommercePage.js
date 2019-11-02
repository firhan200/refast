import React, { useState } from 'react';
import { Box, BoxTitle, Container, Row, Col, IconCard, ChartLine } from '../styles';

const DashboardECommercePage = () => {
    const sales = {
        labels : ['Jan', 'Feb', 'Apr', 'May', 'Jun'],
        data: [
            {
                label: 'Sales',
                color:'#7757F7',
                data: [2032, 1007, 456, 4002, 7452]
            }
        ]
    };

    return(
        <div>
            <BoxTitle label="E-Commerce Dashboard" align="left"/>
            <hr/>
            <Container>
                <Row>
                    <Col md={3}>
                        <IconCard 
                            isWavy={true} 
                            statisticValue={-12} 
                            statisticPostfix="%" 
                            number={5207} 
                            label="Orders" 
                            icon="fa fa-shopping-cart"/>
                    </Col>
                    <Col md={3}>
                        <IconCard 
                            isWavy={true} 
                            number={12506} 
                            statisticValue={7} 
                            statisticPostfix="%" 
                            label="Earnings" 
                            icon="fa fa-dollar"/>
                    </Col>
                    <Col md={3}>
                        <IconCard 
                            isWavy={true} 
                            number={203} 
                            label="Tickets" 
                            icon="fa fa-ticket"/>
                    </Col>
                    <Col md={3}>
                        <IconCard 
                            isWavy={true} 
                            number={3002} 
                            label="Members" 
                            icon="fa fa-users"/>
                    </Col>
                </Row>
                <Row>
                    <Box md={6} lg={4}>
                        <ChartLine title="Sales" items={sales}/>
                    </Box>
                </Row>
            </Container>
        </div>
    );
}

export default DashboardECommercePage;