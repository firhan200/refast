//default react
import React from 'react';

//libs
import Chart from 'react-apexcharts';
import PropTypes from 'prop-types'; // prop types

const ChartDonut = (props) => {
    const data = {
        options: {},
        series: [44, 55, 41, 17, 15],
        labels: ['A', 'B', 'C', 'D', 'E']
    }

    return(
        <Chart options={data.options} series={data.series} type="donut" width="100%" />
    );
}

//prop types initialize
ChartDonut.propTypes = {

}

export default ChartDonut;