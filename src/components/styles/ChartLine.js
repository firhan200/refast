//default react
import React from 'react';

//libs
import Chart from 'react-apexcharts';
import PropTypes from 'prop-types'; // prop types

const ChartLine = (props) => {
    //get items & init data
    const items = typeof props.items !== 'undefined' ? props.items : [];

    //init default options
    let options = null;

    //init default error messages
    let error = "";

    //try setting chart options
    
    try{
        //get datas
        let dataItems = items.data;
        let labels = items.labels;
        let colors = dataItems.map(item => (item.color));
        let seriesData = dataItems.map(item => {
            return {
                name : item.label,
                data : item.data
            }
        })

        options = {
            series:seriesData,
            colors: colors,
            yaxis:{
                axisBorder:{
                    show:false
                }
            },
            xaxis: {
                categories: labels
            },
        }

        //check title
        if(typeof props.title !== 'undefined'){
            options = Object.assign({}, options, {
                title: {
                    text: props.title
                }
            })
        }

        //check legend
        const legend = typeof props.legend !== 'undefined' ? props.legend.toLowerCase() : "none";
        let legendPosition = 'none';
        switch(legend){
            case 'top':
                legendPosition = 'top';
                break;
            case 'bottom':
                legendPosition = 'bottom';
                break;
            case 'left':
                legendPosition = 'left';
                break;
            case 'right':
                legendPosition = 'right';
                break;
            default:
                legendPosition = 'none';
                break;
        }
        if(legendPosition!=='none'){
            //add legend
            options = Object.assign({}, options, {
                legend: {
                    fontSize: 10,
                    position: legendPosition,
                    markers:{
                        width:8,
                        height:8,
                    }
                }
            });
        }else{
            options = Object.assign({}, options, {
                legend: {
                    show : false
                }
            });
        }
    }catch(err){
        //set error messages
        error = err.message;
    }

    return(
        <div>
            { options !== null ? (
                <Chart options={options} series={options.series} type="line" width="100%" />
            ) : error }
        </div>
        
    );
}

//prop types initialize
ChartLine.propTypes = {
    items : PropTypes.object,
    title : PropTypes.string,
    legend: PropTypes.oneOf(["none", "top", "bottom", "right", "left"])
}

export default ChartLine;