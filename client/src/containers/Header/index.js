/** @format */

import React, {useEffect} from "react";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as productActions from "./../../actions/product";

function HeaderContainer(props) {

  useEffect(() => {
    const {productActionsCreators} = props;
    const {getProducts} = productActionsCreators;
    getProducts();
  }, []);

  return (
    <>
      <Header />
      <Navigation />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    listProducts: state.product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    productActionsCreators: bindActionCreators(productActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
