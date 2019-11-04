import React, {Fragment} from 'react';

/* components */
import Navbar from './Navbar.js';
import Menubar from './Menubar';
/* components */

const Adminlayout = (props) => {
    return(
        <Fragment>
            {/* Top navigation bar and Menu bar */}
            <Navbar />
            <Menubar />

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

export default Adminlayout;