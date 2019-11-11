import React, { Fragment } from 'react';
import DocsExample from './../DocsExample';
import { 
    Button
} from '../../../styles';

const Buttons = () => {
    return (
        <Fragment>
            <DocsExample 
                title="Buttons"
                example={(
                    <div>
                        <Button style={{ marginRight : '20px' }} label="Primary" color="primary"/>
                        <Button style={{ marginRight : '20px' }} label="Success" color="success"/>
                        <Button style={{ marginRight : '20px' }} label="Danger" color="danger"/>
                        <Button style={{ marginRight : '20px' }} label="Warning" color="warning"/>
                        <Button label="Info" color="info"/>
                    </div>
                )}
                code={(
`import React from 'react';
import { Button } from './styles';

const Buttons = () => {
    return(
        <div>
            <Button style={{ marginRight : '20px' }} label="Primary" color="primary"/>
            <Button style={{ marginRight : '20px' }} label="Success" color="success"/>
            <Button style={{ marginRight : '20px' }} label="Danger" color="danger"/>
            <Button style={{ marginRight : '20px' }} label="Warning" color="warning"/>
            <Button label="Info" color="info"/>
        </div>
    )
}

export default Buttons;
`
                )}
                properties={(
`Button.propTypes = {
    style : PropTypes.object, //your custom style here
    className: PropTypes.string, //your custom styling class here
    id: PropTypes.string, //id attributes
    icon: PropTypes.string, //button icon class
    type: PropTypes.oneOf(['button', 'submit']), //button type
    color: PropTypes.string, //button color
    size: PropTypes.oneOf(['small', 'medium', 'large']), //button size
    label: PropTypes.string, //text label
    disabled: PropTypes.bool, //is button disabled
    isOutlined: PropTypes.bool, //is using outlined style
    isRounded: PropTypes.bool, //is button round
    isFull: PropTypes.bool, //is full width
    handleClick: PropTypes.func, //on button click
}`
                )}
            />
            
            <DocsExample 
                title="Buttons Size"
                example={(
                    <div>
                        <Button 
                            style={{ marginRight : '20px' }} 
                            size="small"
                            label="small" 
                            color="primary"/>
                        <Button 
                            style={{ marginRight : '20px' }} 
                            size="medium"
                            label="Medium" 
                            color="primary"/>
                        <Button 
                            style={{ marginRight : '20px' }} 
                            size="large"
                            label="Large" 
                            color="primary"/>
                    </div>
                )}
                code={(
`import React from 'react';
import { Button } from './styles';

const Buttons = () => {
    return(
        <div>
            <Button 
                style={{ marginRight : '20px' }} 
                size="small"
                label="small" 
                color="primary"/>
            <Button 
                style={{ marginRight : '20px' }} 
                size="medium"
                label="Medium" 
                color="primary"/>
            <Button 
                style={{ marginRight : '20px' }} 
                size="large"
                label="Large" 
                color="primary"/>
        </div>
    )
}

export default Buttons;
`
                )}
            />

            <DocsExample 
                title="Styled Button"
                example={(
                    <div>
                        {/* outlined button */}
                        <Button 
                            style={{ marginRight : '20px' }} 
                            isOutlined={true}
                            icon="fa fa-search"
                            size="medium"
                            label="Search" 
                            color="primary"/>

                        {/* round button */}
                        <Button 
                            style={{ marginRight : '20px' }} 
                            isRounded={true}
                            icon="fa fa-print"
                            size="medium"
                            color="success"/>

                        <hr/>

                        {/* full button */}
                        <Button 
                            isFull={true}
                            icon="fa fa-paper-plane"
                            label="Submit"
                            size="medium"
                            color="#53BDDF"/>
                    </div>
                )}
                code={(
`import React from 'react';
import { Button } from './styles';

const Buttons = () => {
    return(
        <div>
            {/* outlined button */}
            <Button 
                style={{ marginRight : '20px' }} 
                isOutlined={true}
                icon="fa fa-search"
                size="medium"
                label="Search" 
                color="primary"/>

            {/* round button */}
            <Button 
                style={{ marginRight : '20px' }} 
                isRounded={true}
                icon="fa fa-print"
                size="medium"
                color="success"/>

            <hr/>

            {/* full button */}
            <Button 
                isFull={true}
                icon="fa fa-paper-plane"
                label="Submit"
                size="medium"
                color="#53BDDF"/>
        </div>
    )
}

export default Buttons;
`
                )}
            />
        </Fragment>
    )
}

export default Buttons;