import React, { Fragment } from 'react';
import DocsExample from './../DocsExample';
import { 
    Badge
} from '../../../styles';

const Badges = () => {
    return (
        <Fragment>
            <DocsExample 
                title="Badges"
                example={(
                    <div>
                        <Badge type="success" message="success"/>
                        <Badge type="danger" message="danger"/>
                        <Badge type="primary" message="primary"/>
                        <Badge type="warning" message="warning"/>
                        <Badge type="info" message="info"/>
                    </div>
                )}
                code={(
`import React from 'react';
import { Badge } from './styles';

const Badges = () => {
    return(
        <div>
            <Badge type="success" message="success"/>
            <Badge type="danger" message="danger"/>
            <Badge type="primary" message="primary"/>
            <Badge type="warning" message="warning"/>
            <Badge type="info" message="info"/>
        </div>
    )
}

export default Badges;
`
                )}
                properties={(
`Badge.propTypes = {
    style : PropTypes.object, //your custom style object here
    className: PropTypes.string, //your custom styling class here
    message: PropTypes.any, //badge text message
    type: PropTypes.oneOf(['primary', 'success', 'danger', 'warning', 'info']), //badge type color
    size: PropTypes.oneOf(["small", "medium", "large"]), //badge size
    icon: PropTypes.string //badge icon
}`
                )}
            />

            <DocsExample 
                title="Badges with Icon"
                example={(
                    <div>
                        <Badge type="success" icon="fa fa-check-circle" message="success"/>
                        <Badge type="danger" icon="fa fa-exclamation" message="danger"/>
                        <Badge type="primary" icon="fa fa-star" message="primary"/>
                        <Badge type="warning" icon="fa fa-info-circle" message="warning"/>
                        <Badge type="info" icon="fa fa-paper-plane" message="info"/>
                    </div>
                )}
                code={(
`import React from 'react';
import { Badge } from './styles';

const Badges = () => {
    return(
        <div>
            <Badge type="success" icon="fa fa-check-circle" message="success"/>
            <Badge type="danger" icon="fa fa-exclamation" message="danger"/>
            <Badge type="primary" icon="fa fa-star" message="primary"/>
            <Badge type="warning" icon="fa fa-info-circle" message="warning"/>
            <Badge type="info" icon="fa fa-paper-plane" message="info"/>
        </div>
    )
}

export default Badges;
`
                )}
            />

            <DocsExample 
                title="Badges with Image"
                example={(
                    <div>
                        <Badge 
                            type="success" 
                            icon="fa fa-lock"
                            image="/images/avatar.png"
                            message="Sarah Johnson"/>
                        <Badge 
                            type="primary" 
                            image="/images/avatar.png"
                            message="John Doe"/>
                    </div>
                )}
                code={(
`import React from 'react';
import { Badge } from './styles';

const Badges = () => {
    return(
        <div>
            <Badge 
                type="success" 
                icon="fa fa-lock"
                image="/images/avatar.png"
                message="Sarah Johnson"/>
            <Badge 
                type="primary" 
                image="/images/avatar.png"
                message="John Doe"/>
        </div>
    )
}

export default Badges;
`
                )}
            />

            <DocsExample 
                title="Badges size"
                example={(
                    <div>
                        <Badge 
                            style={{ marginRight : '20px' }}
                            size="small" 
                            type="primary" 
                            message={4}/>
                        <Badge 
                            style={{ marginRight : '20px' }}
                            size="medium" 
                            type="primary" 
                            image="/images/avatar.png" 
                            message="primary"/>
                        <Badge 
                            size="large" 
                            type="primary" 
                            icon="fa fa-check-circle" 
                            message="success"/>
                    </div>
                )}
                code={(
`import React from 'react';
import { Badge } from './styles';

const Badges = () => {
    return(
        <div>
            <Badge 
                style={{ marginRight : '20px' }}
                size="small" 
                type="primary" 
                message={4}/>
            <Badge 
                style={{ marginRight : '20px' }}
                size="medium" 
                type="primary" 
                image="/images/avatar.png" 
                message="primary"/>
            <Badge 
                size="large" 
                type="primary" 
                icon="fa fa-check-circle" 
                message="success"/>
        </div>
    )
}

export default Badges;
`
                )}
            />
        </Fragment>
    )
}

export default Badges;