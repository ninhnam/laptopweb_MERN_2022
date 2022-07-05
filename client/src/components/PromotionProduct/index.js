/** @format */

import React from "react";
import styles from "./styles";
import {Grid, withStyles} from "@material-ui/core";
import Product from "./../ProductReal/index";
import { connect } from "react-redux";

function Prproduct(props) {
  const {classes, listProducts} = props;
  const dellItem = listProducts[27]
  const HPItem = listProducts[14]
  const macbookItem = listProducts[1]
  const thinkpadItem = listProducts[8]

  const renderPr = () => {
    if(thinkpadItem){
      return(
        <Grid className={classes.ContainerProd} container>
            <Grid xs={3} item style={{padding: '20px 30px'}} className={classes.ProductItemHover}>
              <Product product={dellItem} />
            </Grid>
            <Grid xs={3} item style={{padding: '20px 30px'}} className={classes.ProductItemHover}>
              <Product product={HPItem} />
            </Grid>
            <Grid xs={3} item style={{padding: '20px 30px'}} className={classes.ProductItemHover}>
              <Product product={macbookItem} />
            </Grid>
            <Grid xs={3} item style={{padding: '20px 30px'}} className={classes.ProductItemHover}>
              <Product product={thinkpadItem} />
            </Grid>
          </Grid>
      )
    }else {
      return <></>
    }
  }


  return (
    <>
      <div className={classes.container}>
        <div className={classes.title}>
          <div className={classes.titleAfter}></div>
          <img
            src="https://laptops.vn/themes/laptops/images/icons/fire-flame.svg"
            alt="Fireflame"
            className={classes.fire}
          />
          <span className={classes.titleMain}>KHUYẾN MÃI HOT</span>
        </div>
        {renderPr()}
      </div>
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

  };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Prproduct))

