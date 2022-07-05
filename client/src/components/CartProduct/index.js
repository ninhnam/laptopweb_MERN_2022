/** @format */

import {withStyles} from "@material-ui/core";
import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import styles from "./styles";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {deleteCart, updateCart} from "../../actions/product";
import Button from "@material-ui/core/Button";



function CartProduct(props) {
  // const {classes, productName, listProducts} = props;
  const {classes, product} = props;
  // const [product, setProduct] = useState({
  //   name: "Macbook Air M1",
  //   price: "28,500,000",
  //   priceReal: 28500000,
  //   pastPrice: "30,500,000",
  //   trademark: "macbook",
  //   CPU: "Intel Core i5 - 2.3 Ghz up 3.8Ghz 4MB",
  //   CPUCompact: "Core i5",
  //   Ram: "16GB 2133MHz LPDDR3",
  //   RamCompact: "16GB",
  //   memoryCompact: "256GB",
  //   Card: "Iris Plus Graphics 640",
  //   screen: "13inch Retina ( 2560 x 1600 )",
  //   screenCompact: "13inch",
  //   status: true,
  //   linkImg: "https://laptops.vn/uploads/macbook-air-m1_4_1628519993.jpg"
  // });

  // useEffect(() => {
  //   if (listProducts.length > 3) {
  //     let newProduct = listProducts.find((item) => {
  //       return item.name.replace(/\s/g, "") === productName;
  //     });
  //     setProduct(newProduct);
  //   }
  // }, [listProducts]);

  const delCartProduct = () => {
    props.deleteCart({
      id: product._id,
      token: JSON.parse(localStorage.getItem("NinhNamUser")).token,
    })
  }

  const reduceCart = () => {
    if(Number(product.quantity) > 1) {
      let newQt = Number(product.quantity) - 1
      let newPd = {...product, quantity: newQt}
      props.updateCart({product:newPd, token:JSON.parse(localStorage.getItem("NinhNamUser")).token})
    } else {

    }
  }

  const increaseCart = () => {
    let newQt = Number(product.quantity) + 1
      let newPd = {...product, quantity: newQt}
      props.updateCart({product:newPd, token:JSON.parse(localStorage.getItem("NinhNamUser")).token})
  }
  

  return (
    <div className={classes.container}>
      <div className={classes.Left}>
        <img alt="Imageok" className={classes.ImgLeft} src={product.linkImg} />
      </div>
      <div className={classes.Right}>
        <div className={classes.ProductName}>{product.name}</div>
        <div className={classes.ProductPrice}>{product.price}</div>
      </div>
      <div className={classes.quantity}>
        <Button disabled={Number(product.quantity) === 1 ? true : false} onClick={reduceCart} variant="contained" color="primary" className={classes.btnQtt}>
          -
        </Button>
        <span className={classes.quantityNumber}>{product.quantity}</span>
        <Button onClick={increaseCart} variant="contained" color="primary" className={classes.btnQtt}>
          +
        </Button>
      </div>
      <div
        className={classes.ItemIcon}
        
      >
        <DeleteForeverIcon onClick={delCartProduct} className={classes.DeleteForever} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    listProducts: state.product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCart: (data) => {
      return dispatch(deleteCart(data));
    },
    updateCart: (data) => {
      return dispatch(updateCart(data));
    },
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(CartProduct)
);
