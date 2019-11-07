import React, { useState } from 'react';

//libs
import { Range, getTrackBackground  } from 'react-range';

//components
import { 
    Breadcrumb, 
    BreadcrumbItem, 
    Container, 
    Row, 
    Box, 
    Col, 
    BoxTitle, 
    H4, 
    Select, 
    Checkbox, 
    ProductCard, 
    ProductCardName,
    ProductCardDescription, 
    ProductCardCategory,
    ProductCardImage,
    ProductCardPrice,
    Button,
    Input} from '../styles';

const SearchPage = () => {
    /* products */
    const defaultProducts = [
        {
            image: '/images/asus.jpg',
            name: 'Asus VivoBook Ultra A412FL',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            price: 899,
            afterDiscountPrice : 799,
            category : {
                id: 1,
                label: 'laptop'
            }
        },
        {
            image: '/images/iphone.jpg',
            name: 'iPhone',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            price: 200,
            afterDiscountPrice : 159,
            category : {
                id: 2,
                label: 'Smartphone'
            }
        },
        {
            image: '/images/oppo.jpg',
            name: 'Oppo Phone',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            price: 240,
            category : {
                id: 2,
                label: 'Smartphone'
            }
        },
        {
            image: '/images/asus.jpg',
            name: 'Asus VivoBook Ultra A412FL',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            price: 899,
            afterDiscountPrice : 799,
            category : {
                id: 1,
                label: 'laptop'
            }
        },
        {
            image: '/images/iphone.jpg',
            name: 'iPhone',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            price: 200,
            afterDiscountPrice : 159,
            category : {
                id: 2,
                label: 'Smartphone'
            }
        },
        {
            image: '/images/oppo.jpg',
            name: 'Oppo Phone',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            price: 240,
            category : {
                id: 2,
                label: 'Smartphone'
            }
        },
    ];

    /* categories */
    const defaultCategories = [
        {
            id: 1,
            label: 'Laptop',
            isChecked: true
        },
        {
            id: 2,
            label: 'Smartphone',
            isChecked: false
        },
        {
            id: 3,
            label: 'TV',
            isChecked: false
        }
    ]

    /* offers */
    const defaultOffers = [
        {
            id: 1,
            label: 'Discount',
            isChecked: true
        },
        {
            id: 2,
            label: 'Free Shipping',
            isChecked: false
        }
    ]

    /* sort by */
    const sorts = [
        {
            id: 0,
            label: 'Price: High - Low'
        },
        {
            id: 1,
            label: 'Price: Low - High'
        },
        {
            id: 2,
            label: 'Date: Newest - Oldest'
        },
        {
            id: 3,
            label: 'Date: Oldest - Newest'
        }
    ]

    /* range price variables */
    const STEP = 10 ;
    const MIN = 0;
    const MAX = 1000;

    /* hooks */
    const [products] = useState(defaultProducts);
    const [categories, setCategories] = useState(defaultCategories);
    const [offers, setOffers] = useState(defaultOffers);
    const [rangePrice, setRangePrice] = useState([100, 500]);

    /* methods */
    const handleCategoryFilter = (id) => {
        //find category by loop
        let newCategories = categories.map(category => {
            //create new obj
            let newCategoryObj = Object.assign({}, category);

            //check if id same as current category
            if(category.id === id){
                //found!
                newCategoryObj.isChecked = !category.isChecked;
            }

            return newCategoryObj;
        });

        //update state
        setCategories(newCategories);
    }

    const handleOfferFilter = (id) => {
        //find offer by loop
        let newOffers = offers.map(offer => {
            //create new obj
            let newOfferObj = Object.assign({}, offer);

            //check if id same as current category
            if(offer.id === id){
                //found!
                newOfferObj.isChecked = !offer.isChecked;
            }

            return newOfferObj;
        });

        //update state
        setOffers(newOffers);
    }

    return(
        <div>
            <div className="title">
                Search
                <Breadcrumb>
                    <BreadcrumbItem>
                        <a href="#!">Page</a>
                    </BreadcrumbItem>
                    <BreadcrumbItem isActive={true}>
                        Search
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <br/>
            <Container className="search-page">
                <Row >
                    <Col sm={12} md={12} lg={3}>
                        <Row className="sticky-top">
                            <Box md={12}>
                                <BoxTitle label="Category"/>
                                { categories.map(category => (
                                    <div className="m-t-10" key={category.id}>
                                        <Checkbox isChecked={category.isChecked} handleChange={handleCategoryFilter.bind(this, category.id)} label={category.label}/>
                                    </div>
                                )) }
                            </Box>
                            <Box md={12}>
                                <BoxTitle label="Offer"/>
                                { offers.map(offer => (
                                    <div className="m-t-10" key={offer.id}>
                                        <Checkbox isChecked={offer.isChecked} handleChange={handleOfferFilter.bind(this, offer.id)} label={offer.label}/>
                                    </div>
                                )) }
                            </Box>
                            <Box md={12}>
                                <BoxTitle label="Price Range"/>
                                <div
                                    style={{
                                        marginTop: '20px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        flexWrap: 'wrap'
                                    }}
                                >
                                <Range
                                    values={rangePrice}
                                    step={STEP}
                                    min={MIN}
                                    max={MAX}
                                    onChange={values => setRangePrice(values)}
                                    renderTrack={({ props, children }) => (
                                        <div
                                        onMouseDown={props.onMouseDown}
                                        onTouchStart={props.onTouchStart}
                                        style={{
                                            ...props.style,
                                            height: '60px',
                                            display: 'flex',
                                            width: '100%'
                                        }}
                                        >
                                        <div
                                            ref={props.ref}
                                            style={{
                                            height: '5px',
                                            width: '100%',
                                            borderRadius: '4px',
                                            background: getTrackBackground({
                                                values: rangePrice,
                                                colors: ['#ccc', '#7757F7', '#ccc'],
                                                min: MIN,
                                                max: MAX
                                            }),
                                            alignSelf: 'center'
                                            }}
                                        >
                                            {children}
                                        </div>
                                        </div>
                                    )}
                                    renderThumb={({ index, props, isDragged }) => (
                                        <div
                                        {...props}
                                        style={{
                                            ...props.style,
                                            height: '25px',
                                            width: '25px',
                                            borderRadius: '4px',
                                            backgroundColor: '#FFF',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            boxShadow: '0px 2px 6px #AAA'
                                        }}
                                        >
                                        <div
                                            style={{
                                            position: 'absolute',
                                            top: '-30px',
                                            color: '#fff',
                                            fontWeight: 'lighter',
                                            fontSize: '10px',
                                            fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
                                            padding: '4px',
                                            borderRadius: '4px',
                                            backgroundColor: '#7757F7',
                                            boxShadow: '0px 2px 6px #AAA'
                                            }}
                                        >
                                            ${rangePrice[index].toFixed(1)}
                                        </div>
                                        <div
                                            style={{
                                            height: '8px',
                                            width: '5px',
                                            backgroundColor: isDragged ? '#7757F7' : '#CCC'
                                            }}
                                        />
                                        </div>
                                    )}
                                />
                            </div>
                            </Box>
                        </Row>
                    </Col>
                    <Col sm={12} md={12} lg={9}>
                        <Row className="m-b-20">
                            <Col md={6} lg={8} className="m-b-10">
                                <H4>Keyword Search:</H4>
                                <Input placeholder="search name..."/>
                            </Col>
                            <Col md={6} lg={4} className="right">
                                <H4>Sort by:</H4>
                                <Select>
                                    { sorts.map(sort => (
                                        <option key={sort.id} value={sort.id}>{sort.label}</option>
                                    )) }
                                </Select>
                            </Col>
                        </Row>

                        {/* product list */}
                        <Row>
                            { products.map((product, index) => (
                                <Col key={index} xs={12} sm={12} md={6} lg={4} className="m-b-10">
                                    <ProductCard>
                                        <ProductCardName>{ product.name }</ProductCardName>
                                        <ProductCardCategory>{ product.category.label }</ProductCardCategory>
                                        <ProductCardImage image={ product.image }/>
                                        <ProductCardDescription maxLength={150}>
                                            { product.description }
                                        </ProductCardDescription>
                                        <ProductCardPrice price={ product.price } afterDiscountPrice={ product.afterDiscountPrice } currency="$"/>
                                    </ProductCard> 
                                </Col>
                            )) }  
                        </Row>

                        <Row>
                            <Col md={12}>
                                <div align="center">
                                    <Button label="Load More"/>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SearchPage;