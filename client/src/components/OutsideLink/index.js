/** @format */

import {withStyles} from "@material-ui/styles";
import React, {useState} from "react";
import styles from "./styles";
import zalo from "./img/zalo.png";
import mess from "./img/mess.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhoneSquare} from "@fortawesome/free-solid-svg-icons";
import {FaArrowCircleUp} from "react-icons/fa";
import {Button} from "./button";


function Link(props) {
  const {classes} = props;

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <a className={classes.zaloBox} href="https://zalo.me/0359814518">
        <img src={zalo} alt="zalo" className={classes.zalo} />
      </a>
      <a
        className={classes.messBox}
        href="https://www.facebook.com/nam.ninh.3975"
      >
        <img src={mess} alt="mess" className={classes.mess} />
      </a>

      <Button>
        <FaArrowCircleUp
          onClick={scrollToTop}
          style={{display: visible ? "inline" : "none"}}
        />
      </Button>

      <div className={classes.contact}>
        <div className={classes.ctIcon}>
          <FontAwesomeIcon className={classes.iconF} icon={faPhoneSquare} />
        </div>
        <div className={classes.sdt}>
          <div className={classes.hotline}>Hotline đặt mua:</div>
          <div className={classes.hotlineNum}>0359814518</div>
        </div>
      </div>
    </>
  );
}

export default withStyles(styles)(Link);
