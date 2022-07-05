/** @format */

import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {selectTMseries} from "../../actions/product";
import SearchPage from "../../components/SearchPage";

function HomePageContainer(props) {
  const listProductProps = props.history.location.state.products;
  const [listChild, setListChild] = useState([]);
  const titlePage = props.history.location.state.value

  const valueProps = props.history.location.state.value
    .replace(/\s/g, "")
    .toLowerCase();

  useEffect(() => {
    const listItem = listProductProps.filter((item) => {
      if (item.name.replace(/\s/g, "").toLowerCase().includes(valueProps)) {
        return item;
      }
    });
    setListChild(listItem);
  }, [valueProps]);

  const sortValue = (value, listChildProps) => {
    const sortList = listChildProps
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
    setListChild(sortList);
  };
  

  return (
    <>
      <SearchPage titlePage={titlePage} sortValue={sortValue} listProducts={listChild} />
    </>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectTMseries: (data) => {
      return dispatch(selectTMseries(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
