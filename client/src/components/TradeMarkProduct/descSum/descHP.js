/** @format */

import {withStyles} from "@material-ui/styles";
import React from "react";
import styles from "./../styles";

import descHP from "../img/descHP.jpg";
import descHP1 from "../img/descHP1.jpg";

function DescHP(props) {
  const {classes} = props;

  return (
    <>
      <div className={classes.TMdescCT}>
        <span className={classes.laptopBold}>Laptop HP</span> là thương hiệu
        laptop hàng đầu trên thế giới bạn không thể bỏ qua. Trong những năm qua
        HP đã cho ra mắt rất nhiều dòng laptop chất lượng. Hãy cùng tham khảo
        bài viết sau để hiểu rõ hơn về{" "}
        <span className={classes.laptopBold}>Laptop HP</span> và các dòng sản
        phẩm chủ lực của thương hiệu này!
      </div>
      <img alt="desc" className={classes.descImg} src={descHP} />
      <div className={classes.TMdescTitle}>1. Giới thiệu về HP</div>
      <div className={classes.TMdescCT}>
        HP được biết tới là một trong những thương hiệu máy tính lớn và uy tín
        nhất tới từ nước Mỹ. Thương hiệu này chính thức được thành lập vào năm
        1939, tính tới nay đã có gần 100 năm lịch sử. Rất nhiều dòng máy tính
        với các phân khúc giá khác nhau đã được HP cho ra mắt, đáp ứng nhu cầu
        của người tiêu dùng và có mặt tại hầu hết các quốc gia trên thế giới.
      </div>
      <div className={classes.TMdescCT}>
        Ngoài dựa vào phân khúc giá thì HP còn căn cứ vào đối tượng người dùng
        để phân loại laptop, từ đó, giúp khách hàng dễ dàng tìm được mẫu laptop
        phù hợp nhất với bản thân mình.
      </div>

      <div className={classes.TMdescTitle}>
        Ưu nhược điểm của dòng laptop HP
      </div>
      <div className={classes.TMdescCT}>
        Một trong những điều mà rất nhiều khách hàng trước khi mua{" "}
        <span className={classes.laptopBold}>Laptop HP</span> đều quan tâm đó
        chính là sản phẩm này có ưu nhược điểm gì. Dựa vào ưu nhược điểm mà
        người mua có thể đánh giá được chất lượng của{" "}
        <span className={classes.laptopBold}>Laptop HP</span> cũng như quyết
        định có nên mua laptop của thương hiệu này hay không.
      </div>
      <div className={classes.TMdescTitle}>Ưu điểm của dòng laptop HP</div>
      <ul className={classes.descList}>
        <li>
          Sản phẩm đa dạng, trải dài ở nhiều phân khúc giá, từ bình dân cho tới
          cao cấp, phù hợp với mọi đối tượng khách hàng{" "}
        </li>
        <li>
          Kiểu dáng <span className={classes.laptopBold}>Laptop HP</span> đa
          dạng, từ đơn giản, hiện đại cho tới thể thao, cá tính,...
        </li>
        <li>
          Cấu hình của các dòng laptop HP ổn định, hiệu năng tốt, độ bền cao và
          được tích hợp nhiều tính năng hiện đại
        </li>
        <li>
          Tốc độ làm việc ổn định, có thể lưu trữ được khối lượng dữ liệu lớn
        </li>
      </ul>
      <img alt="desc" className={classes.descImg} src={descHP1} />
      <div className={classes.TMdescTitle}>Nhược điểm của dòng laptop HP</div>
      <ul className={classes.descList}>
        <li>Kiểu dáng chưa thực sự gây ấn tượng mạnh với người dùng </li>
        <li>Hiệu suất làm việc không quá cao </li>
        <li>Thời lượng pin không quá tốt </li>
        <li>Hệ thống tản nhiệt làm việc còn kém hiệu quả</li>
      </ul>
      <div className={classes.TMdescCT}>
        Tuy nhiên, đây là những hạn chế nhỏ, chấp nhận được. Và với một thương
        hiệu máy tính xách tay hàng đầu như HP thì chắc chắn trong tương lai
        hoàn toàn có thể khắc phục được.
      </div>
    </>
  );
}

export default withStyles(styles)(DescHP);
