import React, { useEffect } from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

//styles
import H2 from './H2';

//jquery
import $ from 'jquery';
window.$ = $;


const Modal = (props) => {
    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';

    //get size
    const size = typeof props.size !== 'undefined' ? props.size : 'medium';
    let modalSize;
    switch(size){
        case 'small':
            modalSize = 'modal-sm'
            break;
        case 'medium':
            modalSize = ''
            break;
        case 'large':
            modalSize = 'modal-lg'
            break;
        default:
            modalSize = '';
            break;
    }

    // my modal ref
    let myModal = React.createRef();

    //is modal open
    const isShow = typeof props.isShow !== 'undefined' ? props.isShow : false;

    useEffect(() => {
        //trigger modal to show or hide
        if(isShow){
            $(myModal.current).modal('show');
        }else{
            $(myModal.current).modal('hide');
        }
    });

    return(
        /* Modal */
        <div ref={myModal} style={props.style} className={"custom-modal modal fade " + customClassName} data-keyboard="false" data-backdrop="static">
            <div className={"modal-dialog " + modalSize}>
                <div className="modal-content">
                    <div className="modal-header">
                        { typeof props.title !== 'undefined' ? (
                            <H2 className="modal-title">{ props.title }</H2>
                        ) : '' }
                        
                        <button align="right" onClick={ props.handleButtonCloseClick } type="button" className="close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    
                    {/* modal body */}
                    <div className="modal-body">
                        { props.children }
                    </div>
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
    handleButtonCloseClick : PropTypes.func,
    size : PropTypes.oneOf(['small', 'medium', 'large']),
}

export default Modal;