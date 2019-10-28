import React from 'react';

/* Styles */
import { Box, Row, Container, Carousel, BoxTitle } from './../../styles';
/* Styles */

const CarouselPage = () => {

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

    return(
        <div>
            <div className="title">
                Carousel
                <div className="sub-title">
                    <i className="fa fa-info-circle"></i> a slideshow component.
                </div>
            </div>

            <div className="body">
                <Container>
                    <Row>
                        <Box sm={12} md={6} lg={6}>
                            <BoxTitle label="carousel with controls and indicators"/>
                            <Carousel id="default-carousel" items={carouselImages} />
                        </Box>
                        <Box sm={12} md={6} lg={6}>
                        <BoxTitle label="carousel without controls and indicators"/>
                            <Carousel id="empty-carousel" items={carouselImages} indicators={false} controls={false} />
                        </Box>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default CarouselPage;