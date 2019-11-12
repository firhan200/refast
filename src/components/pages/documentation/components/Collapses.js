import React, { useState, Fragment } from 'react';
import DocsExample from './../DocsExample';
import { 
    Collapse,
    Accordion,
    Alert,
    Button
} from '../../../styles';

const Collapses = () => {
    //hooks
    const [isOpen, setIsOpen] = useState(false);
    const [isNestedOpen, setIsNestedOpen] = useState(false);
    const [isNestedSubOpen, setIsNestedSubOpen] = useState(false);

    //accordion items
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

    return (
        <Fragment>
            <DocsExample 
                title="Collapse"
                example={(
                    <div>
                        {/* button toggle */}
                        <Button 
                            style={{ marginBottom: '10px' }} 
                            label="Toggle" 
                            handleClick={() => { setIsOpen(!isOpen) }}/>

                        {/* collapse component */}
                        <Collapse isOpen={isOpen}>
                            <div className="card card-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                        </Collapse>
                    </div>
                )}
                code={(
`import React, { useState } from 'react';
import { Collapse } from './styles';

const Collapses = () => {
    return(
        //hooks
        const [isOpen, setIsOpen] = useState(false);

        <div>
            {/* button toggle */}
            <Button 
                style={{ marginBottom: '10px' }} 
                label="Toggle" 
                handleClick={() => { setIsOpen(!isOpen) }}/>

            {/* collapse component */}
            <Collapse isOpen={isOpen}>
                <div className="card card-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
            </Collapse>
        </div>
    )
}

export default Collapses;
`
                )}
                properties={(
`Collapse.propTypes = {
    className : PropTypes.string, //your custom styling class here
    style : PropTypes.object, //your custom style object here
    isOpen : PropTypes.bool, //is collapse is open
}`
                )}
            />

            <DocsExample 
                title="Nested Collapse"
                example={(
                    <div>
                        {/* button toggle */}
                        <Button 
                            style={{ marginBottom: '10px' }} 
                            label="Toggle" 
                            handleClick={() => { setIsNestedOpen(!isNestedOpen) }}/>

                        {/* collapse component */}
                        <Collapse isOpen={isNestedOpen}>
                            <div className="card card-body">  
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                                {/* nested collapse */}
                                <Collapse isOpen={isNestedSubOpen}>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                </Collapse>

                                {/* nested collapse toggle */}
                                <span className="link" onClick={() => { setIsNestedSubOpen(!isNestedSubOpen) }}>
                                    {isNestedSubOpen ? 
                                    (
                                        <div><i className="fa fa-chevron-up"></i> Show Less</div>
                                    ) : (<div><i className="fa fa-chevron-down"></i> Show More</div>)}
                                </span>
                            </div>
                        </Collapse>
                    </div>
                )}
                code={(
`import React, { useState } from 'react';
import { Collapse } from './styles';

const Collapses = () => {
    return(
        //hooks
        const [isNestedOpen, setIsNestedOpen] = useState(false);
        const [isNestedSubOpen, setIsNestedSubOpen] = useState(false);

        <div>
            {/* button toggle */}
            <Button 
                style={{ marginBottom: '10px' }} 
                label="Toggle" 
                handleClick={() => { setIsNestedOpen(!isNestedOpen) }}/>

            {/* collapse component */}
            <Collapse isOpen={isNestedOpen}>
                <div className="card card-body">  
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                    {/* nested collapse */}
                    <Collapse isOpen={isNestedSubOpen}>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                    </Collapse>

                    {/* nested collapse toggle */}
                    <span className="link" onClick={() => { setIsNestedSubOpen(!isNestedSubOpen) }}>
                        {isNestedSubOpen ? 
                        (
                            <div><i className="fa fa-chevron-up"></i> Show Less</div>
                        ) : (<div><i className="fa fa-chevron-down"></i> Show More</div>)}
                    </span>
                </div>
            </Collapse>
        </div>
    )
}

export default Collapses;
`
                )}
            />

            <DocsExample 
                title="Accordion"
                example={(
                    <Accordion items={accordionItems}/>
                )}
                code={(
`import React, { useState } from 'react';
import { Accordion, Alert, Button } from './styles';

const Collapses = () => {
    //accordion items
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
        <Accordion items={accordionItems}/>
    )
}

export default Collapses;
`
                )}

                properties={(
`Accordion.propTypes = {
    style : PropTypes.object, //your custom style object here
    className : PropTypes.string, //your custom styling class here
    items : PropTypes.array, //array of accordion items
    id : PropTypes.string //acordion id attribute
}`
                )}
            />

        </Fragment>
    )
}

export default Collapses;