/** @format */

import {withStyles} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import styles from "./styles";
import CartProduct from "../CartProduct";
import Button from "@material-ui/core/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import "./main.css";
import {connect} from "react-redux";
import {toggleCartTable} from "../../actions/ui";
import {changeUserLocal} from "../../actions/user";
import {useHistory} from "react-router";
import {addCart} from "../../actions/product";

function Cart(props) {
  const {classes, listProducts} = props;
  const [cartProduct, setCartProduct] = useState([]);

  const [BillProduct, setBillProduct] = useState("0,000");
  const [detailUser, setDetailUser] = useState(
    JSON.parse(localStorage.getItem("NinhNamUser"))
  );

  useEffect(() => {
    if (props.handleCart.id !== 0) {
      setCartProduct(props.handleCart.cartProduct);

      let newListCartProduct = props.handleCart.cartProduct;

      let sumPrice = 0;
      newListCartProduct.forEach((itemName) => {
        listProducts.forEach((item) => {
          if (item.name.replace(/\s/g, "") === itemName) {
            sumPrice += Number(item.priceReal);
          }
        });
      });

      let a = Math.floor(sumPrice / 1000000);
      let b = (sumPrice - a * 1000000) / 1000;
      if (b === 0) {
        b = "000";
      }
      let stringBill = `${a},${b},000`;
      setBillProduct(stringBill);
    }
  }, [props.handleCart.cartProduct]);

  useEffect(() => {
    setCartProduct(detailUser.cartProduct);
    if (listProducts.length > 0) {
      let sumPrice = 0;
      detailUser.cartProduct.forEach((itemName) => {
        listProducts.forEach((item) => {
          if (item.name.replace(/\s/g, "") === itemName) {
            sumPrice += Number(item.priceReal);
          }
        });
      });

      let a = Math.floor(sumPrice / 1000000);
      let b = (sumPrice - a * 1000000) / 1000;
      if (b === 0) {
        b = "000";
      }
      let stringBill = `${a},${b},000`;
      setBillProduct(stringBill);
    }
    // }
  }, [listProducts]);

  props.changeUserLocal();

  const listItem = () => {
    return cartProduct.map((item, index) => {
      return (
        <CartProduct
          indexProductCart={index}
          deleteCartProduct={deleteCartProduct}
          productName={item}
          detailUser={detailUser}
        />
      );
    });
  };

  const deleteCartProduct = (value) => {
    let newCartProduct = detailUser.cartProduct;
    newCartProduct.splice(value, 1);
    setCartProduct(newCartProduct);

    let newData = detailUser;
    newData.cartProduct = newCartProduct;
    let data = {
      data: newData,
      ID: detailUser.id,
      mess: 'delete',
    };
    props.addCart(data);
  };

  const hiddenCart = () => {
    if (props.isLocal && props.cartTable) {
      return false;
    } else {
      return true;
    }
  };

  let history = useHistory();
  const buyingCart = () => {
    props.toggleCartTable();
    history.push({
      pathname: "/paying",
      state: {productName: cartProduct, sumPrice: BillProduct, detailUser: detailUser},
    });
  };

  return (
    <div hidden={hiddenCart()} className={classes.cartCom}>
      <div className={classes.productList}>
        <FontAwesomeIcon
          onClick={() => props.toggleCartTable()}
          className={classes.closeIcon}
          icon={faTimes}
        />
        <div className={classes.cartTitle}>Giỏ hàng</div>
        <div className={classes.listItem}>{listItem()}</div>
        <div className={classes.BillSummary}>
          <div className={classes.quantity}>
            <span className={classes.billLeftSum}>Số lượng :</span>
            <span className={classes.billRightSum}>{cartProduct.length}</span>
          </div>
          <div className={classes.sumBill}>
            <span className={classes.billLeftSum}>Tổng tiền :</span>
            <span className={classes.billRightSum}>{BillProduct}đ</span>
          </div>
        </div>
        <div className={classes.buyBtn}>
          <Button
            onClick={buyingCart}
            className={classes.buyButton}
            variant="contained"
          >
            Mua hàng
          </Button>
        </div>
      </div>
      <div
        onClick={() => props.toggleCartTable()}
        className={classes.overlay}
      ></div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLocal: state.isLocal,
    cartTable: state.cartTable,
    listProducts: state.product,
    handleCart: state.handleCart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartTable: () => {
      return dispatch(toggleCartTable());
    },
    changeUserLocal: () => {
      return dispatch(changeUserLocal());
    },
    addCart: (data) => {
      return dispatch(addCart(data));
    },
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Cart)
);
