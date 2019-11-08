import React from 'react';
import { Breadcrumb, BreadcrumbItem, Container, Row, Box, Table, BoxTitle, H4, Button } from '../styles';

const PricingPage = () => {
    const pricings = [
        {
            label: '24 Hours Support',
            premium: true,
            gold: true,
            silver: false,
            bronze: false,
        },
        {
            label: 'Unlimited Bandwidth',
            premium: true,
            gold: '500GB',
            silver: '100GB',
            bronze: '50GB',
        },
        {
            label: 'Storage',
            premium: '100GB',
            gold: '50GB',
            silver: '25GB',
            bronze: '10GB',
        },
        {
            label: 'Push Notifications',
            premium: true,
            gold: true,
            silver: true,
            bronze: true,
        }
    ];

    const renderIncluded = (isIncluded) => (
        <div>
            {/* check type if boolean */}
            { (typeof isIncluded === 'boolean') ? (
                //render using icon
                isIncluded ? (
                    <i className="fa fa-check"></i>
                ) : (
                    <i className="fa fa-remove"></i>
                )
            ) : (
                //render raw string
                <span>{ isIncluded }</span>
            ) }
        </div>
    )

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
                {/* Table based pricing information */}
                <Row>
                    <Box md={12}>
                        <BoxTitle label="Table Pricing" subLabel="Show pricing using responsive table to make user easy to get price information included."/>
                        <Table isResponsive={true} >
                            <thead>
                                <tr align="center">
                                    <th></th>
                                    <th>
                                        <div className="m-2">
                                            Premium
                                        </div>
                                        <Button size="small" label="BUY PACKAGE"/>
                                    </th>
                                    <th>
                                        <div className="m-2">
                                            Gold
                                        </div>
                                        <Button size="small" label="BUY PACKAGE"/>
                                    </th>
                                    <th>
                                        <div className="m-2">
                                            Silver
                                        </div>
                                        <Button size="small" label="BUY PACKAGE"/>
                                    </th>
                                    <th>
                                        <div className="m-2">
                                            Bronze
                                        </div>
                                        <Button size="small" label="BUY PACKAGE"/>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                { pricings.map((pricing, index) => (
                                    <tr key={index}>
                                        <td>{ pricing.label }</td>
                                        <td align="center">{ renderIncluded(pricing.premium) }</td>
                                        <td align="center">{ renderIncluded(pricing.gold) }</td>
                                        <td align="center">{ renderIncluded(pricing.silver) }</td>
                                        <td align="center">{ renderIncluded(pricing.bronze) }</td>
                                    </tr>
                                )) }
                            </tbody>
                            <tfoot>
                                <tr align="center">
                                    <th></th>
                                    <th>$ 599</th>
                                    <th>$ 499</th>
                                    <th>$ 299</th>
                                    <th>$ 99</th>
                                </tr>
                            </tfoot>
                        </Table>
                        <H4 align="right">*All package is including free website builder.</H4>
                    </Box>
                </Row>

                {/* Grid based pricing information */}
                <Row>
                    <Box sm={12} md={3} className="pricing">
                        <div className="pricing-icon">
                            <i className="fa fa-snowflake-o"></i>
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
                            <i className="fa fa-star"></i>
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
                            <i className="fa fa-star-half-o"></i>
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
                            <i className="fa fa-star-o"></i>
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