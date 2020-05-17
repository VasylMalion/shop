import {ADD_PRODUCT_TO_CART,
    DECREASE_PRODUCT,
    ENCREASE_PRODUCT,
    DELETE_PRODUCT} from "./constants";

const addProductToCart = (id) => {

    return {
        type: ADD_PRODUCT_TO_CART,
        id
    }
};

const encreaseProduct = (id) => {

    return {
        type: ENCREASE_PRODUCT,
        id
    }
};

const decreaseProduct = (id) => {

    return {
        type: DECREASE_PRODUCT,
        id
    }
};

const deleteProduct = (id) => {

    return {
        type: DELETE_PRODUCT,
        id
    }
};

export {
    addProductToCart,
    encreaseProduct,
    decreaseProduct,
    deleteProduct
}