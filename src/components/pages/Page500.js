import React, { Fragment } from 'react';

/* libs */
import { Link } from 'react-router-dom';
import { 
    Container, 
    Row, 
    Box} from '../styles';

const Page500 = (props) => {
    return(
        <Fragment>
            <Container className="content">
                <Row>
                    <Box className="error-page" isTransparent={true} sm={12} md={6} mdOffset={3}>
                        <div className="error-icon">
                            <i className="fa fa-server"></i>
                        </div>
                        <h1><b>500</b></h1>
                        <h2>Internal Server Error</h2>
                        <h2>Sorry, something went wrong. Please try again later.</h2>
                        <Link to='/dashboard/ecommerce'>Reload</Link>
                    </Box>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Page500;