import React from 'react';

/* Styles */
import { Box, Row, Container, Carousel } from './../../styles';
/* Styles */

const CarouselPage = () => {

    const carouselImages = [
        {
            image: '/images/avatar.png',
            useCaption : true,
            title: 'Caption Title',
            subTitle: 'Caption Sub Title or Paragraph Here.'
        },
        {
            image: '/images/background.png',
            useCaption : false,
            title: 'Caption Title',
            subTitle: 'Caption Sub Title or Paragraph Here.'
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
                        <Box sm={12} md={12} lg={12}>
                            <Carousel id="default-carousel" items={carouselImages} />
                        </Box>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default CarouselPage;