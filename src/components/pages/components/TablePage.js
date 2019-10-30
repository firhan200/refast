import React from 'react';

/* Styles */
import { Box, Row, Container, Table, BoxTitle } from './../../styles';
/* Styles */

const TablePage = () => {
    return(
        <div>
            <div className="title">
                Tables
                <div className="sub-title">
                    <i className="fa fa-info-circle"></i> give information about current page navigation.
                </div>
            </div>

            <div className="body">
                <Container>
                    <Row>
                        <Box sm={12} md={6} lg={6}>
                            <BoxTitle label="Default Table"/>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>John Doe</td>
                                        <td>john.doe@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td>Sarah Johnson</td>
                                        <td>sarah.johnson@gmail.com</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Box>
                        <Box sm={12} md={6} lg={6}>
                            <BoxTitle label="Bordered Table"/>
                            <Table type="bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>John Doe</td>
                                        <td>john.doe@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td>Sarah Johnson</td>
                                        <td>sarah.johnson@gmail.com</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Box>
                    </Row>
                    <Row>
                        <Box sm={12} md={6} lg={6}>
                            <BoxTitle label="Striped Table"/>
                            <Table type="striped">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>John Doe</td>
                                        <td>john.doe@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td>Sarah Johnson</td>
                                        <td>sarah.johnson@gmail.com</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Box>
                        <Box sm={12} md={6} lg={6}>
                            <BoxTitle label="Dark Table"/>
                            <Table type="dark">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>John Doe</td>
                                        <td>john.doe@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td>Sarah Johnson</td>
                                        <td>sarah.johnson@gmail.com</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Box>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default TablePage;