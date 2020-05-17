import React from 'react';
import Products from "../products/products";
import {Header} from "../header/header";
import {Route} from "react-router-dom";
import Cart from "../cart/cart";
import SignIn from "../sign-in/sign-in";

const App = () => {

    return <div>
        <Header/>
        <Route exact path = "/" render = {() => <Products />} />
        <Route path = "/cart" render = {() => <Cart />} />
        {/*<Route path = "/sign-in" render = {() => <SignIn />} />*/}
    </div>
};

export {App}