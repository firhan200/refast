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

    //get button outlined
    const isButtonWavy = typeof props.isWavy !== 'undefined' ? props.isWavy : false;

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
        <div className={'custom-icon-card '+align+' '+customClassName}>
            {/* main content */}
            <div className={"icon-card-body "+(isButtonWavy ? 'wavy' : '')}>
                { icon !== '' ? (
                <div className="icon">
                    <i className={ icon }></i>
                </div>) : '' }
                
                <div className="label">
                    { label.toUpperCase() }
                    { statisticValue !== '' ? (
                        getStatistic(statisticValue)
                    ) : '' }
                </div>
                <div className="number">
                    <CurrencyFormat value={ number } displayType={'text'} thousandSeparator={true}/>
                </div>
            </div>

            {/* wave effect */}
            { isButtonWavy ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fillOpacity="0.2" d="M0,192L6.5,181.3C13,171,26,149,39,149.3C51.9,149,65,171,78,192C90.8,213,104,235,117,224C129.7,213,143,171,156,165.3C168.6,160,182,192,195,181.3C207.6,171,221,117,234,80C246.5,43,259,21,272,16C285.4,11,298,21,311,53.3C324.3,85,337,139,350,138.7C363.2,139,376,85,389,58.7C402.2,32,415,32,428,42.7C441.1,53,454,75,467,90.7C480,107,493,117,506,154.7C518.9,192,532,256,545,277.3C557.8,299,571,277,584,266.7C596.8,256,610,256,623,234.7C635.7,213,649,171,662,170.7C674.6,171,688,213,701,240C713.5,267,726,277,739,261.3C752.4,245,765,203,778,176C791.4,149,804,139,817,149.3C830.3,160,843,192,856,181.3C869.2,171,882,117,895,101.3C908.1,85,921,107,934,144C947,181,960,235,973,234.7C985.9,235,999,181,1012,176C1024.9,171,1038,213,1051,218.7C1063.8,224,1077,192,1090,154.7C1102.7,117,1116,75,1129,74.7C1141.6,75,1155,117,1168,160C1180.5,203,1194,245,1206,272C1219.5,299,1232,309,1245,304C1258.4,299,1271,277,1284,234.7C1297.3,192,1310,128,1323,117.3C1336.2,107,1349,149,1362,144C1375.1,139,1388,85,1401,64C1414.1,43,1427,53,1434,58.7L1440,64L1440,320L1433.5,320C1427,320,1414,320,1401,320C1388.1,320,1375,320,1362,320C1349.2,320,1336,320,1323,320C1310.3,320,1297,320,1284,320C1271.4,320,1258,320,1245,320C1232.4,320,1219,320,1206,320C1193.5,320,1181,320,1168,320C1154.6,320,1142,320,1129,320C1115.7,320,1103,320,1090,320C1076.8,320,1064,320,1051,320C1037.8,320,1025,320,1012,320C998.9,320,986,320,973,320C960,320,947,320,934,320C921.1,320,908,320,895,320C882.2,320,869,320,856,320C843.2,320,830,320,817,320C804.3,320,791,320,778,320C765.4,320,752,320,739,320C726.5,320,714,320,701,320C687.6,320,675,320,662,320C648.6,320,636,320,623,320C609.7,320,597,320,584,320C570.8,320,558,320,545,320C531.9,320,519,320,506,320C493,320,480,320,467,320C454.1,320,441,320,428,320C415.1,320,402,320,389,320C376.2,320,363,320,350,320C337.3,320,324,320,311,320C298.4,320,285,320,272,320C259.5,320,246,320,234,320C220.5,320,208,320,195,320C181.6,320,169,320,156,320C142.7,320,130,320,117,320C103.8,320,91,320,78,320C64.9,320,52,320,39,320C25.9,320,13,320,6,320L0,320Z"></path></svg>
            ) : '' }
        </div>
    );
}

//prop types initialize
IconCard.propTypes = {
    className: PropTypes.string,
    isWavy: PropTypes.bool,
    align: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string,
    number: PropTypes.number,
    statisticValue: PropTypes.number,
    statisticPostfix: PropTypes.string,
}

export default IconCard;