/** @format */

import {withStyles} from "@material-ui/styles";
import React from "react";
import styles from "./styles";

function PayingProduct(props) {
  const {classes, product} = props;

  return (
    <div className={classes.container}>
      <div className={classes.Left}>
        <img alt="Imageisok" className={classes.ImgLeft} src={product.linkImg} />
      </div>
      <div className={classes.Right}>
        <div className={classes.ProductName}>{product.name}</div>
        <div className={classes.ProductPrice}>{product.price}</div>
        <div className={classes.ItemRight}>
          <span className={classes.ItemRightBold}>CPU: </span>
          {product.CPUCompact}
        </div>
        <div className={classes.ItemRight}>
          <span className={classes.ItemRightBold}>RAM: </span>
          {product.RamCompact}
        </div>
        <div className={classes.ItemRight}>
          <span className={classes.ItemRightBold}>Đĩa cứng: </span>
          {product.memoryCompact}
        </div>
        <div className={classes.ItemRight}>
          <span className={classes.ItemRightBold}>Màn hình: </span>
          {product.screenCompact}
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(PayingProduct);
