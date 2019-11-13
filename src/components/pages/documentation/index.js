import React, {  Fragment } from 'react';

/* libs */
import { Switch, Route, Link } from "react-router-dom";

/* components */
import { 
    Container, 
    Row, 
    Col, 
    Accordion} from './../../styles';


/* getting started */
import Installation from './getting_started/Installation';
/* getting started */

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
import Dropdowns from './components/Dropdowns';
import Tables from './components/Tables';
import ProgressBars from './components/ProgressBars';
import Modals from './components/Modals';
/*pages*/

const Documentation = () => {
    const documentationPrefix = 'documentation';

    //on link click
    const linkClick = () => {
        //scroll to top func
        var elmnt = document.getElementById("doc-content");
        elmnt.scrollIntoView();
    }

    //menu items
    const menus = [
        {
            key : 'Getting Started',
            body : (
                <ul className="documentation-navigations">
                    <li>
                        <Link onClick={ linkClick } to={`/${documentationPrefix}/installation`}>Installation</Link>
                    </li>
                </ul>
            )
        },
        {
            key : 'Components',
            body : (
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
                    <li>
                        <Link onClick={ linkClick } to={`/${documentationPrefix}/modals`}>Modals</Link>
                    </li>
                </ul>
            )
        }
    ];

    return (
        <Fragment>
            {/* page title */}
            <div className="title">
                Documentation
            </div>
            <br/>
            <Container>
                <Row>
                    <Col md={12} lg={3} style={{ marginBottom: '20px' }}>
                        <Accordion items={ menus }/>
                    </Col>
                    <Col md={12} lg={9}>
                        <div id="doc-content">
                            {/* A <Switch> looks through its children <Route>s and
                            renders the first one that matches the current URL. */}
                            <Switch>
                                {/* getting started */}
                                <Route path={`/${documentationPrefix}/installation`} component={ Installation }/>

                                {/* components */}
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
                                <Route path={`/${documentationPrefix}/dropdowns`} component={ Dropdowns }/>
                                <Route path={`/${documentationPrefix}/tables`} component={ Tables }/>
                                <Route path={`/${documentationPrefix}/progressbar`} component={ ProgressBars }/>
                                <Route path={`/${documentationPrefix}/modals`} component={ Modals }/>

                                {/* not found page */}
                                <Route path={`/${documentationPrefix}/`} component={ Installation }/>
                            </Switch>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Documentation;