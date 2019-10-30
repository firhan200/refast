import React, { useState } from 'react';

/* Styles */
import { Box, Row, Container, Button, Collapse, BoxTitle, Accordion, Alert } from './../../styles';
/* Styles */

const CollapsePage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isNestedOpen, setIsNestedOpen] = useState(false);
    const [isNestedSubOpen, setIsNestedSubOpen] = useState(false);

    const accordionItems = [
        {
            key : 'Button 1',
            body : (
                <div>
                    <Alert type="success" icon={true} message="Successfully transfer all data."/>
                    Successfully deploy to staging.
                    &nbsp;<Button label="Go To Site" icon="fa fa-chevron-right" color="primary"/>
                </div>
            )
        },
        {
            key : 'Button 2',
            body : "Lorem ipsup dolor sir amet"
        }
    ];

    return(
        <div>
            <div className="title">
                Collapse
                <div className="sub-title">
                    <i className="fa fa-info-circle"></i> toggle visibility of content.
                </div>
            </div>

            <div className="body">
                <Container>
                    <Row>
                        <Box sm={12} md={12} lg={12}>
                            <BoxTitle label="Default Collapse"/>
                            <Button label="Toggle" handleClick={() => { setIsOpen(!isOpen) }}/>
                            <br/>
                            <br/>
                            <Collapse isOpen={isOpen}>
                                <div className="card card-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                </div>
                            </Collapse>
                        </Box>
                    </Row>
                    <Row>
                        <Box sm={12} md={12} lg={12}>
                            <BoxTitle label="Nested Collapse"/>
                            <Button label="Toggle" handleClick={() => { setIsNestedOpen(!isNestedOpen) }}/>
                            <br/>
                            <br/>
                            <Collapse isOpen={isNestedOpen}>
                                <div className="card card-body">  
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                    <Collapse isOpen={isNestedSubOpen}>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                    </Collapse>
                                    <a className="link" onClick={() => { setIsNestedSubOpen(!isNestedSubOpen) }}>
                                        {isNestedSubOpen ? 
                                        (
                                            <div><i className="fa fa-chevron-up"></i> Show Less</div>
                                        ) : (<div><i className="fa fa-chevron-down"></i> Show More</div>)}
                                    </a>
                                </div>
                            </Collapse>
                        </Box>
                    </Row>
                    <Row>
                        <Box sm={12} md={12} lg={12}>
                            <BoxTitle label="Accordion"/>
                            <Accordion items={accordionItems}/>
                        </Box>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default CollapsePage;