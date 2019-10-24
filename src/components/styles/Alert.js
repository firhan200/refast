import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const Alert = (props) => {
    //get alert type
    const alertType = typeof props.type !== 'undefined' ? props.type : '';

    //get alert message
    const alertMessage = typeof props.message !== 'undefined' ? props.message : '';

    //get alert icon
    const withIcon = typeof props.icon !== 'undefined' ? props.icon : false;
    let alertIcon = '';
    if(withIcon){
        switch(alertType.toLowerCase()){
            case 'success':
                alertIcon = 'fa fa-check-circle'
                break;
            case 'danger':
                alertIcon = 'fa fa-exclamation'
                break;
            case 'warning':
                alertIcon = 'fa fa-info-circle'
                break;
            case 'primary':
                alertIcon = 'fa fa-star'
                break;
            case 'info':
                alertIcon = 'fa fa-paper-plane'
                break;
        }
    }

    return(
        <div className={"custom-alert alert alert-"+alertType+""} role="alert">
            { withIcon ? (
                <div className="alert-icon">
                    <i className={alertIcon}></i>
                </div>
            ) : '' }
            <div className="alert-message">
                { alertMessage }
            </div>
        </div>
    );
}

//prop types initialize
Alert.propTypes = {
    message: PropTypes.string,
    type: PropTypes.string,
    icon: PropTypes.bool
}

export default Alert;