import React from 'react';

/* Styles */
import { Box, Row, Container, Breadcrumb, BreadcrumbItem } from './../../styles';
/* Styles */

const BreadcrumbsPage = () => {
    return(
        <div>
            <div className="title">
                Breadcrumbs
                <div className="sub-title">
                    <i className="fa fa-info-circle"></i> give information about current page navigation.
                </div>
            </div>

            <div className="body">
                <Container>
                    <Row>
                        <Box sm={12} md={12} lg={12}>
                            <Breadcrumb>
                                <BreadcrumbItem isActive={true}>
                                    Products
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </Box>
                        &nbsp;
                        <Box sm={12} md={12} lg={12}>
                            <Breadcrumb>
                                <BreadcrumbItem>
                                    <a href="#!">Products</a>
                                </BreadcrumbItem>
                                <BreadcrumbItem isActive={true}>
                                    Men's
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </Box>
                        &nbsp;
                        <Box sm={12} md={12} lg={12}>
                            <Breadcrumb>
                                <BreadcrumbItem>
                                    <a href="#!">Products</a>
                                </BreadcrumbItem>
                                <BreadcrumbItem>
                                    <a href="#!">Men's</a>
                                </BreadcrumbItem>
                                <BreadcrumbItem isActive={true}>
                                    Watch
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </Box>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default BreadcrumbsPage;