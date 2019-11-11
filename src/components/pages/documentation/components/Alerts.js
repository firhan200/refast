import React, { Fragment } from 'react';
import DocsExample from './../DocsExample';
import { 
    Alert
} from '../../../styles';

const Alerts = () => {
    return (
        <Fragment>
            <DocsExample 
                title="Alerts"
                example={(
                    <div>
                        <Alert type="success" message="Successfully transfer all data."/>
                        <Alert type="danger" message="Failed to run backup."/>
                        <Alert type="primary" message="John has confirmed the order."/>
                        <Alert type="warning"  message="Storage are running low!."/>
                        <Alert type="info" message="John has confirmed the order."/>
                    </div>
                )}
                code={(
`import React from 'react';
import { Alert } from './styles';

const Alerts = () => {
    return(
        <div>
            <Alert type="success" message="Successfully transfer all data."/>
            <Alert type="danger" message="Failed to run backup."/>
            <Alert type="primary" message="John has confirmed the order."/>
            <Alert type="warning"  message="Storage are running low!."/>
            <Alert type="info" message="John has confirmed the order."/>
        </div>
    )
}

export default Alerts;
`
                )}
                properties={(
`Alert.propTypes = {
    style : PropTypes.object, //your custom style object here
    className: PropTypes.string, //your custom styling class here
    message: PropTypes.string, //alert message text
    type: PropTypes.oneOf(['primary', 'success', 'danger', 'warning', 'info']), //alert type color
    icon: PropTypes.bool //is show alert icon
}`
                )}
            />
            
            <DocsExample 
                title="Alerts with Icon"
                example={(
                    <div>
                        <Alert type="success" icon={true} message="Successfully transfer all data."/>
                        <Alert type="danger" icon={true} message="Failed to run backup."/>
                        <Alert type="primary" icon={true} message="John has confirmed the order."/>
                        <Alert type="warning"  icon={true} message="Storage are running low!."/>
                        <Alert type="info" icon={true} message="John has confirmed the order."/>
                    </div>
                )}
                code={(
`import React from 'react';
import { Alert } from './styles';

const Alerts = () => {
    return(
        <div>
            <Alert type="success" icon={true} message="Successfully transfer all data."/>
            <Alert type="danger" icon={true} message="Failed to run backup."/>
            <Alert type="primary" icon={true} message="John has confirmed the order."/>
            <Alert type="warning"  icon={true} message="Storage are running low!."/>
            <Alert type="info" icon={true} message="John has confirmed the order."/>
        </div>
    )
}

export default Alerts;
`
                )}
            />
        </Fragment>
    )
}

export default Alerts;