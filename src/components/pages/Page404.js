import React, { Fragment } from 'react';

/* libs */
import { Link } from 'react-router-dom';
import { 
    Container, 
    Row, 
    Box, 
    Form,
    FormGroup,
    Input,
    H1,
    H2} from '../styles';

const Page404 = (props) => {
    return(
        <Fragment>
            <Container className="content">
                <Row>
                    <Box className="error-page" isTransparent={true} sm={12} md={6} mdOffset={3}>
                        <div className="error-icon">
                            <i className="fa fa-exclamation"></i>
                        </div>
                        <H1 align="center"><b>404</b></H1>
                        <H2 align="center">Page Not Found</H2>
                        <H2 align="center">Sorry, we can't find the page you are looking for</H2>
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