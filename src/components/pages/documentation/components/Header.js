import React, { Fragment } from 'react';
import DocsExample from './../DocsExample';
import { 
    H1,
    H2,
    H3,
    H4,
    H5,
} from '../../../styles';

const Header = () => {
    return (
        <Fragment>
            <DocsExample 
                title="Header"
                example={(
                    <div>
                        <H1>Header 1</H1>
                        <H2>Header 2</H2>
                        <H3>Header 3</H3>
                        <H4>Header 4</H4>
                        <H5>Header 5</H5>
                    </div>
                )}
                code={(
`import React from 'react';
import { Alert } from 'reactstrap';
import { H1, H2, H3, H4, H5 } from './styles';

const Header = () => {
    return(
        <div>
            <H1>Header 1</H1>
            <H2>Header 2</H2>
            <H3>Header 3</H3>
            <H4>Header 4</H4>
            <H5>Header 5</H5>
        </div>
    )
}

export default Header;
`
                )}
                properties={(
`H.propTypes = {
    style : PropTypes.object,
    className : PropTypes.string,
    align : PropTypes.oneOf(['left', 'center', 'right'])
}`
                )}
            />
            <DocsExample 
                title="Header Alignment"
                example={(
                    <div>
                        <H1 align="center">Header 1</H1>
                        <H2 align="right">Header 2</H2>
                        <H3 align="left">Header 3</H3>
                    </div>
                )}
                code={(
`import React from 'react';
import { Alert } from 'reactstrap';
import { H1, H2, H3 } from './styles';

const Header = () => {
    return(
        <div>
            <H1 align="center">Header 1</H1>
            <H2 align="right">Header 2</H2>
            <H3 align="left">Header 3</H3>
        </div>
    )
}

export default Header;
`
                )}
            />
        </Fragment>
    )
}

export default Header;