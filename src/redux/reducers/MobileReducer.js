// src/redux/reducers/MobileReducer.js

import { ADD_PRODUCT_SUCCESS, REMOVE_PRODUCT_SUCCESS } from '../actions/Product-action';

import { SET_CART_PRODUCTS } from '../actions/Product-action';

// import iphone12 from './images/iphone12.png';

// import iphone14 from './images/iphone141.png';
// import iphone16 from './images/iphone16.png';


const initialProductList = {
    noofProducts: 0,
    
    cartProducts: [],
    products: [
        {
            
            name: "shirt",
            price: 13.99,
            originalPrice: 20.99,
            rating: 4,
            reviews: 310,
            features: ["100% cotton", "Light weight", "Best finish"],
            description: "Good for goingout",
            imageUrl: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp",
        },
        {
            
            name: "Brown shoes",
            price: 14.99,
            originalPrice: 21.99,
            rating: 4,
            reviews: 289,
            features: ["100% cotton", "Light weight", "Best finish"],
            description: "less variation of same type",
            imageUrl: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(4).webp",
        },
        {
            
            name: "purse",
            price: 17.99,
            originalPrice: 25.99,
            rating: 4,
            reviews: 145,
            features: ["100% cotton", "Light weight", "Best finish"],
            description: "purse with love",
            imageUrl: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(5).webp",
        }
    ],
};

export const productListReducer = (state = initialProductList, action) => {
    switch (action.type) {
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                noofProducts: state.noofProducts + 1,
                cartProducts: [...state.cartProducts, action.product],
            };
        case REMOVE_PRODUCT_SUCCESS:
            return {
                ...state,
                noofProducts: state.noofProducts - 1,
                cartProducts: state.cartProducts.filter(product => product.id !== action.product.id),
            };
            case SET_CART_PRODUCTS:
            return {
                ...state,
                cartProducts: action.payload,
            };
        default:
            return state;
    }
};

