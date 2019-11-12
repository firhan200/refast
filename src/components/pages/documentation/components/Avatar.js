import React, { Fragment } from 'react';
import DocsExample from './../DocsExample';
import { 
    Avatar
} from '../../../styles';

const Avatars = () => {
    return (
        <Fragment>
            <DocsExample 
                title="Avatar"
                example={(
                    <div>
                        <Avatar style={{ marginBottom: '10px' }} size="small" src="/images/avatar.png"/>
                        <Avatar style={{ marginBottom: '10px' }} size="medium" src="/images/avatar.png"/>
                        <Avatar size="large" src="/images/avatar.png"/>
                    </div>
                )}
                code={(
`import React from 'react';
import { Avatar } from './styles';

const Avatars = () => {
    return(
        <div>
            <Avatar style={{ marginBottom: '10px' }} size="small" src="/images/avatar.png"/>
            <Avatar style={{ marginBottom: '10px' }} size="medium" src="/images/avatar.png"/>
            <Avatar size="large" src="/images/avatar.png"/>
        </div>
    )
}

export default Avatars;
`
                )}
                properties={(
`Avatar.propTypes = {
    style : PropTypes.object, //your custom style object here
    className : PropTypes.string, //your custom styling class here
    alt : PropTypes.string, //avatar image alt properties
    src : PropTypes.string, //image source
    size : PropTypes.oneOf(['small', 'medium', 'large']), //avatar size
}`
                )}
            />

        </Fragment>
    )
}

export default Avatars;