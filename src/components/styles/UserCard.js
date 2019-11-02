import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const UserCard = (props) => {
    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';

    //get avatar
    const avatar = typeof props.avatar !== 'undefined' ? props.avatar : '';

    //get background
    const background = typeof props.background !== 'undefined' ? props.background : '';

    //get title
    const title = typeof props.title !== 'undefined' ? props.title : '';

    //get sub title
    const subTitle = typeof props.subTitle !== 'undefined' ? props.subTitle : '';

    //get button outlined
    const isHorizontal = typeof props.isHorizontal !== 'undefined' ? props.isHorizontal : false;

    //get is handle click
    const isHandleClick = typeof props.handleClick !== 'undefined' ? ' click-available ' : ' ';

    return(
        <div onClick={props.handleClick} className={'custom-user-card' + isHandleClick + (isHorizontal ? 'horizontal ' : 'vertical ') + customClassName}>
            { isHorizontal ? (
                // horizontal
                <div>
                    <div className="frame">
                        <img alt={""} src={avatar}/>
                    </div>
                    <div className="user-card-left">
                        <div className="user-card-title">
                            { title }
                        </div>
                        <div className="user-card-sub-title">
                            { subTitle }
                        </div>
                        <div className="user-card-child">
                            { props.children }
                        </div>
                    </div>
                </div>
            ) : (
                // vertical
                <div>
                    <div className="top-bg">
                        { background!=='' ? (
                            <img alt={""} src={background}/>
                        ) : '' }
                    </div>
                    <div className="frame">
                        <img alt={""} src={avatar}/>
                    </div>
                    <div className="user-card-title">
                        { title }
                    </div>
                    <div className="user-card-sub-title">
                        { subTitle }
                    </div>
                    <div className="user-card-child">
                        { props.children }
                    </div>
                </div>
            ) }
            
            
        </div>
    );
}

//prop types initialize
UserCard.propTypes = {
    className: PropTypes.string,
    avatar: PropTypes.string,
    background: PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    isHorizontal: PropTypes.bool,
    handleClick: PropTypes.func,
}

export default UserCard;