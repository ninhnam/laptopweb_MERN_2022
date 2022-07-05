/** @format */

import {Grid, withStyles} from "@material-ui/core";
import React from "react";
import styles from "./styles";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import Product from "./../ProductReal/index";

function TMProduct(props) {
  const {classes, listProducts, titlePage} = props;

  const renderItem = () => {
    return listProducts.map(item => {
      return (
        <Grid
          xs={3}
          md={3}
          sm={3}
          lg={3}
          item
          className={classes.TMProductitem}
        >
          <Product product={item} />
        </Grid>
      )
    })
  }

  const [age, setAge] = React.useState("");
  const sortValueChild = (val) => {
    setAge(val.target.value);
    props.sortValue(val.target.value, listProducts)
  }

  return (
    <div className={classes.container}>
      <div className={classes.PRnav}>
        <span className={classes.HPage}>
          <Link className={classes.HPage} to="/">
            Trang chủ
          </Link>
        </span>
        /<span className={classes.LTpage}>Tìm kiếm</span>
      </div>

      <div className={classes.titlePage}>Kết quả tìm kiếm cho "{titlePage}"</div>

      <div className={classes.FormControlPrice}>
        <FormControl className={classes.formControl}>
          <InputLabel
            className={classes.inputLabel}
            id="demo-simple-select-helper-label"
          >
            Giá:
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={age}
            onChange={sortValueChild}
          >
            <MenuItem value={0}>
              <em>Không</em>
            </MenuItem>
            <MenuItem value={-1}>Thấp đến cao</MenuItem>
            <MenuItem value={1}>Cao đến thấp</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* PRODUCT */}
      <Grid container spacing={2} className={classes.TMProductListitem}>
        {renderItem()}
      </Grid>

      <div className={classes.TMpaging}></div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TMProduct)
);
