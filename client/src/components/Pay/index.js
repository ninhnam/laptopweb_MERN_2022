/** @format */

import { Grid, Button} from "@material-ui/core";
import {withStyles} from "@material-ui/styles";
import React, {useEffect, useState} from "react";
import styles from "./styles";
import pay1 from "./img/pay1.svg";
import pay2 from "./img/pay2.svg";
import PayingProduct from "./../PayingProduct";
import {toastSuccess} from "./../../helper/toastHelper";
import {connect} from "react-redux";
import { deleteCart } from "../../actions/product";
import { useHistory } from "react-router";

function Pay(props) {
  const {classes} = props;
  const [product, setProduct] = useState({});
  const [sumPriceProps, setSumPriceProps] = useState("");

  useEffect(() => {
    let stateValue = props.history.location.state;
    if (stateValue.sumPrice) {
      setSumPriceProps(props.history.location.state.sumPrice);
    } else {
      setProduct(props.history.location.state.product);
      setSumPriceProps(props.history.location.state.product.price);
    }
  }, [props.history.location.state]);

  const [inputName, setinputName] = useState(false);
  const [inputNum, setinputNum] = useState(false);
  const [inputAdd, setinputAdd] = useState(false);
  const [disable, setDisable] = useState(false);

  const renderProduct = () => {
    if (props.history.location.state.productName) {
      let productsName = props.history.location.state.productName;
      // if (props.listProducts.length > 0) {
      //   let listPayingProducts = []
      //   productsName.forEach((nameItem) => {
      //     props.listProducts.forEach((product) => {
      //       if (product.name.replace(/\s/g, "") == nameItem) {
      //         listPayingProducts = [...listPayingProducts, <PayingProduct product={product} />]
      //       }
      //     });
      //   });
        const listPayingProducts = props.history.location.state.productName.map(item => {
            return <PayingProduct product={item} />
        })
        return listPayingProducts
      // }
    } else {
      return <PayingProduct product={product} />;
    }
  };

  let history = useHistory();
  const setValue = () => {
    document.querySelector("#inputValuePaying1").value = "";
    document.querySelector("#inputValuePaying2").value = "";
    document.querySelector("#inputValuePaying3").value = "";
    toastSuccess(
      "Hệ thống chúng tôi sẽ liên hệ xác thực và hướng dẫn các bước tiếp theo trong thời gian sớm nhất"
    );
    setDisable(false);
    setinputName(false);
    setinputNum(false);
    setinputAdd(false);
    const detailUser = props.history.location.state.detailUser
    if(detailUser){
      let data = {
      ...detailUser,
      cartProduct: []
    }
    let newData = {
      data: data,
      ID: detailUser.id,
      mess: 'ok',
    };
    // props.addCart(newData)
    props.history.location.state.productName.forEach(item => {
      props.deleteCart({
        id: item._id,
        token: JSON.parse(localStorage.getItem("NinhNamUser")).token,
      })
    })
    history.push({
      pathname: "/",
    });
    }
  };

  useEffect(() => {
    if (inputNum && inputAdd && inputName) {
      setDisable(true);
    }
  }, [inputName]);
  useEffect(() => {
    if (inputNum && inputAdd && inputName) {
      setDisable(true);
    }
  }, [inputNum]);
  useEffect(() => {
    if (inputNum && inputAdd && inputName) {
      setDisable(true);
    }
  }, [inputAdd]);

  const handleButton = (e) => {
    e.target.style.border = "1px solid #ccc";
    if (e.target.name === "valueName") {
      setinputName(true);
    }
    if (e.target.name === "valueNum") {
      setinputNum(true);
    }
    if (e.target.name === "valueAdd") {
      setinputAdd(true);
    }
  };

  const handleButtonBlur = (e) => {
    if (e.target.value === "") {
      e.target.style.border = "1px solid red";
      if (e.target.name === "valueName") {
        setinputName(false);
      }
      if (e.target.name === "valueNum") {
        setinputNum(false);
      }
      if (e.target.name === "valueAdd") {
        setinputAdd(false);
      }
    } else {
      e.target.style.border = "1px solid #ccc";
      if (e.target.name === "valueName") {
        setinputName(true);
      }
      if (e.target.name === "valueNum") {
        setinputNum(true);
      }
      if (e.target.name === "valueAdd") {
        setinputAdd(true);
      }
    }
  };

  return (
    <>
      <h2 className={classes.PayTitle}>GIỎ HÀNG CỦA BẠN</h2>
      <div className={classes.container}>
        <Grid
          id="containerPaying"
          container
          spacing={4}
          className={classes.payingcontainer}
        >
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <div className={classes.boxCart}>
              <div className={classes.boxCartItem}>{renderProduct()}</div>
              <div className={classes.freeSaiGon}>
                (*) Miễn phí giao hàng khu vực TP HCM.{" "}
              </div>
            </div>
            <div className={classes.boxCartBill}>
              <div className={classes.boxCartBillTitle}>Tổng tiền</div>
              <div className={classes.boxCartBillNum}>{sumPriceProps} đ</div>
            </div>

            <div className={classes.boxPayContainer}>
              <h3 className={classes.boxPaytitle}>CHỌN HÌNH THỨC THANH TOÁN</h3>
              <div className={classes.boxPay}>
                <div className={classes.Paycheckbox}>
                  <input type="radio" name="paying" />
                  <img
                    alt="imgm2"
                    className={classes.imgPaycheckbox}
                    src={pay1}
                  />
                  <div className={classes.PayContent}>
                    Giao hàng thu tiền tại nhà(COD)
                  </div>
                </div>
                <div className={classes.Paycheckbox}>
                  <input type="radio" name="paying" />
                  <img
                    alt="imgm2"
                    className={classes.imgPaycheckbox}
                    src={pay2}
                  />
                  <div className={classes.PayContent}>Cà thẻ khi nhận hàng</div>
                </div>
                <div className={classes.Paycheckbox}>
                  <input type="radio" name="paying" />
                  <img
                    alt="imgm2"
                    className={classes.imgPaycheckbox}
                    src={pay2}
                  />
                  <div className={classes.PayContent}>Chuyển khoản</div>
                </div>
                <div className={classes.infoPayingTransfer}>
                  <div className={classes.infoPayingTransferLabel}>
                    Thông tin chuyển khoản:
                  </div>
                  <div className={classes.infoTransferDetail}>
                    <div className={classes.infoTransferItem}>
                      <span className={classes.infoPayingTransferBold}>
                        Tên tài khoản:{" "}
                      </span>
                      Công Ty TNHH MTV Tin Học Trần Phát
                    </div>
                    <div className={classes.infoTransferItem}>
                      <span className={classes.infoPayingTransferBold}>
                        Ngân hàng:{" "}
                      </span>
                      Ngân Hàng Á Châu - Phú Thọ
                    </div>
                    <div className={classes.infoTransferItem}>
                      <span className={classes.infoPayingTransferBold}>
                        Số tài khoản:{" "}
                      </span>
                      1014049002
                    </div>
                  </div>
                  <div className={classes.infoTransferDetail}>
                    <div className={classes.infoTransferItem}>
                      <span className={classes.infoPayingTransferBold}>
                        Tên tài khoản:{" "}
                      </span>
                      Đặng Thành Ninh
                    </div>
                    <div className={classes.infoTransferItem}>
                      <span className={classes.infoPayingTransferBold}>
                        Ngân hàng:{" "}
                      </span>
                      Vietcombank Đức Phổ
                    </div>
                    <div className={classes.infoTransferItem}>
                      <span className={classes.infoPayingTransferBold}>
                        Số tài khoản:{" "}
                      </span>
                      1014049002
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid
            id="payingInfo"
            item
            xs={6}
            sm={6}
            md={6}
            lg={6}
            className={classes.isBasic}
          >
            <div className={classes.infoLabel}>THÔNG TIN ĐẶT HÀNG</div>
            <div>
              <input
                type="text"
                name="valueName"
                id="inputValuePaying1"
                onChange={handleButton}
                onBlur={handleButtonBlur}
                placeholder="Tên của bạn"
                className={classes.infoInput}
              />
            </div>
            <div>
              <input
                type="text"
                name="valueNum"
                id="inputValuePaying2"
                onChange={handleButton}
                onBlur={handleButtonBlur}
                placeholder="Số điện thoại"
                className={classes.infoInput}
              />
            </div>
            <div>
              <input
                type="text"
                name="valueAdd"
                id="inputValuePaying3"
                onChange={handleButton}
                onBlur={handleButtonBlur}
                placeholder="Địa chỉ"
                className={classes.infoInput}
              />
            </div>
            <div>
              <textarea
                placeholder="Ghi chú"
                rows="4"
                className={classes.infoInput}
              ></textarea>
            </div>
            <div className={classes.warningLabel}>
              Bạn vui lòng nhập đúng số điện thoại để chúng tôi sẽ gọi xác nhận
              đơn hàng trước khi giao hàng. Xin cảm ơn!
            </div>
            <Button
              disabled={!disable}
              onClick={setValue}
              variant="contained"
              className={classes.buyingBtn}
            >
              <div className={classes.buying}>MUA NGAY</div>
              <div className={classes.buyTitle}>
                Gọi xác nhận và giao hàng tận nơi
              </div>
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

// const FORM_NAME = "TASK-MANAGEMENT";

const mapStateToProps = (state) => {
  return {
    listProducts: state.product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCart: (data) => {
      return dispatch(deleteCart(data));
    },};
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Pay)
);
