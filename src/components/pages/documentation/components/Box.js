import React, { Fragment } from 'react';
import DocsExample from './../DocsExample';
import { 
    Box,
    BoxTitle,
    Row
} from '../../../styles';

const BoxDocumentation = () => {
    return (
        <Fragment>
            <DocsExample 
                title="Box"
                example={(
                    <div>
                        <Row>
                            <Box sm={6} md={4} lg={3}>
                                small 6
                                <br/>
                                medium 4
                                <br/>
                                large 3
                            </Box>
                            <Box sm={6} md={8} lg={9}>
                                small 6
                                <br/>
                                medium 6
                                <br/>
                                large 9
                            </Box>
                        </Row>
                        <Row>
                            <Box md={8} mdOffset={2} lg={6} lgOffset={3}>
                                medium 8, offset 2
                                <br/>
                                large 6, offset 3
                            </Box>
                        </Row>
                    </div>
                )}
                code={(
`import React from 'react';
import { Row, Box } from './styles';

const Box = () => {
    return(
        <div>
            <Row>
                <Box sm={6} md={4} lg={3}>
                    small 6
                    <br/>
                    medium 4
                    <br/>
                    large 3
                </Box>
                <Box sm={6} md={8} lg={9}>
                    small 6
                    <br/>
                    medium 6
                    <br/>
                    large 9
                </Box>
            </Row>
            <Row>
                <Box md={8} mdOffset={2} lg={6} lgOffset={3}>
                    medium 8, offset 2
                    <br/>
                    large 6, offset 3
                </Box>
            </Row>
        </div>
    )
}

export default Box;
`
                )}
                properties={(
`Box.propTypes = {
    style : PropTypes.object, //your custom style object here
    className: PropTypes.string, //your custom class here
    xs: PropTypes.number,
    xsOffset: PropTypes.number,
    sm: PropTypes.number,
    smOffset: PropTypes.number,
    md: PropTypes.number,
    mdOffset: PropTypes.number,
    lg: PropTypes.number,
    lgOffset: PropTypes.number,
    isTransparent: PropTypes.bool, //is box white background or transparent
}`
                )}
            />
            <DocsExample 
                title="Box Title &amp; Icon"
                example={(
                    <div>
                        <Row>
                            <Box sm={4}>
                                <BoxTitle label="Title and Icon" icon="fa fa-bell"/>
                                Lorem ipsum dolor sit amet
                            </Box>
                            <Box sm={4}>
                                <BoxTitle label="Title Only"/>
                                Lorem ipsum dolor sit amet
                            </Box>
                            <Box sm={4}>
                                <BoxTitle icon="fa fa-comments"/>
                                Lorem ipsum dolor sit amet
                            </Box>
                        </Row>
                    </div>
                )}
                code={(
`import React from 'react';
import { Row, Box } from './styles';

const Box = () => {
    return(
        <div>
            <Row>
                <Box sm={4}>
                    <BoxTitle label="Title and Icon" icon="fa fa-bell"/>
                    Lorem ipsum dolor sit amet
                </Box>
                <Box sm={4}>
                    <BoxTitle label="Title Only"/>
                    Lorem ipsum dolor sit amet
                </Box>
                <Box sm={4}>
                    <BoxTitle icon="fa fa-comments"/>
                    Lorem ipsum dolor sit amet
                </Box>
            </Row>
        </div>
    )
}

export default Box;
`
                )}
            />
        </Fragment>
    )
}

export default BoxDocumentation;