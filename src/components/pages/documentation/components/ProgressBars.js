import React, { Fragment } from 'react';
import DocsExample from './../DocsExample';
import { 
    Row,
    Col,
    BoxTitle,
    ProgressBar,
    Container
} from '../../../styles';

const ProgressBars = () => {
    return (
        <Fragment>
            <DocsExample 
                title="Progress Bar"
                example={(
                    <Row>
                        <Col md={4}>
                            <BoxTitle label="Small Progress Bar"/>
                            <ProgressBar size="small" percentage={55}/>
                        </Col>
                        <Col md={4}>
                            <BoxTitle label="Default Progress Bar"/>
                            <ProgressBar percentage={40}/>
                        </Col>
                        <Col md={4}>
                            <BoxTitle label="Large Progress Bar"/>
                            <ProgressBar size="large" percentage={70}/>
                        </Col>
                    </Row>
                )}
                code={(
`import React from 'react';
import { Row, Col, BoxTitle, ProgressBar } from './styles';

const ProgressBars = () => {
    return(
        <Row>
            <Col md={4}>
                <BoxTitle label="Small Progress Bar"/>
                <ProgressBar size="small" percentage={55}/>
            </Col>
            <Col md={4}>
                <BoxTitle label="Default Progress Bar"/>
                <ProgressBar percentage={40}/>
            </Col>
            <Col md={4}>
                <BoxTitle label="Large Progress Bar"/>
                <ProgressBar size="large" percentage={70}/>
            </Col>
        </Row>
    )
}

export default ProgressBars;
`
                )}
                properties={(
`ProgressBar.propTypes = {
    className : PropTypes.string, //your custom styling class here
    percentage : PropTypes.number, //progress percentage
    size : PropTypes.oneOf(['small', 'medium', 'large']), //progress bar size
    label : PropTypes.any, //label text
    labelPosition : PropTypes.oneOf(['left', 'center', 'right']), //label text position
    showLabel : PropTypes.bool, //is show label text
    color : PropTypes.string //progress bar color, 
    //color can be: primary, danger, warning, info, success or custom color like #BDBDBD
}`
                )}
            />

            <DocsExample 
                title="Progress Bar Colors"
                example={(
                    <Container>
                        <Row>
                            <Col md={4}>
                                <ProgressBar percentage={55} color="primary" />
                            </Col>
                            <Col md={4}>
                                <ProgressBar percentage={40} color="success"/>
                            </Col>
                            <Col md={4}>
                                <ProgressBar percentage={40} color="danger"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <ProgressBar percentage={55} color="warning" />
                            </Col>
                            <Col md={4}>
                                <ProgressBar percentage={40} color="info"/>
                            </Col>
                            <Col md={4}>
                                <ProgressBar percentage={40} color="#696969"/>
                            </Col>
                        </Row>
                    </Container>
                )}
                code={(
`import React from 'react';
import { Container, Row, Col, ProgressBar } from './styles';

const ProgressBars = () => {
    return(
        <Container>
            <Row>
                <Col md={4}>
                    <ProgressBar percentage={55} color="primary" />
                </Col>
                <Col md={4}>
                    <ProgressBar percentage={40} color="success"/>
                </Col>
                <Col md={4}>
                    <ProgressBar percentage={40} color="danger"/>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <ProgressBar percentage={55} color="warning" />
                </Col>
                <Col md={4}>
                    <ProgressBar percentage={40} color="info"/>
                </Col>
                <Col md={4}>
                    <ProgressBar percentage={40} color="#696969"/>
                </Col>
            </Row>
        </Container>
    )
}

export default ProgressBars;
`
                )}
            />

            <DocsExample 
                title="Progress Bar Label"
                example={(
                    <Row>
                        <Col md={4}>
                            <ProgressBar size="small" label="55%" showLabel={true} labelPosition="left" percentage={55}/>
                        </Col>
                        <Col md={4}>
                            <ProgressBar label="40GB / 100GB" percentage={40} showLabel={true} labelPosition="center"/>
                        </Col>
                        <Col md={4}>
                            <ProgressBar label="14ms / 20ms" size="large" showLabel={true} labelPosition="right" percentage={70}/>
                        </Col>
                    </Row>
                )}
                code={(
`import React from 'react';
import { Row, Col, ProgressBar } from './styles';

const ProgressBars = () => {
    return(
        <Row>
            <Col md={4}>
                <ProgressBar 
                    size="small" 
                    label="55%" 
                    showLabel={true} 
                    labelPosition="left" 
                    percentage={55}/>
            </Col>
            <Col md={4}>
                <ProgressBar 
                    label="40GB / 100GB" 
                    percentage={40} 
                    showLabel={true} 
                    labelPosition="center"/>
            </Col>
            <Col md={4}>
                <ProgressBar 
                    label="14ms / 20ms" size="large" 
                    showLabel={true} 
                    labelPosition="right" 
                    percentage={70}/>
            </Col>
        </Row>
    )
}

export default ProgressBars;
`
                )}
            />
        </Fragment>
    )
}

export default ProgressBars;