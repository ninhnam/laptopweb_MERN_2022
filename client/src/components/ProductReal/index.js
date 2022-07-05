/** @format */

import {withStyles} from "@material-ui/styles";
import React from "react";
import styles from "./styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faLaptop,
  faMicrochip,
  faSdCard,
  faStar,
  faFlagUsa,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Product(props) {
  const {classes, product} = props;

  let pathTo = `/products/${product.name.replaceAll(/\s/g,'')}`

  return (
    <Link className={classes.itemPrdSum} to={pathTo}>
      <div className={classes.product}>
        <img
        alt="imgnha"
          className={classes.itemPro}
          src={product.linkImg}
        />
        <div className={classes.itemName}>{product.name}</div>
        <div className={classes.itemPrice}>
          <div className={classes.priceRed}>
            {product.price}
            <span className={classes.vnd}>đ</span>
          </div>
          <div className={classes.priceBrown}>
            {product.pastPrice}
            <span className={classes.vnd}>đ</span>
          </div>
        </div>
        <div className={classes.feedB}>
          <div className={classes.star}>
            <FontAwesomeIcon className={classes.iconScreen} icon={faStar} />
            <FontAwesomeIcon className={classes.iconScreen} icon={faStar} />
            <FontAwesomeIcon className={classes.iconScreen} icon={faStar} />
            <FontAwesomeIcon className={classes.iconScreen} icon={faStar} />
            <FontAwesomeIcon className={classes.iconScreen} icon={faStar} />
          </div>
          <div className={classes.itemNum}>10 đánh giá</div>
        </div>
        <div className={classes.config}>
          <div className={classes.screen}>
            <FontAwesomeIcon className={classes.iconLaptop} icon={faLaptop} />
            {product.screenCompact}
          </div>
          <div className={classes.screen}>
            <FontAwesomeIcon
              className={classes.iconLaptop}
              icon={faMicrochip}
            />
            {product.CPUCompact}
          </div>
          <div className={classes.screen}>
            <FontAwesomeIcon className={classes.iconLaptop} icon={faSdCard} />
            {product.RamCompact}
          </div>
          <div className={classes.screen}>
            <FontAwesomeIcon className={classes.iconLaptop} icon={faDatabase} />
            {product.memoryCompact}
          </div>
          <div className={classes.screen}>
            <FontAwesomeIcon className={classes.iconLaptop} icon={faFlagUsa} />
            NVIDIA
          </div>
        </div>
      </div>
    </Link>
  );
}

export default withStyles(styles)(Product);
