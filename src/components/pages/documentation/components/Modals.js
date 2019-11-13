import React, { Fragment, useState } from 'react';
import DocsExample from './../DocsExample';
import { 
    Modal, Button, Row, Col
} from '../../../styles';

const Modals = () => {
    //hooks
    const [showModal, setShowModal] = useState(false);
    const [showSmallModal, setShowSmallModal] = useState(false);
    const [showLargeModal, setShowLargeModal] = useState(false);

    return (
        <Fragment>
            <DocsExample 
                title="Modals"
                example={(
                    <div>
                        <Button
                            handleClick={() => setShowModal(true)} 
                            label="Show Modal"/>
                        
                        {/* Modal */}
                        <Modal
                            title="Modal Title"
                            isShow={ showModal }
                            handleButtonCloseClick={() => setShowModal(false)}>

                            {/* Modal Body */}
                            Modal body

                        </Modal>
                    </div>
                )}
                code={(
`import React, { useState } from 'react';
import { Modal } from './styles';

const Modals = () => {
    //hooks
    const [showModal, setShowModal] = useState(false);

    return(
        <div>
            <Button
                handleClick={() => setShowModal(true)} 
                label="Show Modal"/>
            
            {/* Modal */}
            <Modal
                title="Modal Title"
                isShow={ showModal }
                handleButtonCloseClick={() => setShowModal(false)}>

                {/* Modal Body */}
                Modal body

            </Modal>
        </div>
    )
}

export default Modals;
`
                )}
                properties={(
`Modal.propTypes = {
    style : PropTypes.object, //your custom style object here
    className : PropTypes.string, //your custom styling class here
    isShow : PropTypes.bool, //is modal show
    handleButtonCloseClick : PropTypes.func, //handle cross icon close modal button click
    size : PropTypes.oneOf(['small', 'medium', 'large']), //modal size
}`
                )}
            />

            <DocsExample 
                title="Modals Size"
                example={(
                    <Row>
                        {/* Small Modal */}
                        <Col md={6}>
                            <Button
                                handleClick={() => setShowSmallModal(true)} 
                                label="Small Modal"/>
                            
                            {/* Modal */}
                            <Modal
                                title="Modal Title"
                                size="small"
                                isShow={ showSmallModal }
                                handleButtonCloseClick={() => setShowSmallModal(false)}>

                                {/* Modal Body */}
                                Modal body

                            </Modal>
                        </Col>

                        {/* Large Modal */}
                        <Col md={6}>
                            <Button
                                handleClick={() => setShowLargeModal(true)} 
                                label="Large Modal"/>
                            
                            {/* Modal */}
                            <Modal
                                title="Modal Title"
                                size="large"
                                isShow={ showLargeModal }
                                handleButtonCloseClick={() => setShowLargeModal(false)}>

                                {/* Modal Body */}
                                Modal body

                            </Modal>
                        </Col>
                    </Row>
                )}
                code={(
`import React, { useState } from 'react';
import { Row, Col, Modal } from './styles';

const Modals = () => {
    //hooks
    const [showSmallModal, setShowSmallModal] = useState(false);
    const [showLargeModal, setShowLargeModal] = useState(false);

    return(
        <Row>
            {/* Small Modal */}
            <Col md={6}>
                <Button
                    handleClick={() => setShowSmallModal(true)} 
                    label="Small Modal"/>
                
                {/* Modal */}
                <Modal
                    title="Modal Title"
                    size="small"
                    isShow={ showSmallModal }
                    handleButtonCloseClick={() => setShowSmallModal(false)}>

                    {/* Modal Body */}
                    Modal body

                </Modal>
            </Col>

            {/* Large Modal */}
            <Col md={6}>
                <Button
                    handleClick={() => setShowLargeModal(true)} 
                    label="Large Modal"/>
                
                {/* Modal */}
                <Modal
                    title="Modal Title"
                    size="large"
                    isShow={ showLargeModal }
                    handleButtonCloseClick={() => setShowLargeModal(false)}>

                    {/* Modal Body */}
                    Modal body

                </Modal>
            </Col>
        </Row>
    )
}

export default Modals;
`
                )}
            />

        </Fragment>
    )
}

export default Modals;