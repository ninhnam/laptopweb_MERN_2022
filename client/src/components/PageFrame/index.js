/** @format */

import React from "react";
import Footer from "./../../components/Footer";
import OutsideLink from "../OutsideLink";

function PageFrame(props) {
  window.scroll(0, 0);

    let {children} = props;
    return (
      <>
        {children}
        <OutsideLink />
        <Footer />
      </>
    );
}

// const mapStateToProps = (state) => {
//   return {
//     listProducts: state.product,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

// const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default PageFrame;
