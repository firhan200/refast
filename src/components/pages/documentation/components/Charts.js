import React, { Fragment } from 'react';
import DocsExample from './../DocsExample';
import { 
    ChartDonut, 
    ChartPie,
    Box, 
    Row,
    ChartRadar,
    ChartLine,
    ChartBar
} from '../../../styles';

const Charts = () => {
    //donut items
    const donutItems = [
        {
            label: 'Android', //item label
            data: 1040, //item number
            color: "#7757F7" //item custom color
        },
        {
            label: 'iOS',
            data: 674,
            color: "#6E55CE"
        },
        {
            label: 'Win. Phone',
            data: 233,
            color: "#5742A7"
        }
    ];

    //radar items
    const radarItems = {
        labels : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        data : [{
            label: 'Android Downloads',
            color:'#7757F7',
            data : [203, 175, 377, 245, 289, 200]
        },
        {
            label: 'iOS Downloads',
            color:'#6E55CE',
            data : [14, 33, 85, 124, 203, 201]
        }]
    };

    //line items
    const lineItems = {
        labels : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        data : [
            {
                label: 'Android Downloads',
                color:'#7757F7',
                data : [203, 175, 377, 245, 289, 200]
            },
            {
                label: 'iOS Downloads',
                color:'#6E55CE',
                data : [14, 33, 85, 124, 203, 201]
            }
        ]
    };

    return (
        <Fragment>
            <DocsExample 
                title="Donut Charts"
                example={(
                    <Row>
                        <Box isTransparent={true} sm={12} md={8} mdOffset={2} lg={6} lgOffset={3}>
                            <ChartDonut legend="bottom" title="Apps Downloads" items={donutItems}/>
                        </Box>
                    </Row>
                )}
                code={(
`import React from 'react';
import { Row, Box, ChartDonut } from './styles';

const Charts = () => {
    //donut items
    const donutItems = [
        {
            label: 'Android', //item label
            data: 1040, //item number
            color: "#7757F7" //item custom color
        },
        {
            label: 'iOS',
            data: 674,
            color: "#6E55CE"
        },
        {
            label: 'Win. Phone',
            data: 233,
            color: "#5742A7"
        }
    ];

    return(
        <Row>
            <Box isTransparent={true} sm={12} md={8} mdOffset={2} lg={6} lgOffset={3}>
                <ChartDonut legend="bottom" title="Apps Downloads" items={donutItems}/>
            </Box>
        </Row>
    )
}

export default Charts;
`
                )}
                properties={(
`ChartDonut.propTypes = {
    items : PropTypes.array, //array of items
    title : PropTypes.string, //chart title on top left
    legend: PropTypes.oneOf(["none", "top", "bottom", "right", "left"]) //legend position
}`
                )}
            />
        
            <DocsExample 
                title="Pie Charts"
                example={(
                    <Row>
                        <Box isTransparent={true} sm={12} md={8} mdOffset={2} lg={6} lgOffset={3}>
                            <ChartPie legend="bottom" title="Apps Downloads" items={donutItems}/>
                        </Box>
                    </Row>
                )}
                code={(
`import React from 'react';
import { Row, Box, ChartPie } from './styles';

const Charts = () => {
    //pie items
    const pieItems = [
        {
            label: 'Android', //item label
            data: 1040, //item number
            color: "#7757F7" //item custom color
        },
        {
            label: 'iOS',
            data: 674,
            color: "#6E55CE"
        },
        {
            label: 'Win. Phone',
            data: 233,
            color: "#5742A7"
        }
    ];

    return(
        <Row>
            <Box isTransparent={true} sm={12} md={8} mdOffset={2} lg={6} lgOffset={3}>
                <ChartPie legend="bottom" title="Apps Downloads" items={pieItems}/>
            </Box>
        </Row>
    )
}

export default Charts;
`
                )}
                properties={(
`ChartPie.propTypes = {
    items : PropTypes.array, //array of items
    title : PropTypes.string, //chart title on top left
    legend: PropTypes.oneOf(["none", "top", "bottom", "right", "left"]) //legend position
}`
                )}
            />

            <DocsExample 
                title="Radar Charts"
                example={(
                    <Row>
                        <Box isTransparent={true} sm={12} md={12} lg={8} lgOffset={2}>
                            <ChartRadar legend="bottom" title="Radar Chart" size={100} items={radarItems}/>
                        </Box>
                    </Row>
                )}
                code={(
`import React from 'react';
import { Row, Box, ChartRadar } from './styles';

const Charts = () => {
    //radar items
    const radarItems = {
        labels : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], //label to be shown
        data : [{
            label: 'Android Downloads', //label text
            color:'#7757F7', //color of item
            data : [203, 175, 377, 245, 289, 200] //item data
        },
        {
            label: 'iOS Downloads',
            color:'#6E55CE',
            data : [14, 33, 85, 124, 203, 201]
        }]
    };

    return(
        <Row>
            <Box isTransparent={true} sm={12} md={12} lg={8} lgOffset={2}>
                <ChartRadar legend="bottom" title="Radar Chart" size={100} items={radarItems}/>
            </Box>
        </Row>
    )
}

export default Charts;
`
                )}
                properties={(
`ChartRadar.propTypes = {
    items : PropTypes.object, //array of items
    title : PropTypes.string, //chart title on top left
    size : PropTypes.number, //you must provide size of radar charts
    legend: PropTypes.oneOf(["none", "top", "bottom", "right", "left"]) //legend position
}`
                )}
            />

            <DocsExample 
                title="Line Charts"
                example={(
                    <Row>
                        <Box isTransparent={true} sm={12} md={12}>
                            <ChartLine legend="bottom" title="Sales" items={lineItems}/>
                        </Box>
                    </Row>
                )}
                code={(
`import React from 'react';
import { Row, Box, ChartLine } from './styles';

const Charts = () => {
    //line items
    const lineItems = {
        labels : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], //label to be shown
        data : [
            {
                label: 'Android Downloads', //label text
                color:'#7757F7', //color of item
                data : [203, 175, 377, 245, 289, 200] //item data
            },
            {
                label: 'iOS Downloads',
                color:'#6E55CE',
                data : [14, 33, 85, 124, 203, 201]
            }
        ]
    };

    return(
        <Row>
            <Box isTransparent={true} sm={12} md={12}>
                <ChartLine legend="bottom" title="Sales" items={lineItems}/>
            </Box>
        </Row>
    )
}

export default Charts;
`
                )}
                properties={(
`ChartLine.propTypes = {
    items : PropTypes.array, //array of items
    title : PropTypes.string, //chart title on top left
    legend: PropTypes.oneOf(["none", "top", "bottom", "right", "left"]) //legend position
}`
                )}
            />

            <DocsExample 
                title="Bar Charts"
                example={(
                    <Row>
                        <Box isTransparent={true} sm={12} md={12}>
                            <ChartBar legend="bottom" title="Sales" items={lineItems}/>
                        </Box>
                    </Row>
                )}
                code={(
`import React from 'react';
import { Row, Box, ChartBar } from './styles';

const Charts = () => {
    //bar items
    const barItems = {
        labels : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], //label to be shown
        data : [
            {
                label: 'Android Downloads', //label text
                color:'#7757F7', //color of item
                data : [203, 175, 377, 245, 289, 200] //item data
            },
            {
                label: 'iOS Downloads',
                color:'#6E55CE',
                data : [14, 33, 85, 124, 203, 201]
            }
        ]
    };

    return(
        <Row>
            <Box isTransparent={true} sm={12} md={12}>
                <ChartBar legend="bottom" title="Sales" items={barItems}/>
            </Box>
        </Row>
    )
}

export default Charts;
`
                )}
                properties={(
`ChartBar.propTypes = {
    items : PropTypes.array, //array of items
    title : PropTypes.string, //chart title on top left
    legend: PropTypes.oneOf(["none", "top", "bottom", "right", "left"]) //legend position
}`
                )}
            />
        </Fragment>
    )
}

export default Charts;