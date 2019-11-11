import React, { Fragment } from 'react';
import DocsExample from './../DocsExample';
import { 
    Row,
    Box,
    Breadcrumb,
    BreadcrumbItem
} from '../../../styles';

const Breadcrumbs = () => {
    return (
        <Fragment>
            <DocsExample 
                title="Breadcrumbs"
                example={(
                    <Row>
                        <Box sm={12} md={12} lg={12}>
                            <Breadcrumb>
                                <BreadcrumbItem isActive={true}>
                                    Products
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </Box>
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
                )}
                code={(
`import React from 'react';
import { Row, Box, Breadcrumb, BreadcrumbItem } from './styles';

const Breadcrumbs = () => {
    return(
        <Row>
            <Box sm={12} md={12} lg={12}>
                <Breadcrumb>
                    <BreadcrumbItem isActive={true}>
                        Products
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>
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
    )
}

export default Breadcrumbs;
`
                )}
                properties={(
`BreadcrumbItem.propTypes = {
    isActive : PropTypes.bool //is breadcrumb item is active (unclickable)
}`
                )}
            />
        </Fragment>
    )
}

export default Breadcrumbs;