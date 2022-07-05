/** @format */

import {withStyles} from "@material-ui/styles";
import React from "react";
import styles from "./../styles";

import descMB from './../img/descMacbook.jpg'
import descMB1 from './../img/descMB1.jpg'
import descMB2 from './../img/descMB2.jpg'
import descMB3 from './../img/descMB3.jpg'
import descMB4 from './../img/descMB4.jpg'


function DescMacbook(props) {
  const {classes} = props;

  return (
    <>
      <div className={classes.TMdescCT}>
        <span className={classes.laptopBold}>Apple Macbook</span> chính hãng
        luôn là dòng laptop thu hút người dùng ngay từ cái nhìn đầu tiên. Không
        chỉ vậy, việc trang bị hiệu năng bền bỉ đã khiến Apple Macbook trở thành
        dòng laptop đáng mua nhất tính tới thời điểm hiện tại.
      </div>
      <img alt="desc" className={classes.descImg} src={descMB3} />
      <div className={classes.TMdescTitle}>1.Ưu nhược điểm của Macbook</div>
      <div className={classes.TMdescTitle}>Ưu điểm:</div>
      <ul className={classes.descList}>
        <li>
          Thiết kế bên ngoài độc đáo, tinh tế, sang trọng được Apple đầu tư kỹ
          lưỡng.
        </li>
        <li>Thiết kế mỏng nhẹ, tiện lợi cho việc di chuyển.</li>
        <li>Hệ thống hoạt động mượt mà, ít khi gặp lỗi, hư hỏng.</li>
        <li>Hiệu năng mạnh mẽ, ổn định.</li>
      </ul>
      <img alt="desc" className={classes.descImg} src={descMB1} />
      <div className={classes.TMdescTitle}>Nhược điểm:</div>
      <ul className={classes.descList}>
        <li>
          Giá macbook tương đối cao so với mặt bằng laptop trên thị trường.
        </li>
        <li>
          Hệ điều hành MacOS có ít lựa chọn về phần mềm hơn so với hệ điều hành
          windows.
        </li>
      </ul>
      <div className={classes.TMdescTitle}>Macbook Air 13 inch 2018</div>
      <div className={classes.TMdescCT}>
        Macbook Air 13 inch 2018 đánh dấu sự đột phá cả về thiết kế lẫn hiệu
        năng. Chiếc Macbook giờ đây thậm chí còn mỏng nhẹ hơn rất nhiều so với
        dòng Macbook Air tiền nhiệm. Cùng với đó, sản phẩm sử dụng lớp vỏ hợp
        kim cao cấp, tôn lên sự sang trọng, đẳng cấp. Macbook Air 13 inch 2018
        có 3 sự lựa chọn màu sắc: Bạc, xám và vàng.
      </div>
      <img alt="desc" className={classes.descImg} src={descMB} />
      <div className={classes.TMdescCT}>
        Bên cạnh đó, Macbook Air 13 inch 2018 còn cho thấy hiệu năng mạnh mẽ với
        bộ xử lý Intel Core i5 thế hệ thứ 8 với khả năng xử lý đa tác vụ mượt
        mà, ổn định. Sản phẩm tích hợp màn hình Retina với 4 triệu điểm ảnh, sắc
        nét đến từng chi tiết.
      </div>
      <div className={classes.TMdescTitle}>Macbook Pro 13 inch 2018</div>
      <div className={classes.TMdescCT}>
        Macbook Air 13 inch 2017 nổi bật với thiết kế nhôm Unibody nguyên khối
        sang trọng; khối lượng chỉ khoảng 1,35Kg; độ dày 1,7, laptop phù hợp cho
        những người thường xuyên phải di chuyển, làm việc bên ngoài.
      </div>
      <div className={classes.TMdescCT}>
        Macbook Air 13 inch 2017 được trang bị bộ vi xử lý intel Core i5, được
        đánh giá là có tốc độ cải thiện hơn so với dòng Macbook Air tiền nhiệm.
        Cùng với đó, máy còn được trang bị RAM 8GB nên bạn có thể yên tâm sử
        dụng đa tác vụ mà vẫn đảm bảo độ mượt mà và ổn định.
      </div>
      <div className={classes.TMdescTitle}>Macbook Pro 13 inch 2017</div>
      <div className={classes.TMdescCT}>
        Macbook Pro 13 inch 2017 sở hữu tiết kế tối giản với các được nét được
        gia công tỉ mỉ, tinh tế. Tính đến độ mỏng nhẹ, Macbook Pro 13 inch 2017
        đã được cải thiện đáng kể so với những dòng máy tiền nhiệm với trọng
        lượng chỉ khoảng 1, 37 Kg.
      </div>
      <img alt="desc" className={classes.descImg} src={descMB4} />
      <div className={classes.TMdescCT}>
        Macbook Pro 13 inch 2017 tích hợp bộ vi xử lý Intel Kaby Lake thế hệ thứ
        7, core i5 cùng với RAM 8GB, mang đến tốc độ ổn định, bền bỉ, khả năng
        xử lý đa tác vụ mượt mà.
      </div>
      <img alt="desc" className={classes.descImg} src={descMB} />
      <div className={classes.TMdescCT}>
      
        <span className={classes.laptopBold}>Apple Macbook</span> chính hãng
        chắc chắn là một cuộc đầu tư hoàn hảo cho những ưa thích những dòng
        laptop có tính thẩm mỹ cao, hiệu năng bền bỉ. Hãy đến ngay hệ thống
        Laptop Trần Phát để được trải nghiệm thực tế và mua hàng với mức giá ưu
        đãi nhất chưa từng có từ trước đến nay.
      </div>
    </>
  );
}

export default withStyles(styles)(DescMacbook);
