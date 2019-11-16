import React, { useState } from 'react';

/* Styles */
import { Box, BoxTitle, Row, Container, Button, Modal } from './../../styles';
/* Styles */

const ModalPage = () => {
    //hooks
    const [showModal, setShowModal] = useState(false);
    const [showSmallModal, setShowSmallModal] = useState(false);
    const [showLargeModal, setShowLargeModal] = useState(false);

    return(
        <div>
            <div className="title">
                Modals
                <div className="sub-title">
                    <i className="fa fa-info-circle"></i> overlay content with fade background.
                </div>
            </div>

            <div className="body">
                <Container>
                    <Row>
                        <Box sm={12} md={4}>
                            <BoxTitle label="Modal"/>
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
                        </Box>
                        <Box sm={12} md={4}>
                            <BoxTitle label="Small Modal"/>
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
                        </Box>
                        <Box sm={12} md={4}>
                            <BoxTitle label="Large Modal"/>
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
                        </Box>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default ModalPage;