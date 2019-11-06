import React, { Fragment, useState } from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const Menu = (props) => {
    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';

    //get label
    const label = typeof props.label !== 'undefined' ? props.label : '';

    //get children
    const children = typeof props.children !== 'undefined' ? props.children : '';

    //get id
    const id = typeof props.id !== 'undefined' ? props.id : '';

    //get is submenu
    const isSubmenu = typeof props.isSubmenu !== 'undefined' ? props.isSubmenu : false;

    //hooks
    const [openSubmenu, setOpenSubmenu] = useState(false);

    //custom attr
    let attrs = {};
    if(id !== ''){
        attrs['id'] = id;
    }

    return(
        <Fragment>
            { isSubmenu ? (
                //submenu
                <li onClick={(e) => {
                    setOpenSubmenu(!openSubmenu)
                }}>
                    <a href="#!">
                        {/* show label */}
                        { label }
        
                        { children!=='' ? (
                            <label title="Toggle Drop-down" className="drop-icon" htmlFor="menu-dashboard">▾</label>
                        ) : '' }
                    </a>
                    <input type="checkbox" { ...attrs } checked={openSubmenu} onChange={(e) => setOpenSubmenu(e.checked)}/>
                    <ul className="sub-menu">
                        { children }
                    </ul>
                </li>
            ) : (
                //normal menu
                children
            ) }
        </Fragment>

        
    );
}

//prop types initialize
Menu.propTypes = {
    style : PropTypes.object,
    className: PropTypes.string,
    isSubmenu: PropTypes.bool,
    id: PropTypes.any,
    label: PropTypes.any
}

export default Menu;