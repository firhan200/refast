import React, {Fragment} from 'react';

/* components */
/* components */

const BlankLayout = (props) => {
    return(
        <Fragment>
            {/* set container width to all content */}
            <div className="container content">
                <div className="row">
                    <div className="col-sm-12">

                        {/* render children content */}
                        { props.children }

                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default BlankLayout;