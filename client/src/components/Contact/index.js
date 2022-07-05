/** @format */

import {
  faEnvelopeOpen,
  faGlobe,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Grid, withStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React from "react";
import styles from "./styles";

function Contact(props) {
  const {classes} = props;

  return (
    <div className={classes.container}>
      <div className={classes.ContactNav}>
        <span className={classes.HPage}>Trang chủ</span>/
        <span className={classes.CTPage}>Liên hệ</span>
      </div>
      <div className={classes.summaryTitle}>THÔNG TIN LIÊN HỆ</div>
      <Grid className={classes.CTcontainer} container spacing={3}>
        <Grid xs={4} md={4} sm={4} lg={4} item className={classes.CTLsum}>
          <div className={classes.CTLtitle}>LAPTOP TRẦN PHÁT</div>
          <div className={classes.CTLitem}>
            <FontAwesomeIcon className={classes.iconF} icon={faMapMarkerAlt} />
            <span className={classes.CTLIcontent}>
              103/16 Nguyễn Hồng Đào, P.14, Q.Tân Bình, Tp.HCM
            </span>
          </div>
          <div className={classes.CTLitem}>
            <FontAwesomeIcon className={classes.iconF} icon={faPhone} />
            <span className={classes.CTLIcontent}>0359814518</span>
          </div>
          <div className={classes.CTLitem}>
            <FontAwesomeIcon className={classes.iconF} icon={faEnvelopeOpen} />
            <span className={classes.CTLIcontent}>ninhnam027@gmail.com</span>
          </div>
          <div className={classes.CTLitem}>
            <FontAwesomeIcon className={classes.iconF} icon={faGlobe} />
            <span className={classes.CTLIcontent}>https://laptops.vn</span>
          </div>
        </Grid>
        <Grid xs={4} md={4} sm={4} lg={4} item className={classes.CTLsum}>
          <form className={classes.root} noValidate autoComplete="off">
            <input
              type="text"
              className={classes.inputCT}
              placeholder="Họ và tên"
            />
            <input
              type="text"
              className={classes.inputCT}
              placeholder="Số điện thoại"
            />
            <input
              type="text"
              className={classes.inputCT}
              placeholder="Email"
            />
            <textarea
              rows="4"
              cols="50"
              placeholder="Nội dung"
              className={classes.inputCT}
            ></textarea>
            <Button variant="contained" color="primary">
              Gửi
            </Button>
          </form>
        </Grid>
        <Grid xs={4} md={4} sm={4} lg={4} item>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.8921122419!2d108.99182582129451!3d14.831311980010867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3168fb24445fec75%3A0xa46766ab44160e7e!2zQ-G6o25nIE3hu7kgw4E!5e0!3m2!1svi!2s!4v1630899274803!5m2!1svi!2s"
            width="100%"
            height="100%"
            loading="lazy"
            className={classes.mapCT}
          ></iframe>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Contact);
