import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const Accordion = (props) => {
    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';

    //get id
    const id = typeof props.id !== 'undefined' ? props.id : 'accordionExample';

    //get items
    const items = typeof props.items !== 'undefined' ? props.items : [];

    return(
        <div className={"custom-accordion accordion " + customClassName} id={id}>
            { items.map((item, index) => (
                <div className="card" key={index}>
                    <div className="card-header" id={id+"_heading_"+index}>
                        <h2 className="mb-0">
                            <button className={"btn btn-link" + (index!==0 ? ' collapsed' : '')} type="button" data-toggle="collapse" data-target={"#"+id+"_collapse_"+index} aria-expanded="true" aria-controls={id+"_collapse_"+index}>
                            { item.key }
                            </button>
                        </h2>
                    </div>
                    <div id={id+"_collapse_"+index} className={"collapse" + (index===0 ? ' show' : '')} aria-labelledby={"#"+id+"_heading_"+index} data-parent={"#"+id}>
                        <div className="card-body">
                            { item.body }
                        </div>
                    </div>
                </div>
            )) }
        </div>
    );
}

//prop types initialize
Accordion.propTypes = {
    className : PropTypes.string,
    items : PropTypes.array,
    id : PropTypes.string
}

export default Accordion;