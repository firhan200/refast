import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types
import CurrencyFormat  from 'react-currency-format';

const IconCard = (props) => {
    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';

    //get label
    const label = typeof props.label !== 'undefined' ? props.label : '';

    //get icon
    const icon = typeof props.icon !== 'undefined' ? props.icon : '';

    //get number
    const number = typeof props.number !== 'undefined' ? props.number : '';

    //get number
    const align = typeof props.align !== 'undefined' ? props.align : '';

    //get statistic
    const statisticValue = typeof props.statisticValue !== 'undefined' ? props.statisticValue : '';
    const statisticPostfix = typeof props.statisticPostfix !== 'undefined' ? props.statisticPostfix : '';
    const getStatistic = (statisticValue) => {
        return(
            <span className={statisticValue > 0 ? 'green' : 'red'}>
                &nbsp;
                &nbsp;
                { statisticValue > 0 ? (
                    <i className="fa fa-caret-up"></i>
                ) : (
                    <i className="fa fa-caret-down"></i>
                ) }
                &nbsp;<span>{Math.abs(statisticValue)+ '' +statisticPostfix}</span>
            </span>
        )
    }

    return(
        <div style={props.style} className={'custom-icon-card '+align+' '+customClassName}>
            {/* main content */}
            <div className={"icon-card-body"}>
                { icon !== '' ? (
                <div className="icon">
                    <i className={ icon }></i>
                </div>) : '' }
                
                <div className="icon-card-label">
                    { label.toUpperCase() }
                    { statisticValue !== '' ? (
                        getStatistic(statisticValue)
                    ) : '' }
                </div>
                <div className="number">
                    <CurrencyFormat value={ number } displayType={'text'} thousandSeparator={true}/>
                </div>
            </div>
        </div>
    );
}

//prop types initialize
IconCard.propTypes = {
    style : PropTypes.object,
    className: PropTypes.string,
    align: PropTypes.oneOf(['left', 'center', 'right']),
    label: PropTypes.string,
    icon: PropTypes.string,
    number: PropTypes.number,
    statisticValue: PropTypes.number,
    statisticPostfix: PropTypes.string,
}

export default IconCard;