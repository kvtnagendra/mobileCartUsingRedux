// src/redux/actions/Product-action.js

export const ADD_PRODUCT_REQUEST = 'ADD_PRODUCT_REQUEST';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const REMOVE_PRODUCT_REQUEST = 'REMOVE_PRODUCT_REQUEST';
export const REMOVE_PRODUCT_SUCCESS = 'REMOVE_PRODUCT_SUCCESS';
export const SET_CART_PRODUCTS = 'SET_CART_PRODUCTS';

export const addProductRequest = (product) => ({
    type: ADD_PRODUCT_REQUEST,
    product,
});

export const addProductSuccess = (product) => ({
    type: ADD_PRODUCT_SUCCESS,
    product,
});

export const removeProductRequest = (product) => ({
    type: REMOVE_PRODUCT_REQUEST,
    product,
});

export const removeProductSuccess = (product) => ({
    type: REMOVE_PRODUCT_SUCCESS,
    product,
});

export const setCartProducts = (products) => ({
    type: SET_CART_PRODUCTS,
    payload: products,
});
