/** @format */

import {Grid, withStyles} from "@material-ui/core";
import React from "react";
import styles from "./styles";
import imageF from "./img/logoF.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faEnvelopeOpen,
  faGlobe,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import noLabel from "./img/noticeLabel.png";
import DCMA from "./img/DCMA.png";
import {Link} from "react-router-dom";

function Footer(props) {
  const {classes} = props;

  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <Grid spacing={4} container>
          <Grid item lg={4} md={4} xs={4}>
            <div className={classes.logoF}>
              <Link to="/">
                <img src={imageF} alt="footer" className={classes.Fimg} />
              </Link>
            </div>
            <div className={classes.footerItem}>
              <FontAwesomeIcon
                className={classes.iconF}
                icon={faMapMarkerAlt}
              />
              103/16 Nguyễn Hồng Đào, P.14, Q.Tân Bình, Tp.HCM
            </div>
            <div className={classes.footerItem}>
              <FontAwesomeIcon
                className={classes.iconF}
                icon={faMapMarkerAlt}
              />
              169 Võ Văn Ngân, Phường Linh Chiểu, TP.Thủ Đức
            </div>
            <div className={classes.footerItem}>
              <FontAwesomeIcon className={classes.iconF} icon={faPhone} />
              035.9814.518
            </div>
            <div className={classes.footerItem}>
              <FontAwesomeIcon
                className={classes.iconF}
                icon={faEnvelopeOpen}
              />
              ninhnam027@gmail.com
            </div>
            <div className={classes.footerItem}>
              <FontAwesomeIcon
                className={classes.iconF}
                icon={faEnvelopeOpen}
              />
              nd272002@gmail.com
            </div>
            <div className={classes.footerItem}>
              <FontAwesomeIcon className={classes.iconF} icon={faGlobe} />
              https://laptops.vn
            </div>
            <div className={classes.company}>
              CÔNG TY TNHH MTV TIN HỌC TRẦN PHÁT
            </div>
            <div className={classes.tax}>
              <div>Mã số thuế: 0313886932</div>
              <div>Người đại diện: Trần Minh Tuấn</div>
              <div>Ngày cấp: 29/06/2016</div>
              <div>Nơi cấp: Chi cục Thuế Quận Tân Bình</div>
            </div>
          </Grid>
          <Grid item lg={4} md={4} xs={4}>
            <div className={classes.ListF}>
              <div className={classes.ListFtitle}>CHÍNH SÁCH CHUNG</div>
              <div className={classes.ListFitem}>
                <FontAwesomeIcon
                  className={classes.iconF}
                  icon={faChevronRight}
                />
                Chính sách vận chuyển
              </div>
              <div className={classes.ListFitem}>
                <FontAwesomeIcon
                  className={classes.iconF}
                  icon={faChevronRight}
                />
                Chính sách đổi trả
              </div>
              <div className={classes.ListFitem}>
                <FontAwesomeIcon
                  className={classes.iconF}
                  icon={faChevronRight}
                />
                Chính sách bảo mật
              </div>
              <div className={classes.ListFitem}>
                <FontAwesomeIcon
                  className={classes.iconF}
                  icon={faChevronRight}
                />
                Chính sách bảo hành
              </div>
            </div>
            <div className={classes.ListF}>
              <div className={classes.ListFtitle}>TƯ VẤN KHÁCH HÀNG</div>
              <div className={classes.ListFitem}>
                <FontAwesomeIcon
                  className={classes.iconF}
                  icon={faChevronRight}
                />
                Tư vấn mua hàng
              </div>
              <div className={classes.ListFitem}>
                <FontAwesomeIcon
                  className={classes.iconF}
                  icon={faChevronRight}
                />
                Hỗ trợ kỹ thuật
              </div>
            </div>
          </Grid>
          <Grid item lg={4} md={4} xs={4}>
            <div className={classes.ListF}>
              <div className={classes.ListFtitle}>THÔNG TIN HỖ TRỢ</div>
              <div className={classes.ListFitem}>
                <FontAwesomeIcon
                  className={classes.iconF}
                  icon={faChevronRight}
                />
                Giới thiệu
              </div>
              <div className={classes.ListFitem}>
                <FontAwesomeIcon
                  className={classes.iconF}
                  icon={faChevronRight}
                />
                Hướng dẫn mua hàng online
              </div>
              <div className={classes.ListFitem}>
                <FontAwesomeIcon
                  className={classes.iconF}
                  icon={faChevronRight}
                />
                Hướng dẫn thanh toán
              </div>
              <div className={classes.ListFitem}>
                <FontAwesomeIcon
                  className={classes.iconF}
                  icon={faChevronRight}
                />
                Mua hàng trả góp
              </div>
              <div className={classes.ListFitem}>
                <FontAwesomeIcon
                  className={classes.iconF}
                  icon={faChevronRight}
                />
                Tuyển dụng
              </div>
            </div>
            <div className={classes.noticeLabel}>
              <img alt="fln" src={noLabel} className={classes.noticeLabel} />
              <img alt="flns" src={DCMA} />
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={classes.copyR}>
        <div className={classes.copyBy}>
          COPYRIGHT 2021. DESIGNED, CONSTRUCTION BY{" "}
          <a className={classes.thanhninh} href="https://www.facebook.com/nam.ninh.3975/">THÀNH NINH</a>.
        </div>
        <a href="https://reactjs.org/" className={classes.copyBy}>
          Using React Library
        </a>
        <a
          href="https://www.facebook.com/nam.ninh.3975/"
          className={classes.copyBy}
        >
          035.9814.518
        </a>
        <a
          href="https://www.facebook.com/nam.ninh.3975/"
          className={classes.copyBy}
        >
          ninhnam027@gmail.com
        </a>
      </div>
    </div>
  );
}

export default withStyles(styles)(Footer);
