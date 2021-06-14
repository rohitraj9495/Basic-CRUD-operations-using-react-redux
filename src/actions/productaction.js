import {ADD_PRODUCT, GET_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT} from '../constant/types';

//actions
export const addProduct=(product) => ({
        type:ADD_PRODUCT,
        payload:product,
    });


// get product

export const getProduct = (id) => ({
    type: GET_PRODUCT,
    payload: id,
});

// update a product

export const updateProduct = (product) => ({
    type: UPDATE_PRODUCT,
    payload: product,
});

//Delete a product

export const deleteProduct = (id) => ({
    type: DELETE_PRODUCT,
    payload: id,
});