/** @format */

import {withStyles} from "@material-ui/styles";
import React from "react";
import styles from "./../styles";

import descThinkpad from "../img/descThinkpad.jpg";
import descThinkpad1 from "../img/descThinkpad1.jpg";

function DescThinkpad(props) {
  const {classes} = props;

  return (
    <>
      <div className={classes.TMdescCT}>
        <span className={classes.laptopBold}>Lenovo ThinkPad</span>Lenovo ThinkPad là
        dòng máy tính cá nhân sở hữu nhiều ưu điểm vượt trội như: thiết kế sang
        trọng, cấu hình mạnh, độ bền đáng kinh ngạc, thời lượng pin “trâu” cũng
        như bàn phím cực nhạy. Think Pad đã và đang trở thành đối thủ đáng gờm
        nhất của Macbook trên thị trường hiện nay.
      </div>
      <div className={classes.TMdescTitle}>1. ThinkPad - Dòng máy tính doanh nhân cao cấp đến từ Lenovo</div>
      <div className={classes.TMdescCT}>
      ThinkPad là một dòng máy tính xách tay và máy tính bảng thuộc thương hiệu Lenovo, tiền thân là IBM. Năm 1990, ThinkPad được tung ra thị trường bởi nhà thiết kế Richard Sapper. Các sản phẩm của dòng laptop ThinkPad đều hướng đến phong cách thiết kế đơn giản, màu đen, hình hộp.
      </div>
      <img alt="desc" className={classes.descImg} src={descThinkpad} />
      <div className={classes.TMdescCT}>
      ThinkPad laptop là sản phẩm sáng tạo và mang đến sự thành công lớn cho IBM. Hiện tại, ThinkPad là dòng laptop phổ biến nhất ở các doanh nghiệp. Hầu hết dân văn phòng, những người đam mê công nghệ đều cực kỳ ưa chuộng và yêu thích dòng laptop ThinkPad bởi độ bền cao, cấu hình mạnh, có thể đem bán lại với giá trị tương đối cao.
      </div>

      <div className={classes.TMdescTitle}>
      2. Những dòng máy tính Thinkpad đáng sở hữu nhất hiện nay
      </div>
      <div className={classes.TMdescCT}>
      Hiện nay, Thinkpad Lenovo đang tập trung đẩy mạnh phát triển 3 series sản phẩm chính, cũng là thế mạnh chính tại Laptop Trần Phát là ThinkPad X, T và P series. Với kinh nghiệm trong lĩnh vực kinh doanh laptop nhiều năm nay, chúng tôi xin đưa ra gợi ý 3 mẫu laptop ThinkPad toàn diện nhất hiện nay.
      </div>
      <img alt="desc" className={classes.descImg} src={descThinkpad1} />
      <div className={classes.TMdescTitle}>
      3. Mua Laptop Lenovo ThinkPad tại Laptop Trần Phát, bạn nhận được gì?
      </div>
      <div className={classes.TMdescCT}>
      Nếu bạn đang quan tâm đến các sản phẩm Lenovo ThinkPad mà chưa có đủ tiền mua máy mới thì hãy liên hệ với Laptop Trần Phát. Chúng tôi là đơn vị chuyên bán laptop Lenovo ThinkPad cũ có chất lượng tốt nhất tại TP Hồ Chí Minh. Đến với chúng tôi, chắc chắn bạn sẽ hoàn toàn hài lòng về sản phẩm. Đảm bảo chất lượng máy mới đến 98% với mức giá cực tốt so với thị trường chung. Bạn có thể kiểm tra và test thử trực tiếp tại cửa hàng.
      </div>

    </>
  );
}

export default withStyles(styles)(DescThinkpad);
