/** @format */

import React, {useEffect, useState} from "react";
import TradeMarkProduct from "../../components/TradeMarkProduct";
import {connect} from "react-redux";
import {selectTMseries} from "./../../actions/product";

function HomePageContainer(props) {
  const {listProducts} = props;
  const [productList, setProductList] = useState(listProducts);
  const [sortList, setSortList] = useState(listProducts);
  useEffect(() => {
    setProductList(listProducts);
    setSortList(listProducts);
  }, [listProducts]);

  const selectTMseries = (value) => {
    const {selectTMseries} = props;

    if (value.includes("Dell")) {
      value = value.slice(5, value.length);
      selectTMseries(value);
    }
    if (value.includes("HP")) {
      value = value.slice(3, value.length);
      selectTMseries(value);
    }
    if (value.includes("ThinkPad")) {
      value = value.slice(10, value.length).replaceAll(/\s/g, "");
      selectTMseries(value);
    }

    if (value === props.seriesValue) {
      setProductList(listProducts);
      setSortList(listProducts);
      selectTMseries(null);
    } else {
      let NewlistProducts = listProducts.filter((item) => {
        return item.series.includes(value);
      });
      setProductList(NewlistProducts);
      setSortList(NewlistProducts);
    }
  };

  const sortValue = (value) => {
    sortList.sort((a, b) => {
      let fa = a.price;
      let fb = b.price;

      if (fa < fb) {
        return 1 * value;
      }
      if (fa > fb) {
        return -1 * value;
      }
      return 0;
    });
    setProductList(sortList);
  };

  return (
    <>
      <TradeMarkProduct
        selectTMseries={selectTMseries}
        listProducts={productList}
        trademarkName={props.match.url}
        seriesValue={props.seriesValue}
        sortValue={sortValue}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    listProducts: state.product,
    seriesValue: state.selectTMseries,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectTMseries: (data) => {
      return dispatch(selectTMseries(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
