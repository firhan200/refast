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
import BoxDocumentation from './components/Box';
import FormsInputs from './components/FormsInputs';
import Cards from './components/Cards';
import Alerts from './components/Alerts';
import Badges from './components/Badges';
import Buttons from './components/Buttons';
import Breadcrumbs from './components/Breadcrumbs';
import Carousels from './components/Carousels';
import Charts from './components/Charts';
import Avatar from './components/Avatar';
import Collapses from './components/Collapses';
/*pages*/

const Documentation = () => {
    const documentationPrefix = 'documentation';

    //on link click
    const linkClick = () => {
        //scroll to top func
        var elmnt = document.getElementById("doc-content");
        elmnt.scrollIntoView();
    }

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
                    <Box md={3} className="sticky-top">
                        <BoxTitle label="Components"/>
                        <ul className="documentation-navigations">
                            <li>
                                <Link onClick={ linkClick } to={`/${documentationPrefix}/header`}>Header</Link>
                            </li>
                            <li>
                                <Link onClick={ linkClick } to={`/${documentationPrefix}/box`}>Box</Link>
                            </li>
                            <li>
                                <Link onClick={ linkClick } to={`/${documentationPrefix}/forms`}>Forms &amp; Inputs</Link>
                            </li>
                            <li>
                                <Link onClick={ linkClick } to={`/${documentationPrefix}/cards`}>Cards</Link>
                            </li>
                            <li>
                                <Link onClick={ linkClick } to={`/${documentationPrefix}/alerts`}>Alerts</Link>
                            </li>
                            <li>
                                <Link onClick={ linkClick } to={`/${documentationPrefix}/badges`}>Badges</Link>
                            </li>
                            <li>
                                <Link onClick={ linkClick } to={`/${documentationPrefix}/buttons`}>Buttons</Link>
                            </li>
                            <li>
                                <Link onClick={ linkClick } to={`/${documentationPrefix}/breadcrumbs`}>Breadcrumbs</Link>
                            </li>
                            <li>
                                <Link onClick={ linkClick } to={`/${documentationPrefix}/carousel`}>Carousel</Link>
                            </li>
                            <li>
                                <Link onClick={ linkClick } to={`/${documentationPrefix}/charts`}>Charts</Link>
                            </li>
                            <li>
                                <Link onClick={ linkClick } to={`/${documentationPrefix}/avatar`}>Avatar</Link>
                            </li>
                            <li>
                                <Link onClick={ linkClick } to={`/${documentationPrefix}/collapse`}>Collapse</Link>
                            </li>
                            <li>
                                <Link onClick={ linkClick } to={`/${documentationPrefix}/dropdowns`}>Dropdowns</Link>
                            </li>
                            <li>
                                <Link onClick={ linkClick } to={`/${documentationPrefix}/tables`}>Tables</Link>
                            </li>
                            <li>
                                <Link onClick={ linkClick } to={`/${documentationPrefix}/progressbar`}>Progress Bar</Link>
                            </li>
                        </ul>
                    </Box>
                    <Col md={9}>
                        <div id="doc-content">
                            {/* A <Switch> looks through its children <Route>s and
                            renders the first one that matches the current URL. */}
                            <Switch>
                                <Route path={`/${documentationPrefix}/header`} component={ Header }/>
                                <Route path={`/${documentationPrefix}/box`} component={ BoxDocumentation }/>
                                <Route path={`/${documentationPrefix}/forms`} component={ FormsInputs }/>
                                <Route path={`/${documentationPrefix}/cards`} component={ Cards }/>
                                <Route path={`/${documentationPrefix}/alerts`} component={ Alerts }/>
                                <Route path={`/${documentationPrefix}/badges`} component={ Badges }/>
                                <Route path={`/${documentationPrefix}/buttons`} component={ Buttons }/>
                                <Route path={`/${documentationPrefix}/breadcrumbs`} component={ Breadcrumbs }/>
                                <Route path={`/${documentationPrefix}/carousel`} component={ Carousels }/>
                                <Route path={`/${documentationPrefix}/charts`} component={ Charts }/>
                                <Route path={`/${documentationPrefix}/avatar`} component={ Avatar }/>
                                <Route path={`/${documentationPrefix}/collapse`} component={ Collapses }/>

                                {/* not found page */}
                                <Route path={`/${documentationPrefix}/`} component={ Header }/>
                            </Switch>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Documentation;