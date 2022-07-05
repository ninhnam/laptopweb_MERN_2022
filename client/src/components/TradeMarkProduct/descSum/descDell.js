/** @format */

import {withStyles} from "@material-ui/styles";
import React from "react";
import styles from "./../styles";

import descDell from "../img/descDell.jpg"

function DescDell(props) {
  const {classes} = props;

  return (
    <>
      <div className={classes.TMdescCT}>
        Dell là một thương hiệu laptop uy tín nhất hiện nay. Các dòng{" "}
        <span className={classes.laptopBold}>laptop Dell</span> được đông đảo
        người dùng lựa chọn. Vậy,{" "}
        <span className={classes.laptopBold}>laptop Dell</span> có đặc điểm gì
        nổi bật, chất lượng máy ra sao? Hãy cùng với laptop Trần Phát tìm hiểu
        nhé!
      </div>
      <div className={classes.TMdescTitle}>1. Giới thiệu về Dell</div>
      <div className={classes.TMdescCT}>
        Dell là thương hiệu máy tính hàng đầu của Mỹ, được thành lập từ năm
        1984, do công ty đa quốc gia Dell Inc làm chủ quản.
      </div>
      <div className={classes.TMdescCT}>
        Với hơn 35 năm xây dựng và phát triển, thương hiệu laptop Dell ngày càng
        gặt hái được nhiều thành công rực rỡ:
      </div>
      <div className={classes.TMdescCT}>
        Năm 2017, Dell nhận được giải thưởng nhà cung cấp bán hàng trực tiếp tốt
        nhất năm 2017. Và giải thưởng IT Pro 2017 cho hạng mục “Sản phẩm của
        năm”.
      </div>
      <div className={classes.TMdescCT}>
        Năm 2018, Dell xếp thứ 2 trong nhóm các công ty máy tính lớn nhất thế
        giới.{" "}
      </div>
      <img alt="desc" className={classes.descImg} src={descDell} />
      <div className={classes.TMdescTitle}>Ưu điểm của dòng laptop Dell</div>
      <ul className={classes.descList}>
        <li>Laptop Dell có độ bền cao</li>
        <li>Giá thành hấp dẫn so với hiệu năng</li>
        <li>Bộ vi xử lý có tốc độ nhanh</li>
        <li>
          Các dòng sản phẩm được sản xuất đa dạng, đáp ứng mọi nhu cầu của khách
          hàng.
        </li>
        <li>Ram, ổ cứng SSD dễ dàng nâng cấp</li>
        <li>Thiết kế tối ưu, mang tính đặc trưng của Dell</li>
        <li>Máy chạy ổn định, mát rười rượi</li>
        <li>Thời lượng pin khỏe</li>
        <li>Chất lượng sản phẩm tốt, tỉ lệ hỏng hóc ở mức 0,1%</li>
      </ul>
      <div className={classes.TMdescTitle}>Nhược điểm của dòng laptop Dell</div>
      <ul className={classes.descList}>
        <li>Thiết kế của Dell có phần thô cứng, nam tính.</li>
        <li>Máy hoạt động ồn</li>
        <li>Trọng lượng nặng nhất so với các hãng laptop khác</li>
      </ul>
    </>
  );
}

export default withStyles(styles)(DescDell);
