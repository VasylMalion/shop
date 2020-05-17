import {ADD_PRODUCT_TO_CART,
    ENCREASE_PRODUCT,
    DECREASE_PRODUCT,
    DELETE_PRODUCT } from "../actions/constants";

const initialState = {
    productsList: [
        {id: 1, name: 'Футболка', price: 300, img: "https://www.fatline.com.ua/images/products/backs/const/m_f_14.png"},
        {id: 2, name: 'Шапка', price: 120, img: "https://cdn.sportmaster.ua/i/2000_2000/products/236670/tRT1saPH.jpeg"},
        {id: 3, name: 'Штани', price: 40, img: "https://sport-co.com.ua/news/img/f7f397544b2200d21af81c0643bad8cb.jpg"}
    ],
    cart: [],
    total: 0
};

const operationInCart = (state, id, countProduct) => {

    const productsList = state.productsList;
    const cart = state.cart;

    const idCart = cart.findIndex( item => item.id === id);
    const cartItem = cart[idCart];

    const idProducts = productsList.findIndex(item => item.id === cartItem.id);
    const productItem = productsList[idProducts];

    const updateCartItem = {
        ...cartItem,
        count: cartItem.count + countProduct,
        price: cartItem.price + countProduct * productItem.price
    };

    if (!updateCartItem.count) {
        return {
            ...state,
            cart: [
                ...cart.slice(0, idCart),
                ...cart.slice(idCart + 1)
            ],
            total: state.total - productItem.price
        };
    }

    return {...state,
        cart: [
            ...state.cart.slice(0, idCart),
            updateCartItem,
            ...state.cart.slice(idCart + 1),
        ],
        total: state.total + countProduct * productItem.price
    };
};

const products = (state = initialState, action) => {

    const products = state.productsList;
    const cart = state.cart;
    const total = state.total;

    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            const indProducts = products.findIndex( item => item.id === action.id);
            const newItemCart = {...products[indProducts], count: 1};

            const indInCart = cart.findIndex( item => item.id === action.id);
            const isInCart = cart[indInCart];

            if (isInCart) {
                return state;
            } else {
                return {
                    ...state,
                    cart: [
                        ...cart,
                        newItemCart
                    ],
                    total: total + newItemCart.price
                };
            }

        case ENCREASE_PRODUCT:
            return operationInCart(state, action.id, 1);

        case DECREASE_PRODUCT:
            return operationInCart(state, action.id, -1);

        case DELETE_PRODUCT:
            const indDelete = cart.findIndex( item => item.id === action.id);

            return {
                ...state,
                cart: [
                    ...cart.slice(0, indDelete),
                    ...cart.slice(indDelete + 1)
                ],
                total: total - cart[indDelete].price
            };
        default:
            return state;
    }
};

export {products}