import React from "react";
import ProductItem from "../product-item/product-item";
import {connect} from "react-redux";
import "./products.scss";

const Products = ({products}) => {

    const productsMap = products.map( (product, idx) => <div
        className = "products__item"
        key = {idx} >
            <ProductItem product={product} />
    </div>);

    return <div className = "products" >
        <span className = "products__map" > {productsMap} </span>
    </div>
};

const mapStateToProps = ({products}) => {

    return {
        products: products.productsList
    }
};

export default connect(mapStateToProps)(Products);
