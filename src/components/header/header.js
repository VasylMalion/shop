import React from "react";
import {NavLink} from "react-router-dom";
import "./header.scss";

const Header = () => {

    return <div className = "header">
        <NavLink className = "header__link" to = '/' > Shop.ua </NavLink>
        <NavLink className = "header__link" to = '/cart' > Shopping Cart </NavLink>
        <NavLink className = "header__link" to = '/sign-in' > Sign In</NavLink>
    </div>
};

export {Header}