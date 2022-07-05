/** @format */

import React from "react";
import Promotion from "../../components/Promotion/index";
import PrProduct from "../../components/PromotionProduct/index";
import ProductGroup from "../../components/ProductGroup/index";
import Feedback from "../../components/FeedBack/index";
import {connect} from "react-redux";
import Banner from "../../components/Banner/index";

import {bindActionCreators} from "redux";

import * as productActions from "../../actions/product";

function HomePageContainer(props) {
  // const {listProducts} = props;
  console.log(props)
  return (
    <>
      <Banner />
      <Promotion />
      <PrProduct />
      <ProductGroup />
      <Feedback />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
