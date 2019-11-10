import React, { Fragment } from 'react';

/* libs */
import { Link } from 'react-router-dom';
import { 
    Container, 
    Row, 
    Box,
    H1,
    H2} from '../styles';

const Page500 = (props) => {
    return(
        <Fragment>
            <Container className="content">
                <Row>
                    <Box className="error-page" isTransparent={true} sm={12} md={6} mdOffset={3}>
                        <div className="error-icon">
                            <i className="fa fa-server"></i>
                        </div>
                        <H1 align="center"><b>500</b></H1>
                        <H2 align="center">Internal Server Error</H2>
                        <H2 align="center">Sorry, something went wrong. Please try again later.</H2>
                        <Link to='/dashboard/ecommerce'>Reload</Link>
                    </Box>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Page500;