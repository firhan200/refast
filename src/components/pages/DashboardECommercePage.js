import React from 'react';
import CurrencyFormat  from 'react-currency-format';
import { Box, BoxTitle, Container, Row, Col, IconCard, ChartLine, ChartDonut, ChartPie, Table, Badge } from '../styles';

const DashboardECommercePage = () => {
    const favoriteProducts = [
        {
            label: 'Laptops',
            data: 1040,
            color: "#7757F7"
        },
        {
            label: 'Shoes',
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

    const recentOrders = [
        {
            orderId: 'ODR-0005',
            qty : 5,
            totalCost : 560,
            status : 1 //completed
        },
        {
            orderId: 'ODR-0004',
            qty : 2,
            totalCost : 1000,
            status : 2 //pending
        },
        {
            orderId: 'ODR-0003',
            qty : 1,
            totalCost : 99,
            status : 2 //pending
        },
        {
            orderId: 'ODR-0002',
            qty : 23,
            totalCost : 789,
            status : 3 //Cancelled
        },
        {
            orderId: 'ODR-0001',
            qty : 4,
            totalCost : 35,
            status : 4 //Shipped
        }
    ];

    const renderRecentOrderStatus = (status) => {
        let label = '';
        let type = 'primary';
        let icon = '';

        //check label
        switch(status){
            case 1:
                label = 'completed';
                type = 'success';
                icon = 'fa fa-check';
                break;
            case 2:
                label = 'pending';
                type = 'info';
                icon = 'fa fa-clock-o';
                break;
            case 3:
                label = 'cancelled';
                type = 'danger';
                icon = 'fa fa-remove';
                break;
            case 4:
                label = 'shipped';
                type = 'primary';
                icon = 'fa fa-truck';
                break;
        }

        return (
            <div>
                <Badge message={label} icon={icon} type={type}/>
            </div>
        )
    }

    return(
        <div>
            <BoxTitle label="E-Commerce Dashboard" align="left"/>
            <br/>
            <Container>
                <Row>
                    <Col xs={6} md={3} className="m-b-20">
                        <IconCard 
                            isWavy={true} 
                            statisticValue={-12} 
                            statisticPostfix="%" 
                            number={5207} 
                            label="Orders" 
                            icon="fa fa-shopping-cart"/>
                    </Col>
                    <Col xs={6} md={3} className="m-b-20">
                        <IconCard 
                            isWavy={true} 
                            number={12506} 
                            statisticValue={7} 
                            statisticPostfix="%" 
                            label="Earnings" 
                            icon="fa fa-dollar"/>
                    </Col>
                    <Col xs={6} md={3} className="m-b-20">
                        <IconCard 
                            isWavy={true} 
                            number={203} 
                            label="Tickets" 
                            icon="fa fa-ticket"/>
                    </Col>
                    <Col xs={6} md={3} className="m-b-20">
                        <IconCard 
                            isWavy={true} 
                            number={3002} 
                            label="Members" 
                            icon="fa fa-users"/>
                    </Col>
                </Row>
                <Row>
                    <Box lg={12} md={6} lg={6}>
                        <BoxTitle label="Recent Orders"/>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>Quantity</th>
                                    <th>Cost</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                { recentOrders.map(recentOrder => (
                                    <tr>
                                        <td>{ recentOrder.orderId }</td>
                                        <td>
                                            <CurrencyFormat value={ recentOrder.qty } displayType={'text'} thousandSeparator={true}/>
                                        </td>
                                        <td>
                                            $ <CurrencyFormat value={ recentOrder.totalCost } displayType={'text'} thousandSeparator={true}/>
                                        </td>
                                        <td>
                                            { renderRecentOrderStatus(recentOrder.status) }
                                        </td>
                                    </tr>
                                )) }
                            </tbody>
                        </Table>
                    </Box>
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