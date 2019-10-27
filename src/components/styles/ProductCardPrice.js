import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types
import CurrencyFormat  from 'react-currency-format';

const ProductCardPrice = (props) => {
    //get currency
    const currency = typeof props.currency !== 'undefined' ? props.currency : '$ ';

    //get price
    const price = typeof props.price !== 'undefined' ? props.price : 0;

    //get after discount price
    const afterDiscountPrice = typeof props.price !== 'undefined' ? props.afterDiscountPrice : 0;

    return(
        <div className="product-card-price">
            <div className={'normal-price '+(afterDiscountPrice > 0 ? 'discount' : '')}>
                {currency} <CurrencyFormat value={ price } displayType={'text'} thousandSeparator={true}/>
            </div>
            { afterDiscountPrice > 0 ? (
                <div className="discount-price">
                    {currency} <CurrencyFormat value={ afterDiscountPrice } displayType={'text'} thousandSeparator={true}/>
                </div>
            ): '' }
        </div>
    );
}

//prop types initialize
ProductCardPrice.propTypes = {
    currency: PropTypes.string,
    price: PropTypes.number,
    afterDiscountPrice: PropTypes.number,
}

export default ProductCardPrice;