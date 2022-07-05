/** @format */

import {Grid} from "@material-ui/core";
import {withStyles} from "@material-ui/styles";
import React from "react";
import styles from "./styles";

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";

import BL1 from "./img/bannerL2.jpg";
import BL2 from "./img/bannerL1.jpg";
import BL3 from "./img/bannerL3.jpg";
import BL4 from "./img/bannerL4.jpg";
import BL5 from "./img/bannerL5.jpg";
import BR1 from "./img/bannerR1.jpg";
import BR2 from "./img/bannerR2.jpg";
import BR3 from "./img/bannerR3.jpg";
import { Link } from "react-router-dom";

function Banner(props) {
  const {classes} = props;

  return (
    <div style={{width: "1140px", margin: "0 auto", marginTop: 15}}>
      <Grid container className={classes.itemContainer}>
        <Grid item xs={8} md={8} lg={8}>
          <Carousel fade={true}>
            <Carousel.Item interval={4000}>
              <img src={BL1} className="d-block w-100" style={{height: '270px'}} alt="BL1" />
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <img src={BL2} className="d-block w-100" style={{height: '270px'}} alt="BL1" />
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <img src={BL3} className="d-block w-100" style={{height: '270px'}} alt="BL1" />
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <img src={BL4} className="d-block w-100" style={{height: '270px'}} alt="BL1" />
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <img src={BL5} className="d-block w-100" style={{height: '270px'}} alt="BL1" />
            </Carousel.Item>
          </Carousel>
        </Grid>
        <Grid item xs={4} md={4} lg={4} style={{paddingLeft: 8}}>
          <Link to="/HPTradeMark"><img src={BR1} className={classes.BRitem} alt="BL1" /></Link>
          <Link to="/dellTradeMark"><img src={BR2} className={classes.BRitem} alt="BL1" /></Link>
          <Link to="/macbookTradeMark"><img src={BR3} className={classes.BRitem} alt="BL1" /></Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Banner);
