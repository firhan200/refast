import React, { Fragment } from 'react';
import DocsExample from './../DocsExample';
import { 
    Row,
    Col,
    IconCard,
    UserCard,
    Button,
    ImageCard,
    ImageCardTitle,
    ImageCardSubTitle,
    ImageCardDescription,
    ProductCard,
    ProductCardName,
    ProductCardCategory,
    ProductCardImage,
    ProductCardDescription,
    ProductCardPrice
} from '../../../styles';

const Cards = () => {
    return (
        <Fragment>
            <DocsExample 
                title="Iconed Cards"
                example={(
                    <Row>
                        <Col sm={6} md={4}>
                            <IconCard 
                                label="iOS Downloads" 
                                number={5207} 
                                icon="fa fa-apple"/>  
                        </Col>  
                        <Col sm={6} md={4}> 
                            <IconCard 
                                label="Android Downloads" 
                                statisticPostfix='%' 
                                statisticValue={-17} 
                                number={10523} 
                                icon="fa fa-android"/> 
                        </Col>
                        <Col sm={6} md={4}> 
                            <IconCard 
                                align="center"
                                label="Web Access" 
                                statisticPostfix='%' 
                                statisticValue={20} 
                                number={9020321} /> 
                        </Col>            
                    </Row>
                )}
                code={(
`import React from 'react';
import { Row, Col, IconCard } from './styles';

const IconCards = () => {
    return(
        <Row>
            <Col sm={6} md={4}>
                <IconCard 
                    label="iOS Downloads" 
                    number={5207} 
                    icon="fa fa-apple"/>  
            </Col>  
            <Col sm={6} md={4}> 
                <IconCard 
                    label="Android Downloads" 
                    statisticPostfix='%' 
                    statisticValue={-17} 
                    number={10523} 
                    icon="fa fa-android"/> 
            </Col>
            <Col sm={6} md={4}> 
                <IconCard 
                    align="center"
                    label="Web Access" 
                    statisticPostfix='%' 
                    statisticValue={20} 
                    number={9020321} /> 
            </Col>          
        </Row>
    )
}

export default IconCards;
`
                )}
                properties={(
`IconCard.propTypes = {
    style : PropTypes.object, //your custom style object here
    className: PropTypes.string, //your custom styling class here 
    align: PropTypes.oneOf(['left', 'center', 'right']), //text alignment
    label: PropTypes.string, //text label
    icon: PropTypes.string, //icon
    number: PropTypes.number, //number to show
    statisticValue: PropTypes.number, //statistic value, ex: -10, 15, 78
    statisticPostfix: PropTypes.string, //statistic prefix, ex: $, % (to show on left side statistic value)
}`
                )}
            />

            <DocsExample 
                title="User Cards"
                example={(
                    <Row>
                        <Col sm={12} md={4}>
                            <UserCard 
                                avatar="/images/avatar.png" 
                                title="John Doe" 
                                subTitle="Software Engineer">

                                {/* place your component child here */}
                                <Button 
                                    label="Edit Profile" 
                                    size="medium" 
                                    icon="fa fa-gear" isOutlined={true}/>
                            </UserCard> 
                        </Col>
                        <Col sm={12} md={4}>
                            <UserCard 
                                avatar="/images/avatar.png" 
                                background="/images/background.png" 
                                title="John Doe" 
                                subTitle="Software Engineer" />
                        </Col>
                        <Col sm={12} md={4}>
                            <UserCard 
                                avatar="/images/avatar.png" 
                                title="John Doe" 
                                subTitle="Software Engineer" 
                                isHorizontal={true} />
                        </Col>
                    </Row>
                )}
                code={(
`import React from 'react';
import { Row, Col, UserCard, Button } from './styles';

const UserCards = () => {
    return(
        <Row>
            <Col sm={12} md={4}>
                <UserCard 
                    avatar="/images/avatar.png" 
                    title="John Doe" 
                    subTitle="Software Engineer">

                    {/* place your component child here */}
                    <Button 
                        label="Edit Profile" 
                        size="medium" 
                        icon="fa fa-gear" isOutlined={true}/>
                </UserCard> 
            </Col>
            <Col sm={12} md={4}>
                <UserCard 
                    avatar="/images/avatar.png" 
                    background="/images/background.png" 
                    title="John Doe" 
                    subTitle="Software Engineer" />
            </Col>
            <Col sm={12} md={4}>
                <UserCard 
                    avatar="/images/avatar.png" 
                    title="John Doe" 
                    subTitle="Software Engineer" 
                    isHorizontal={true} />
            </Col>
        </Row>
    )
}

export default UserCards;
`
                )}
                properties={(
`UserCard.propTypes = {
    className: PropTypes.string, //your custom styling class here 
    avatar: PropTypes.string, //user avatar image src
    background: PropTypes.string, //background avatar image src
    title: PropTypes.string, //title, ex: user name
    subTitle: PropTypes.string, //smaller font that title, ex: user location or etc.
    isHorizontal: PropTypes.bool, //is user card horizontal
    handleClick: PropTypes.func, //on user card click callback
}`
                )}
            />

            <DocsExample 
                title="Image Cards"
                example={(
                    <Row>
                        <Col sm={12} md={6}>
                            <ImageCard 
                                image="/images/background.png">
                                    <ImageCardTitle>John Doe</ImageCardTitle>
                                    <ImageCardSubTitle>Software Engineer</ImageCardSubTitle>
                                    <ImageCardDescription maxLength={50}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </ImageCardDescription>
                                    <Button size="medium" type="primary" label="Read more"></Button>
                            </ImageCard> 
                        </Col>
                        <Col sm={12} md={6}>
                            <ImageCard 
                                image="/images/background.png"
                                isOverlay={true}>
                                    <ImageCardTitle>John Doe</ImageCardTitle>
                                    <ImageCardSubTitle>Software Engineer</ImageCardSubTitle>
                                    <ImageCardDescription maxLength={50}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </ImageCardDescription>
                                    <Button size="small" type="primary" label="Read more" isRounded={true}></Button>
                            </ImageCard> 
                        </Col>
                    </Row>
                )}
                code={(
`import React from 'react';
import { Row, Col, ImageCard, ImageCardTitle, ImageCardSubTitle, ImageCardDescription, Button } from './styles';

const ImageCards = () => {
    return(
        <Row>
            <Col sm={12} md={6}>
                <ImageCard 
                    image="/images/background.png">
                        <ImageCardTitle>John Doe</ImageCardTitle>
                        <ImageCardSubTitle>Software Engineer</ImageCardSubTitle>
                        <ImageCardDescription maxLength={50}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </ImageCardDescription>
                        <Button size="medium" type="primary" label="Read more"></Button>
                </ImageCard> 
            </Col>
            <Col sm={12} md={6}>
                <ImageCard 
                    image="/images/background.png"
                    isOverlay={true}>
                        <ImageCardTitle>John Doe</ImageCardTitle>
                        <ImageCardSubTitle>Software Engineer</ImageCardSubTitle>
                        <ImageCardDescription maxLength={50}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </ImageCardDescription>
                        <Button size="small" type="primary" label="Read more" isRounded={true}></Button>
                </ImageCard> 
            </Col>
        </Row>
    )
}

export default ImageCards;
`
                )}
                properties={(
`ImageCard.propTypes = {
    className: PropTypes.string,
    image: PropTypes.string,
    isOverlay: PropTypes.bool,
}

ImageCardDescription.propTypes = {
    maxLength: PropTypes.number
}`
                )}
            />

            <DocsExample 
                title="Product Cards"
                example={(
                    <Row>
                        <Col sm={12} md={6} lg={4}>
                            <ProductCard>
                                <ProductCardName>Asus Vivobook Ultra A412FL</ProductCardName>
                                <ProductCardCategory>Notebook</ProductCardCategory>
                                <ProductCardImage image="/images/asus.jpg"/>
                                <ProductCardDescription maxLength={150}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                    nisi ut aliquip ex ea commodo consequat.
                                </ProductCardDescription>
                                <ProductCardPrice price={1299} afterDiscountPrice={999} currency="$"/>
                                <Button label="ADD TO CART" size="small" className="m-1" />
                                <Button label="ADD TO WISHLIST" size="small" type="danger" />
                            </ProductCard> 
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <ProductCard>
                                <ProductCardName>Asus Vivobook Ultra A412FL</ProductCardName>
                                <ProductCardImage image="/images/asus.jpg"/>
                                <ProductCardPrice price={1299} currency="$"/>

                                {/* place your component child here */}
                                <Button className="m-1" icon="fa fa-shopping-cart" isOutlined={true} isRounded={true}/>
                                <Button icon="fa fa-heart" type="danger" isOutlined={true} isRounded={true}/>
                            </ProductCard> 
                        </Col>
                    </Row>
                )}
                code={(
`import React from 'react';
import { Row, Col, ProductCard, ProductCardName, 
    ProductCardCategory, ProductCardImage, ProductCardDescription, 
    ProductCardPrice, Button } from './styles';

const ProductCards = () => {
    return(
        <Row>
            <Col sm={12} md={6} lg={4}>
                <ProductCard>
                    <ProductCardName>Asus Vivobook Ultra A412FL</ProductCardName>
                    <ProductCardCategory>Notebook</ProductCardCategory>
                    <ProductCardImage image="/images/asus.jpg"/>
                    <ProductCardDescription maxLength={150}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat.
                    </ProductCardDescription>
                    <ProductCardPrice price={1299} afterDiscountPrice={999} currency="$"/>
                    <Button label="ADD TO CART" size="small" className="m-1" />
                    <Button label="ADD TO WISHLIST" size="small" type="danger" />
                </ProductCard> 
            </Col>
            <Col sm={12} md={6} lg={4}>
                <ProductCard>
                    <ProductCardName>Asus Vivobook Ultra A412FL</ProductCardName>
                    <ProductCardImage image="/images/asus.jpg"/>
                    <ProductCardPrice price={1299} currency="$"/>

                    {/* place your component child here */}
                    <Button className="m-1" icon="fa fa-shopping-cart" isOutlined={true} isRounded={true}/>
                    <Button icon="fa fa-heart" type="danger" isOutlined={true} isRounded={true}/>
                </ProductCard> 
            </Col>
        </Row>
    )
}

export default ProductCards;
`
                )}
                properties={(
`ProductCard.propTypes = {
    className: PropTypes.string
}

ProductCardDescription.propTypes = {
    maxLength: PropTypes.number //maximum length of description
}

ProductCardImage.propTypes = {
    image: PropTypes.string
}

ProductCardPrice.propTypes = {
    currency: PropTypes.string, //currency prefix, ex: $, Rp , EUR
    price: PropTypes.number, //product price
    afterDiscountPrice: PropTypes.number, //after discount price
}`
                )}
            />
        </Fragment>
    )
}

export default Cards;