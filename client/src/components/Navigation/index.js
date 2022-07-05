/** @format */

import {Grid} from "@material-ui/core";
import React, {Component} from "react";
import styles from "./styles";
import {withStyles} from "@material-ui/styles";
import {Link} from "react-router-dom";
import {withRouter} from "react-router";

class Navigation extends Component {
  render() {
    const {classes, location} = this.props;
    const {pathname} = location;

    return (
      <Grid
        justifyContent="center"
        alignItems="center"
        className={classes.sumNav}
        container
        spacing={0}
      >
        <Grid className={classes.itemNavSum} item>
          <Link
            className={
              pathname === "/" ? classes.itemNavActive : classes.itemNav
            }
            to="/"
          >
            Trang chủ
          </Link>
        </Grid>
        <Grid className={classes.itemNavSum} item>
          <Link
            className={
              pathname === "/dellTradeMark"
                ? classes.itemNavActive
                : classes.itemNav
            }
            to="/dellTradeMark"
          >
            Laptop Dell
          </Link>
          <div className={classes.itemPar}>
            <div className={classes.itemChild}>Dell Latitude</div>
            <div className={classes.itemChild}>Dell Inspiron</div>
            <div className={classes.itemChild}>Dell Vostro</div>
          </div>
        </Grid>
        <Grid className={classes.itemNavSum} item>
          <Link
            className={
              pathname === "/HPTradeMark"
                ? classes.itemNavActive
                : classes.itemNav
            }
            to="/HPTradeMark"
          >
            Laptop HP
          </Link>
        </Grid>
        <Grid className={classes.itemNavSum} item>
          <Link
            className={
              pathname === "/macbookTradeMark"
                ? classes.itemNavActive
                : classes.itemNav
            }
            to="/macbookTradeMark"
          >
            Macbook
          </Link>
        </Grid>
        <Grid className={classes.itemNavSum} item>
          <Link
            className={
              pathname === "/thinkpadTradeMark"
                ? classes.itemNavActive
                : classes.itemNav
            }
            to="/thinkpadTradeMark"
          >
            ThinkPad
          </Link>
          <div className={classes.itemPar}>
            <div className={classes.itemChild}>ThinkPad T Series</div>
            <div className={classes.itemChild}>ThinkPad X Series</div>
            <div className={classes.itemChild}>ThinkPad K Series</div>
          </div>
        </Grid>
        <Grid className={classes.itemNavSum} item>
          <Link
            className={
              pathname === "/contact" ? classes.itemNavActive : classes.itemNav
            }
            to="/contact"
          >
            Liên hệ
          </Link>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(withRouter(Navigation));
