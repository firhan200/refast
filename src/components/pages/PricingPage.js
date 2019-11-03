import React from 'react';
import { Breadcrumb, BreadcrumbItem, Container, Row, Box } from '../styles';

const PricingPage = () => {
    return(
        <div>
            <div className="title">
                Pricing
                <Breadcrumb>
                    <BreadcrumbItem>
                        <a href="#!">Page</a>
                    </BreadcrumbItem>
                    <BreadcrumbItem isActive={true}>
                        Pricing
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <br/>
            <Container>
                <Row>
                    <Box sm={12} md={3} className="pricing">
                        <div className="pricing-icon">
                            <i className="fa fa-server"></i>
                        </div>
                        <div className="pricing-title">
                            PREMIUM PACKAGE
                        </div>
                        <div className="pricing-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </div>
                        <div className="pricing-cost-label">
                            Start From
                        </div>
                        <div className="pricing-cost">
                            $ 599
                        </div>
                    </Box>
                    <Box sm={12} md={3} className="pricing">
                        <div className="pricing-icon">
                            <i className="fa fa-server"></i>
                        </div>
                        <div className="pricing-title">
                            GOLD PACKAGE
                        </div>
                        <div className="pricing-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </div>
                        <div className="pricing-cost-label">
                            Start From
                        </div>
                        <div className="pricing-cost">
                            $ 499
                        </div>
                    </Box>
                    <Box sm={12} md={3} className="pricing">
                        <div className="pricing-icon">
                            <i className="fa fa-server"></i>
                        </div>
                        <div className="pricing-title">
                            SILVER PACKAGE
                        </div>
                        <div className="pricing-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </div>
                        <div className="pricing-cost-label">
                            Start From
                        </div>
                        <div className="pricing-cost">
                            $ 299
                        </div>
                    </Box>
                    <Box sm={12} md={3} className="pricing">
                        <div className="pricing-icon">
                            <i className="fa fa-server"></i>
                        </div>
                        <div className="pricing-title">
                            BRONZE PACKAGE
                        </div>
                        <div className="pricing-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </div>
                        <div className="pricing-cost-label">
                            Start From
                        </div>
                        <div className="pricing-cost">
                            $ 99
                        </div>
                    </Box>
                </Row>
            </Container>
        </div>
    );
}

export default PricingPage;