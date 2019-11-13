import React, { useEffect, useState } from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

//jquery
import $ from 'jquery';
window.$ = $;

const Modal = (props) => {
    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';

    //get size
    const size = typeof props.size !== 'undefined' ? ' '+props.size+' ' : ' medium ';

    // my modal ref
    let myModal = React.createRef();

    //is modal open
    const isShow = typeof props.isShow !== 'undefined' ? props.isShow : false;
    //hooks
    const [modalShow, setModalShow] = useState(isShow);

    useEffect(() => {
        //trigger modal to show or hide
        if(modalShow){
            $(myModal.current).modal('show');
        }else{
            $(myModal.current).modal('hide');
        }
    }, [myModal, modalShow])

    return(
        /* Modal */
        <div ref={myModal} style={props.style} className={"modal fade" + size + customClassName}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <button align="right" onClick={() => {
                        setModalShow(false)
                    }} type="button" className="close">
                        <span aria-hidden="true">&times;</span>
                    </button>

                    { props.children }
                </div>
            </div>
        </div>
    );
}

//prop types initialize
Modal.propTypes = {
    style : PropTypes.object,
    className : PropTypes.string,
    isShow : PropTypes.bool,
    size : PropTypes.oneOf(['small', 'medium', 'large']),
}

export default Modal;