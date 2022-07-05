/** @format */

import {Grid} from "@material-ui/core";
import {withStyles} from "@material-ui/styles";
import React from "react";
import styles from "./styles";
import image from "./../../commons/img/logo_tran_phat.png";

function Promotion(props) {
  const {classes} = props;

  const styleTop = {paddingBottom: 2, top: 6};
  const styleBot = {paddingTop: 2, bottom: 6};

  return (
    <div className={classes.container}>
      <Grid container className={classes.itemPar}>
        <Grid item className={classes.ItemChild}>
          <div className={classes.beforeItem}></div>
          <img alt="okimg" src={image} className={classes.imgItem} />
        </Grid>
        <Grid item className={classes.ItemChild}>
          <div className={classes.beforeItem}></div>
          <div className={classes.itemTop} style={styleTop}>
            LỖI MÁY
          </div>
          <div className={classes.itemBottom} style={styleBot}>
            1 ĐỔI 1
          </div>
        </Grid>
        <Grid item className={classes.ItemChild}>
          <div className={classes.beforeItem}></div>
          <div className={classes.itemBottom} style={styleTop}>
            7 NGÀY
          </div>
          <div className={classes.itemTop} style={styleBot}>
            DÙNG THỬ
          </div>
        </Grid>
        <Grid item className={classes.ItemChild}>
          <div className={classes.beforeItem}></div>
          <div className={classes.itemTop} style={styleTop}>
            BẢO HÀNH
          </div>
          <div className={classes.itemBottom} style={styleBot}>
            12 THÁNG
          </div>
        </Grid>
        <Grid item className={classes.ItemChild}>
          <div className={classes.beforeItem}></div>
          <div className={classes.itemBottom} style={styleTop}>
            TRẢ GÓP
          </div>
          <div className={classes.itemTop} style={styleBot}>
            TÍN CHẤP
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Promotion);
