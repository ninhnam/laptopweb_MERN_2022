/** @format */

import {withStyles} from "@material-ui/core";
import React, {Component} from "react";
import styles from "./styles";
import {PropTypes} from "prop-types";
import Footer from './../../components/Footer/index'
import images from './notfound.jpg'

class NotFound extends Component {
  render() {
    const { classes } = this.props
    return (
        <>
          <div className={classes.ContentNotfond}>
            <img src={images} alt="notfound" />
          </div>
          <Footer />
        </>
    )
  }
}

NotFound.propTypes = {
  classes: PropTypes.object,
  showLoading: PropTypes.bool,
};

export default withStyles(styles)(NotFound);
