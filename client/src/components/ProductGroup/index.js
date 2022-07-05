/** @format */

import {Grid} from "@material-ui/core";
import {withStyles} from "@material-ui/styles";
import React from "react";
import styles from "./styles";
import ItemGroup from "./../ItemGroup/index";

import dell from "./img/dell.png";
import HP from "./img/HP.png";
import macbook from "./img/macbook.png";
import thinkpad from "./img/thinkpad.png";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {selectTMseries} from "./../../actions/product";

function ProdGroup(props) {
  const {classes, listProducts} = props;

  const dellList = [listProducts[27], listProducts[26], listProducts[24]];

  const HPList = [listProducts[16], listProducts[13], listProducts[15]];

  const macbookList = [listProducts[1], listProducts[2], listProducts[3]];

  const thinkpadList = [listProducts[7], listProducts[8], listProducts[9]];

  const renderInner = (e) => {
    if(e.target.id){
      props.selectTMseriesed(e.target.id)
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.rebellious}>
        <img
          src="https://laptops.vn/themes/laptops/images/icons/hot.svg"
          alt="hot"
          className={classes.hotFire}
        />
        <span className={classes.rebelliousTitle}>THƯƠNG HIỆU</span>
      </div>

      <Grid container className={classes.trmSum}>
        <Grid item className={classes.trmItem}>
          <Link className={classes.dell} to="/dellTradeMark">
            <img
              alt="thương hiệu"
              className={classes.TradeMarkItemLabel}
              src={dell}
            />
          </Link>
        </Grid>
        <Grid item className={classes.trmItem}>
          <Link className={classes.thinkpad} to="/thinkpadTradeMark">
            <img
              alt="thương hiệu"
              className={classes.TradeMarkItemLabel}
              src={thinkpad}
            />
          </Link>
        </Grid>
        <Grid item className={classes.trmItem}>
          <Link className={classes.HP} to="/HPTradeMark">
            <img
              alt="thương hiệu"
              className={classes.TradeMarkItemLabel}
              src={HP}
            />
          </Link>
        </Grid>
        <Grid item className={classes.trmItem}>
          <Link className={classes.macbook} to="/macbookTradeMark">
            <img
              alt="thương hiệu"
              className={classes.TradeMarkItemLabel}
              src={macbook}
            />
          </Link>
        </Grid>
      </Grid>

      <ItemGroup trademark="dell" productsList={dellList ? dellList : null} />
      <ItemGroup trademark="HP" productsList={HPList ? HPList : null} />
      <ItemGroup
        trademark="macbook"
        productsList={macbookList ? macbookList : null}
      />
      <ItemGroup
        trademark="thinkpad"
        productsList={thinkpadList ? thinkpadList : null}
      />
    </div>
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
    selectTMseriesed: (data) => {
      return dispatch(selectTMseries(data));
    },
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(ProdGroup)
);
