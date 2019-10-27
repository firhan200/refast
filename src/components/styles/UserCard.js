import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const UserCard = (props) => {
    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';

    //get avatar
    const avatar = typeof props.avatar !== 'undefined' ? props.avatar : '';

    //get title
    const title = typeof props.title !== 'undefined' ? props.title : '';

    //get sub title
    const subTitle = typeof props.subTitle !== 'undefined' ? props.subTitle : '';

    return(
        <div className={'custom-user-card ' + customClassName}>
            <div className="top-bg"></div>
            <div className="frame">
                <img alt={""} src={avatar}/>
            </div>
            <div className="title">
                { title }
            </div>
            <div className="sub-title">
                { subTitle }
            </div>
            <div className="user-card-child">
                { props.children }
            </div>
        </div>
    );
}

//prop types initialize
UserCard.propTypes = {
    className: PropTypes.string,
    avatar: PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.string,
}

export default UserCard;