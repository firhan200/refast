import React, { useState } from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const Accordion = (props) => {
    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';

    //get id
    const id = typeof props.id !== 'undefined' ? props.id : 'accordionExample';

    //get items
    const accordionItems = typeof props.items !== 'undefined' ? props.items : [];

    //prepare is open
    accordionItems.map((item, index) => {
        if(index === 0){
            item.isOpen = true;
        }else{
            item.isOpen = false;
        }

        return item;
    });

    //use hooks
    const [items, setItems] = useState(accordionItems);

    const handleHeaderClick = (itemIndex) => {
        let newItems = items.map((item, index) => {
            let newItem = Object.assign({}, item);
            if(index === itemIndex){
                newItem.isOpen = !item.isOpen;
            }else{
                newItem.isOpen = false;
            }
            return newItem;
        });
        
        setItems(newItems);
    }

    return(
        <div className={"custom-accordion accordion " + customClassName} id={id}>
            { items.map((item, index) => (
                <div className="card" key={index}>
                    <div className="card-header" onClick={handleHeaderClick.bind(this, index)} id={id+"_heading_"+index} data-toggle="collapse" data-target={"#"+id+"_collapse_"+index} aria-expanded="true" aria-controls={id+"_collapse_"+index}>
                        <h2 className="mb-0">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-11">
                                        <div className="accordion-button">
                                            <button className={"btn btn-link" + (index!==0 ? ' collapsed' : '')} type="button">
                                            { item.key }
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        <div className="accordion-icon">
                                            <i className={"fa fa-chevron-" + (item.isOpen ? 'down' : 'right')}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
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