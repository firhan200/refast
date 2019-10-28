import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const Carousel = (props) => {
    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';

    //get unique id
    const id = typeof props.id !== 'undefined' ? props.id : 'myCarousel';

    //get array of item
    const items = typeof props.items !== 'undefined' ? props.items : [];

    //get indicators
    const indicators = typeof props.indicators !== 'undefined' ? props.indicators : true;

    //get controls
    const useControls = typeof props.controls !== 'undefined' ? props.controls : true;

    return(
        <div id={id} className={'custom-carousel carousel slide ' + customClassName} data-ride="carousel">
            {/* Indicators */}
            {indicators ? (
                <ol className="carousel-indicators">
                    { items.map((item, index) => (
                        <li key={index} data-target={"#"+id} data-slide-to={index} className={index===0 ? 'active' : ''}></li>
                    )) }
                </ol>
            ) : ''}
            
            {/* Main Carousel Items */}
            <div className="carousel-inner">
                { items.map((item, index) => (
                    <div key={index} className={"carousel-item" + (index===0 ? ' active' : '')}>
                        <img src={item.image} className="d-block w-100" alt={""} />
                        { item.useCaption ? (
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{ item.title }</h5>
                                <p>{ item.subTitle }</p>
                            </div>
                        ) : '' }
                    </div>
                )) }
            </div>

            {/* Controls */}
            { useControls ? (
                <div>
                    <a className="carousel-control-prev" href={"#"+id} role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href={"#"+id} role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            ) : '' }
        </div>
    );
}

//prop types initialize
Carousel.propTypes = {
    className: PropTypes.string,
    id : PropTypes.string,
    items : PropTypes.array,
    indicators : PropTypes.bool,
    controls : PropTypes.bool,
}

export default Carousel;