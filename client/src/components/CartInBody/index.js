/** @format */

import {Grid, withStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, {useEffect, useState} from "react";
import styles from "./styles";

import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";
import {toggleLogIn} from "../../actions/ui";
import {connect} from "react-redux";
import {changeUserLocal} from "../../actions/user";
import {getCart} from "../../actions/product";
import CartProduct from "../CartProduct/index";

function CartInBody(props) {
  const [cartList, setCartList] = useState([]);
  let history = useHistory();
  
  useEffect(() => {
    if (localStorage.getItem("NinhNamUser")) {
      // console.log(JSON.parse(localStorage.getItem("NinhNamUser")).token);
      props.getCart(JSON.parse(localStorage.getItem("NinhNamUser")).token);
    }
  }, []);

  useEffect(() => {
      // props.getCart(JSON.parse(localStorage.getItem("NinhNamUser")).token);
      renderCartItem()
  }, [props.handleCart]);

  const renderCartItem = () => {
    if (props.handleCart === []) {
      return (
        <h2 className={classes.DPnavItem}>Giỏ hàng chưa được thêm sản phẩm</h2>
      );
    } else {
      return props.handleCart.map((item) => {
        return <CartProduct product={item} />;
      });
    }
  };

  const renderBillItem = () => {
    if (props.handleCart === []) {
      return {
        totalPd: 0,
        totalBuy: 0,
      };
    } else {
      let totalPd = 0;
      let totalBuy = 0;
      props.handleCart.forEach((item) => {
        totalPd += Number(item.quantity);
        totalBuy += Number(item.priceReal) * Number(item.quantity);
      });
      return {
        totalPd: totalPd,
        totalBuy: totalBuy.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,"),
      };
    }
  };

  const buyingCart = () => {
    history.push({
      pathname: "/paying",
      state: {productName: props.handleCart, sumPrice: renderBillItem().totalBuy, detailUser: ' '},
    });
  }

  const {classes} = props;
  return (
    <div className={classes.container}>
      <div className={classes.DPnav}>
        <span>
          <Link className={classes.DPnavItemHome} to="/">
            Trang chủ
          </Link>
        </span>
        /
        <span className={classes.DPnavItem} to="/">
          Giỏ hàng
        </span>
      </div>
      <h2 className={classes.header}>Giỏ hàng của bạn</h2>

      {/* <CartProduct />
      <CartProduct /> */}
      {renderCartItem()}

      <div className={classes.totalBill}>
        <div className={classes.billDiv}>
          <div className={classes.billLabel}>Số sản phẩm:</div>
          <div className={classes.billNumber}>{renderBillItem().totalPd}</div>
        </div>
        <div className={classes.billDiv}>
          <div className={classes.billLabel}>Tổng tiền:</div>
          <div className={classes.billNumber}>
            {renderBillItem().totalBuy} VNĐ
          </div>
        </div>
      </div>

      <div className={classes.btnBuy}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.buyBill}
          onClick={buyingCart}
        >
          Mua ngay
        </Button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    handleCart: state.handleCart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleLogIn: () => {
      return dispatch(toggleLogIn());
    },
    changeUserLocal: () => {
      return dispatch(changeUserLocal());
    },
    getCart: (data) => {
      return dispatch(getCart(data));
    },
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(CartInBody)
);
