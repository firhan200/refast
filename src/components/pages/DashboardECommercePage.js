import React, { Fragment } from 'react';
import CurrencyFormat  from 'react-currency-format';
import { 
    Box, 
    BoxTitle, 
    Container, 
    Row, 
    Col, 
    IconCard, 
    ChartLine, 
    ChartDonut, 
    ChartPie, 
    Table, 
    Badge, 
    H3, 
    UserCard, 
    ProductCardCategory, 
    ProductCardImage,
    ProductCardPrice, 
    Button, 
    ProductCard, 
    ProductCardName, 
    ProductCardDescription, 
    ProgressBar,
    BreadcrumbItem,
    Breadcrumb} from '../styles';

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
            default:
                break;
        }

        return (
            <div>
                <Badge message={label} icon={icon} type={type}/>
            </div>
        )
    }

    const recentUsers = [
        {
            image: '/images/avatar.png',
            name: 'John Doe',
            email: 'john.doe@gmail.com'
        },
        {
            image: '/images/slider2.jpg',
            name: 'Sarah Johnson',
            email: 'sarah.johnson@gmail.com'
        },
        {
            image: '/images/slider1.jpg',
            name: 'Firhan Faisal',
            email: 'firhan@gmail.com'
        }
    ]

    const recentProducts = [
        {
            image: '/images/asus.jpg',
            name: 'Asus VivoBook Ultra A412FL',
            category: 'Laptop'
        }
    ]

    return(
        <Fragment>
            <div className="title">
                E-Commerce Dashboard
                <Breadcrumb>
                    <BreadcrumbItem>
                        <a href="#!">Dashboard</a>
                    </BreadcrumbItem>
                    <BreadcrumbItem isActive={true}>
                        E-Commerce
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <br/>
            <Container>
                <Row>
                    <Col xs={12} md={3} className="m-b-20">
                        <IconCard 
                            isWavy={true} 
                            statisticValue={-12} 
                            statisticPostfix="%" 
                            number={5207} 
                            label="Orders" 
                            icon="fa fa-shopping-cart"/>
                    </Col>
                    <Col xs={12} md={3} className="m-b-20">
                        <IconCard 
                            isWavy={true} 
                            number={12506} 
                            statisticValue={7} 
                            statisticPostfix="%" 
                            label="Earnings" 
                            icon="fa fa-dollar"/>
                    </Col>
                    <Col xs={12} md={3} className="m-b-20">
                        <IconCard 
                            isWavy={true} 
                            number={203} 
                            label="Tickets" 
                            icon="fa fa-ticket"/>
                    </Col>
                    <Col xs={12} md={3}>
                        <IconCard 
                            isWavy={true} 
                            number={3002} 
                            label="Members" 
                            icon="fa fa-users"/>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} lg={6}>
                        <Container>
                            <Row>
                                <Box md={12}>
                                    <BoxTitle label="Recent Orders"/>
                                    <Table isResponsive={true}>
                                        <thead>
                                            <tr>
                                                <th>Order ID</th>
                                                <th>Quantity</th>
                                                <th>Total Cost</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { recentOrders.map(recentOrder => (
                                                <tr key={recentOrder.orderId}>
                                                    <td><a href="#!">{ recentOrder.orderId }</a></td>
                                                    <td align="right">
                                                        <CurrencyFormat value={ recentOrder.qty } displayType={'text'} thousandSeparator={true}/>
                                                    </td>
                                                    <td align="right">
                                                        $ <CurrencyFormat value={ recentOrder.totalCost } displayType={'text'} thousandSeparator={true}/>
                                                    </td>
                                                    <td align="center">
                                                        { renderRecentOrderStatus(recentOrder.status) }
                                                    </td>
                                                </tr>
                                            )) }
                                        </tbody>
                                    </Table>
                                </Box>
                            </Row>
                            <Row>
                                <Col md={12} lg={6}>
                                    <H3>Recent Users</H3>
                                    { recentUsers.map((recentUser, index) => (
                                        <UserCard 
                                            key={index}
                                            avatar={recentUser.image} 
                                            title={recentUser.name} 
                                            subTitle={recentUser.email} 
                                            isHorizontal={true}
                                            handleClick={() => {
                                                alert("Click on: "+recentUser.name);
                                            }}/>
                                    )) }
                                </Col>
                                <Col md={12} lg={6}>
                                    <H3>Recent Products</H3>
                                    { recentProducts.map((recentProduct, index) => (
                                        <ProductCard key={index}>
                                            <ProductCardName>Asus Vivobook Ultra A412FL</ProductCardName>
                                            <ProductCardCategory>Notebook</ProductCardCategory>
                                            <ProductCardImage image="/images/asus.jpg"/>
                                            <ProductCardDescription maxLength={150}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </ProductCardDescription>
                                            <ProductCardPrice price={1299} afterDiscountPrice={999} currency="$"/>
                                            <Button label="View Products" isFull={true} size="small" handleClick={() => { alert('view products: '+recentProduct.name) }}/>
                                        </ProductCard> 
                                    )) }
                                </Col>
                            </Row>
                        </Container>
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
                <Row>
                    <Box sm={6} md={3}>
                        <BoxTitle icon="fa fa-inbox" label="Disk Storage"/>
                        <ProgressBar 
                            color="success"
                            label="25GB / 100GB"
                            showLabel={true}
                            percentage={25}/>
                    </Box>
                    <Box sm={6} md={3}>
                        <BoxTitle icon="fa fa-database" label="Database"/>
                        <ProgressBar 
                            color="danger"
                            label="484MB / 512MB"
                            showLabel={true}
                            percentage={96}/>
                    </Box>
                    <Box sm={6} md={3}>
                        <BoxTitle icon="fa fa-server" label="Bandwidth"/>
                        <ProgressBar 
                            color="primary"
                            label="40GB / 80GB"
                            showLabel={true}
                            percentage={50}/>
                    </Box>
                    <Box sm={6} md={3}>
                        <BoxTitle icon="fa fa-signal" label="Latency"/>
                        <ProgressBar 
                            color="primary"
                            label="70/ms"
                            showLabel={true}
                            percentage={70}/>
                    </Box>
                </Row>
            </Container>
        </Fragment>
    );
}

export default DashboardECommercePage;