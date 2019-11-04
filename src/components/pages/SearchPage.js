import React, { useState } from 'react';
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
    Button} from '../styles';

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

    /* hooks */
    const [products, setProducts] = useState(defaultProducts);
    const [categories, setCategories] = useState(defaultCategories);
    const [offers, setOffers] = useState(defaultOffers);

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
            <Container>
                <Row>
                    <Col sm={12} md={12} lg={3}>
                        <Row>
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
                        </Row>
                    </Col>
                    <Col sm={12} md={12} lg={9}>
                        <Row>
                            <Col md={6} lg={8}>
                                <H4>Searching Results:</H4>
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
                                <Col xs={12} sm={12} md={6} lg={4}>
                                    <ProductCard>
                                        <ProductCardName>{ product.name }</ProductCardName>
                                        <ProductCardCategory>{ product.category.label }</ProductCardCategory>
                                        <ProductCardImage image={ product.image }/>
                                        <ProductCardDescription maxLength={150}>
                                            { product.description }
                                        </ProductCardDescription>
                                        <ProductCardPrice price={ product.price } afterDiscountPrice={ product.afterDiscountPrice } currency="$"/>
                                        <Button label="ADD TO CART" size="small" className="m-1" />
                                        <Button label="ADD TO WISHLIST" size="small" type="danger" />
                                    </ProductCard> 
                                </Col>
                            )) }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SearchPage;