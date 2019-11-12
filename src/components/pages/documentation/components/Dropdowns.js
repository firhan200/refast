import React, { Fragment } from 'react';
import DocsExample from './../DocsExample';
import { 
    Row,
    Col,
    Dropdown,
    DropdownItem
} from '../../../styles';

const Dropdowns = () => {
    return (
        <Fragment>
            <DocsExample 
                title="Dropdowns"
                example={(
                    <div>
                        <Row>
                            <Col sm={12} md={4}>
                                <Dropdown 
                                    icon="fa fa-user" 
                                    size="small" 
                                    label="Dropdown" 
                                    position="bottom">
                                    <DropdownItem>Link 1</DropdownItem>
                                    <DropdownItem>Link 2</DropdownItem>
                                    <DropdownItem disabled={true}>Link 2</DropdownItem>
                                    <div className="dropdown-divider"></div>
                                    <DropdownItem>Link 3</DropdownItem>
                                </Dropdown>
                            </Col>
                            <Col sm={12} md={4}>
                                <Dropdown 
                                    icon="fa fa-cog" 
                                    size="medium" 
                                    color="info"
                                    label="Actions" 
                                    position="bottom">
                                    <DropdownItem>Pin</DropdownItem>
                                    <DropdownItem>Archive</DropdownItem>
                                    <DropdownItem>Delete</DropdownItem>
                                </Dropdown>
                            </Col>
                            <Col sm={12} md={4}>
                                <Dropdown 
                                    icon="fa fa-print" 
                                    color="success"
                                    size="large" 
                                    label="Export" 
                                    position="bottom">
                                    <DropdownItem>PDF</DropdownItem>
                                    <DropdownItem>Excel</DropdownItem>
                                    <DropdownItem>CSV</DropdownItem>
                                </Dropdown>
                            </Col>
                        </Row>
                    </div>
                )}
                code={(
`import React from 'react';
import { 
    Row,
    Col,
    Dropdown,
    DropdownItem } from './styles';

const Dropdowns = () => {
    return(
        <div>
            <Row>
                <Col sm={12} md={4}>
                    <Dropdown 
                        icon="fa fa-user" 
                        size="small" 
                        label="Dropdown" 
                        position="bottom">
                        <DropdownItem>Link 1</DropdownItem>
                        <DropdownItem>Link 2</DropdownItem>
                        <DropdownItem disabled={true}>Link 2</DropdownItem>
                        <div className="dropdown-divider"></div>
                        <DropdownItem>Link 3</DropdownItem>
                    </Dropdown>
                </Col>
                <Col sm={12} md={4}>
                    <Dropdown 
                        icon="fa fa-cog" 
                        size="medium" 
                        color="info"
                        label="Actions" 
                        position="bottom">
                        <DropdownItem>Pin</DropdownItem>
                        <DropdownItem>Archive</DropdownItem>
                        <DropdownItem>Delete</DropdownItem>
                    </Dropdown>
                </Col>
                <Col sm={12} md={4}>
                    <Dropdown 
                        icon="fa fa-print" 
                        color="success"
                        size="large" 
                        label="Export" 
                        position="bottom">
                        <DropdownItem>PDF</DropdownItem>
                        <DropdownItem>Excel</DropdownItem>
                        <DropdownItem>CSV</DropdownItem>
                    </Dropdown>
                </Col>
            </Row>
        </div>
    )
}

export default Dropdowns;
`
                )}
                properties={(
`Dropdown.propTypes = {
    className: PropTypes.string, //your custom style class
    label: PropTypes.string, //button label
    color: PropTypes.string, //button toggle dropdown color
    size: PropTypes.string, //button size
    icon: PropTypes.string, //icon on button
    disabled: PropTypes.bool, //is button dropdown disabled
    hasArrowIcon: PropTypes.bool, //is show arrow on dropdown
    position: PropTypes.oneOf(["top", "bottom", "left", "right"]), //dropdown body show position
}`
                )}
            />

            <DocsExample 
                title="Dropdown Positions"
                example={(
                    <div>
                        <Row>
                            <Col sm={12} md={3}>
                                <Dropdown 
                                    label="Right"
                                    size="medium" 
                                    position="right">
                                    <DropdownItem>Link</DropdownItem>
                                    <DropdownItem>Link</DropdownItem>
                                </Dropdown>
                            </Col>
                            <Col sm={12} md={3}>
                                <Dropdown 
                                    label="Bottom"
                                    size="medium" 
                                    position="bottom">
                                    <DropdownItem>Link</DropdownItem>
                                    <DropdownItem>Link</DropdownItem>
                                </Dropdown>
                            </Col>
                            <Col sm={12} md={3}>
                                <Dropdown 
                                    label="Left"
                                    size="medium" 
                                    position="left">
                                    <DropdownItem>Link</DropdownItem>
                                    <DropdownItem>Link</DropdownItem>
                                </Dropdown>
                            </Col>
                            <Col sm={12} md={3}>
                                <Dropdown 
                                    label="top"
                                    size="medium" 
                                    position="top">
                                    <DropdownItem>Link</DropdownItem>
                                    <DropdownItem>Link</DropdownItem>
                                </Dropdown>
                            </Col>
                        </Row>
                    </div>
                )}
                code={(
`import React from 'react';
import { 
    Row,
    Col,
    Dropdown,
    DropdownItem } from './styles';

const Dropdowns = () => {
    return(
        <div>
            <Row>
                <Col sm={12} md={3}>
                    <Dropdown 
                        label="Right"
                        size="medium" 
                        position="right">
                        <DropdownItem>Link</DropdownItem>
                        <DropdownItem>Link</DropdownItem>
                    </Dropdown>
                </Col>
                <Col sm={12} md={3}>
                    <Dropdown 
                        label="Bottom"
                        size="medium" 
                        position="bottom">
                        <DropdownItem>Link</DropdownItem>
                        <DropdownItem>Link</DropdownItem>
                    </Dropdown>
                </Col>
                <Col sm={12} md={3}>
                    <Dropdown 
                        label="Left"
                        size="medium" 
                        position="left">
                        <DropdownItem>Link</DropdownItem>
                        <DropdownItem>Link</DropdownItem>
                    </Dropdown>
                </Col>
                <Col sm={12} md={3}>
                    <Dropdown 
                        label="top"
                        size="medium" 
                        position="top">
                        <DropdownItem>Link</DropdownItem>
                        <DropdownItem>Link</DropdownItem>
                    </Dropdown>
                </Col>
            </Row>
        </div>
    )
}

export default Dropdowns;
`
                )}
            />

            <DocsExample 
                title="Dropdown Variations"
                example={(
                    <div>
                        <Row>
                            {/* no label right position */}
                            <Col sm={12} md={4}>
                                <Dropdown 
                                    icon="fa fa-print"
                                    size="medium" 
                                    position="right">
                                    <DropdownItem>Export</DropdownItem>
                                    <DropdownItem>Import</DropdownItem>
                                </Dropdown>
                            </Col>

                            {/* no icon no arrow */}
                            <Col sm={12} md={4}>
                                <Dropdown 
                                    label="Download"
                                    hasArrowIcon={false}
                                    color="danger"
                                    size="medium" 
                                    position="bottom">
                                    <DropdownItem>.png</DropdownItem>
                                    <DropdownItem>.svg</DropdownItem>
                                </Dropdown>
                            </Col>

                            {/* only icon */}
                            <Col sm={12} md={4}>
                                <Dropdown 
                                    icon="fa fa-shopping-bag"
                                    hasArrowIcon={false}
                                    size="medium" 
                                    position="left">
                                    <DropdownItem>Shoes (2)</DropdownItem>
                                    <DropdownItem>T-Shirt (5)</DropdownItem>
                                    <DropdownItem>Pants (1)</DropdownItem>
                                </Dropdown>
                            </Col>
                        </Row>
                    </div>
                )}
                code={(
`import React from 'react';
import { 
    Row,
    Col,
    Dropdown,
    DropdownItem } from './styles';

const Dropdowns = () => {
    return(
        <div>
            <Row>
                {/* no label right position */}
                <Col sm={12} md={4}>
                    <Dropdown 
                        icon="fa fa-print"
                        size="medium" 
                        position="right">
                        <DropdownItem>Export</DropdownItem>
                        <DropdownItem>Import</DropdownItem>
                    </Dropdown>
                </Col>

                {/* no icon no arrow */}
                <Col sm={12} md={4}>
                    <Dropdown 
                        label="Download"
                        hasArrowIcon={false}
                        color="danger"
                        size="medium" 
                        position="bottom">
                        <DropdownItem>.png</DropdownItem>
                        <DropdownItem>.svg</DropdownItem>
                    </Dropdown>
                </Col>

                {/* only icon */}
                <Col sm={12} md={4}>
                    <Dropdown 
                        icon="fa fa-shopping-bag"
                        hasArrowIcon={false}
                        size="medium" 
                        position="left">
                        <DropdownItem>Shoes (2)</DropdownItem>
                        <DropdownItem>T-Shirt (5)</DropdownItem>
                        <DropdownItem>Pants (1)</DropdownItem>
                    </Dropdown>
                </Col>
            </Row>
        </div>
    )
}

export default Dropdowns;
`
                )}
            />
        </Fragment>
    )
}

export default Dropdowns;