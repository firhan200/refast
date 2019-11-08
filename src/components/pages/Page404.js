import React, { Fragment } from 'react';

/* libs */
import { Link } from 'react-router-dom';
import { 
    Container, 
    Row, 
    Box, 
    Form,
    FormGroup,
    Input} from '../styles';

const Page404 = (props) => {
    return(
        <Fragment>
            <Container className="content">
                <Row>
                    <Box className="error-page" isTransparent={true} sm={12} md={6} mdOffset={3}>
                        <div className="error-icon">
                            <i className="fa fa-exclamation"></i>
                        </div>
                        <h1><b>404</b></h1>
                        <h2>Page Not Found</h2>
                        <h2>Sorry, we can't find the page you are looking for</h2>
                        <Form>
                            <FormGroup>
                                <Input icon="fa fa-search" placeholder="Search"/>
                            </FormGroup>    
                        </Form>
                        <Link to='/dashboard/ecommerce'>Go Back Home</Link>
                    </Box>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Page404;