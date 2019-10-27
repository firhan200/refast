import React from 'react';

/* Styles */
import { Col, Row, Container, IconCard, UserCard, Button, ImageCard,
    ImageCardTitle,ImageCardSubTitle,ImageCardDescription,ProductCard,
    ProductCardName,ProductCardImage,ProductCardPrice,ProductCardDescription, ProductCardCategory
} from './../../styles';
/* Styles */

const CardPage = () => {
    return(
        <div>
            <div className="title">
                Icon Cards
                <div className="sub-title">
                    <i className="fa fa-info-circle"></i> squared box with bunch of element inside.
                </div>
            </div>

            <div className="body add-spaces">
                <Container>
                    <Row>
                        <Col xs={6} sm={6} md={3}>
                            <IconCard label="iOS Downloads" isWavy={true} number={5207} icon="fa fa-apple"/>  
                        </Col>  
                        <Col xs={6} sm={6} md={3}> 
                            <IconCard label="Android Downloads" number={10523} icon="fa fa-android"/> 
                        </Col>
                        <Col xs={6} sm={6} md={3}>
                            <div className="help">
                                *no icon with wavy style
                            </div>
                            <IconCard label="Windows Phone Downloads" isWavy={true} number={602} />
                        </Col>  
                        <Col xs={6} sm={6} md={3}> 
                            <div className="help">
                                *no icon with blank style
                            </div>
                            <IconCard label="Web Access" number={9020321} /> 
                        </Col>             
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <div className="title">
                                User Cards
                                <div className="sub-title">
                                    <i className="fa fa-info-circle"></i> box contains with user information.
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={12}>
                            <Container>
                                <Row>
                                    <Col xs={12} sm={6} md={4} lg={3}>
                                        <UserCard avatar="/images/avatar.png" title="John Doe" subTitle="Software Engineer">
                                            <Button label="Edit Profile" size="medium" icon="fa fa-gear" isOutlined={true}/>
                                        </UserCard> 
                                    </Col>
                                    <Col xs={12} sm={6} md={4} lg={3}>
                                        <UserCard avatar="/images/avatar.png" background="/images/background.png" title="John Doe" subTitle="Software Engineer">
                                        </UserCard> 
                                    </Col>
                                    <Col xs={12} sm={6} md={4} lg={3}>
                                        <UserCard avatar="/images/avatar.png" title="John Doe" subTitle="Software Engineer" isHorizontal={true}>
                                        </UserCard> 
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <div className="title">
                                Image Cards
                                <div className="sub-title">
                                    <i className="fa fa-info-circle"></i> squared box with overlay or topped image.
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={12}>
                            <Container>
                                <Row>
                                    <Col xs={12} sm={6} md={4} lg={3}>
                                        <ImageCard 
                                            image="/images/background.png">
                                                <ImageCardTitle>John Doe</ImageCardTitle>
                                                <ImageCardSubTitle>Software Engineer</ImageCardSubTitle>
                                                <ImageCardDescription maxLength={50}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                </ImageCardDescription>
                                                <Button size="medium" type="primary" label="Read more"></Button>
                                        </ImageCard> 
                                    </Col>
                                    <Col xs={12} sm={6} md={4} lg={3}>
                                        <ImageCard 
                                            image="/images/background.png"
                                            isOverlay={true}>
                                                <ImageCardTitle>John Doe</ImageCardTitle>
                                                <ImageCardSubTitle>Software Engineer</ImageCardSubTitle>
                                                <ImageCardDescription maxLength={50}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                </ImageCardDescription>
                                                <Button size="small" type="primary" label="Read more" isRounded={true}></Button>
                                        </ImageCard> 
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <div className="title">
                                Product Cards
                                <div className="sub-title">
                                    <i className="fa fa-info-circle"></i> e-commerce product card.
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={12}>
                            <Container>
                                <Row>
                                    <Col xs={12} sm={6} md={4} lg={3}>
                                        <ProductCard>
                                            <ProductCardName>Asus Vivobook Ultra A412FL</ProductCardName>
                                            <ProductCardCategory>Notebook</ProductCardCategory>
                                            <ProductCardImage image="/images/asus.jpg"/>
                                            <ProductCardDescription maxLength={150}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </ProductCardDescription>
                                            <ProductCardPrice price={1299} afterDiscountPrice={999} currency="$"/>
                                            <Button label="ADD TO CART" size="small" className="m-1" />
                                            <Button label="ADD TO WISHLIST" size="small" type="danger" />
                                        </ProductCard> 
                                    </Col>
                                    <Col xs={12} sm={6} md={4} lg={3}>
                                        <ProductCard>
                                            <ProductCardName>Asus Vivobook Ultra A412FL</ProductCardName>
                                            <ProductCardImage image="/images/asus.jpg"/>
                                            <ProductCardPrice price={1299} currency="$"/>
                                            <Button className="m-1" icon="fa fa-shopping-cart" isOutlined={true} isRounded={true}/>
                                            <Button icon="fa fa-heart" type="danger" isOutlined={true} isRounded={true}/>
                                        </ProductCard> 
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container> 
            </div>
        </div>
    );
}

export default CardPage;