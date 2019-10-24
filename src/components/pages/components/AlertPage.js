import React from 'react';

/* Styles */
import { Box, BoxTitle, Row, Container, Alert } from './../../styles';
/* Styles */

const AlertPage = () => {
    return(
        <div>
            <div className="title">
                Alerts
                <div className="sub-title">
                    <i className="fa fa-info-circle"></i> show text messages with colorful background and informative icon.
                </div>
            </div>

            <div className="body">
                <Container>
                    <Row>
                        <Box md={6}>
                            <BoxTitle label="Alerts with icon"/>
                            <Alert type="success" icon={true} message="Successfully transfer all data."/>
                            <Alert type="danger" icon={true} message="Failed to run backup."/>
                            <Alert type="primary" icon={true} message="John has confirmed the order."/>
                            <Alert type="warning" icon={true} message="Storage are running low!."/>
                            <Alert type="info" icon={true} message="John has confirmed the order."/>
                        </Box>
                        <Box md={6}>
                            <BoxTitle label="Alerts without icon"/>
                            <Alert type="success" message="Successfully transfer all data."/>
                            <Alert type="danger" message="Failed to run backup."/>
                            <Alert type="primary" message="John has confirmed the order."/>
                            <Alert type="warning" message="Storage are running low!."/>
                            <Alert type="info" message="John has confirmed the order."/>
                        </Box>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default AlertPage;