import React, { Fragment } from 'react';
import DocsExample from './../DocsExample';
import { 
    Carousel
} from '../../../styles';

const Carousels = () => {
    //carousel images
    const carouselImages = [
        {
            image: '/images/slider1.jpg',
            useCaption : false,
            handleClick : () => {
                alert("Carousel clicked");
            }
        },
        {
            image: '/images/slider2.jpg',
            useCaption : true,
            captionColor : '#000',
            title: 'Caption Title',
            subTitle: 'Caption Sub Title or Paragraph Here.'
        },
        {
            image: '/images/slider3.jpg',
            useCaption : false
        }
    ];

    return (
        <Fragment>
            <DocsExample 
                title="Carousel"
                example={(
                    <div>
                        <Carousel id="default-carousel" items={carouselImages} />
                    </div>
                )}
                code={(
`import React from 'react';
import { Carousel } from './styles';

const Carousels = () => {
    //carousel images
    const carouselImages = [
        {
            image: '/images/slider1.jpg',
            useCaption : false,
            //you can pass on handle click callback per items
            handleClick : () => {
                alert("Carousel clicked");
            }
        },
        {
            image: '/images/slider2.jpg',
            useCaption : true,
            captionColor : '#000',
            title: 'Caption Title',
            subTitle: 'Caption Sub Title or Paragraph Here.'
        },
        {
            image: '/images/slider3.jpg',
            useCaption : false
        }
    ];

    return(
        <div>
            <Carousel id="default-carousel" items={carouselImages} />
        </div>
    )
}

export default Carousels;
`
                )}
                properties={(
`Carousel.propTypes = {
    className: PropTypes.string, //custom className
    id : PropTypes.string, //ATTENTION: this field is required, you must provided unique id for carousel
    items : PropTypes.array, //array of items
    indicators : PropTypes.bool, //is carousel show indicators
    controls : PropTypes.bool, //is show arrow controls
}`
                )}
            />

<DocsExample 
                title="Carousel with no Controls &amp; Indicators"
                example={(
                    <div>
                        <Carousel id="empty-carousel" items={carouselImages} indicators={false} controls={false} />
                    </div>
                )}
                code={(
`import React from 'react';
import { Carousel } from './styles';

const Carousels = () => {
    //carousel images
    const carouselImages = [
        {
            image: '/images/slider1.jpg',
            useCaption : false,
            //you can pass on handle click callback per items
            handleClick : () => {
                alert("Carousel clicked");
            }
        },
        {
            image: '/images/slider2.jpg',
            useCaption : true,
            captionColor : '#000',
            title: 'Caption Title',
            subTitle: 'Caption Sub Title or Paragraph Here.'
        },
        {
            image: '/images/slider3.jpg',
            useCaption : false
        }
    ];

    return(
        <div>
            <Carousel id="empty-carousel" items={carouselImages} indicators={false} controls={false} />
        </div>
    )
}

export default Carousels;
`
                )}
            />
        </Fragment>
    )
}

export default Carousels;