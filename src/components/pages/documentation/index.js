import React, { Fragment } from 'react';

/* libs */
import { Switch, Route, Link } from "react-router-dom";

/* components */
import { 
    Breadcrumb, 
    BreadcrumbItem, 
    Container, 
    Row, 
    Col, 
    Box,
    BoxTitle} from './../../styles';

/*pages*/
import Header from './components/Header';
/*pages*/

const Documentation = () => {
    const documentationPrefix = 'documentation';
    return (
        <Fragment>
            {/* page title */}
            <div className="title">
                Documentation

                {/* breadcrumb info */}
                <Breadcrumb>
                    <BreadcrumbItem>
                        <a href="#!">Documentation</a>
                    </BreadcrumbItem>
                    <BreadcrumbItem isActive={true}>
                        Components
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <br/>
            <Container>
                <Row>
                    <Box md={3}>
                        <BoxTitle label="Components"/>
                        <ul className="documentation-navigations">
                            <li>
                                <Link to={`/${documentationPrefix}/header`}>Header</Link>
                            </li>
                            <li>
                                <Link to={`/${documentationPrefix}/box`}>Box</Link>
                            </li>
                            <li>
                                <Link to={`/${documentationPrefix}/forms`}>Forms &amp; Inputs</Link>
                            </li>
                            <li>
                                <Link to={`/${documentationPrefix}/cards`}>Cards</Link>
                            </li>
                        </ul>
                    </Box>
                    <Col md={9}>
                        {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
                        <Switch>
                            <Route path={`/${documentationPrefix}/header`} component={ Header }/>

                            {/* not found page */}
                            <Route path="/">
                                
                            </Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Documentation;