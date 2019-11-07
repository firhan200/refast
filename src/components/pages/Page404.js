import React, { Fragment } from 'react';

/* libs */
import { Link } from 'react-router-dom';
import { 
    Container, 
    Row, 
    Box, 
    Col, 
    Form,
    FormGroup,
    Input,
    Button} from '../styles';

const Page404 = (props) => {
    return(
        <Fragment>
            <Container className="content">
                <Row>
                    <Box sm={12}>
                        <h1>404</h1>
                        <h2>Page Not Found</h2>
                        <Form>
                            <Row>
                                <Col xs={10}>
                                    <FormGroup>
                                        <Input placeholder="Search"/>
                                    </FormGroup>    
                                </Col>
                                <Col xs={2}>
                                    <FormGroup>
                                        <Button label="Search" size="large" icon="fa fa-search" isFull={true}/>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                        <Link to='/dashboard/ecommerce'>Go Back Home</Link>
                    </Box>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Page404;