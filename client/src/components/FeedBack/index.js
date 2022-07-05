/** @format */

import React from "react";
import {withStyles} from "@material-ui/styles";
import styles from "./styles";

import imageFB1 from "./img/imgFB1.jpg";
import imageFB2 from "./img/imgFB2.jpg";
import imageFB3 from "./img/imageFB3.png";
import imageFB4 from "./img/imgFB4.jpg";

import user1 from "./img/user1.jpg";
import user2 from "./img/user2.jpg";
import user3 from "./img/user3.jpg";
import user4 from "./img/user4.jpg";

function FeedBack(props) {
  const {classes} = props;

  return (
    <div className={classes.container}>
      <div className={classes.FBtitle}>
        <div className={classes.FBlaptop}>VIDEO VỀ LAPTOP</div>
        <div className={classes.FBtintuc}>TIN TỨC</div>
      </div>

      <div className={classes.FBcontent}>
        <div className={classes.FBcontentLeft}>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/-7Q3sCTJxOU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className={classes.FBcontentRight}>
          <div className={classes.ctRitem}>
            <div className={classes.ctRcontentL}>
              <img src={imageFB1} alt="imgFB" className={classes.imgFB} />
            </div>
            <div className={classes.ctRcontent}>
              <div className={classes.ctrcTop}>
                Top 10 Thương Hiệu Laptop Xách Tay tốt nhất Thế Giới 2021
              </div>
              <div className={classes.ctrcBot}>20/9</div>
            </div>
          </div>
          <div className={classes.ctRitem}>
            <div className={classes.ctRcontentL}>
              <img src={imageFB2} alt="imgFB" className={classes.imgFB} />
            </div>
            <div className={classes.ctRcontent}>
              <div className={classes.ctrcTop}>
                Top 10 Laptop Workstation đáng mua nhất hiện nay
              </div>
              <div className={classes.ctrcBot}>20/9</div>
            </div>
          </div>
          <div className={classes.ctRitem}>
            <div className={classes.ctRcontentL}>
              <img src={imageFB3} alt="imgFB" className={classes.imgFB} />
            </div>
            <div className={classes.ctRcontent}>
              <div className={classes.ctrcTop}>
                Trải nghiệm giao diện mới của "hệ điều hành của tương lai"
                Window 11
              </div>
              <div className={classes.ctrcBot}>19/9</div>
            </div>
          </div>
          <div className={classes.ctRitem}>
            <div className={classes.ctRcontentL}>
              <img src={imageFB4} alt="imgFB" className={classes.imgFB} />
            </div>
            <div className={classes.ctRcontent}>
              <div className={classes.ctrcTop}>
                Top 10 laptop pin "trâu" không thể bỏ qua
              </div>
              <div className={classes.ctrcBot}>18/9</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.exp}>
        <h2 className={classes.ExpTitleUser}>Trải nghiệm người dùng</h2>
        <div className={classes.userExp}>
          <div className={classes.userItem}>
            <img src={user1} alt="user" className={classes.userImg} />
            <div className={classes.userName}>MAI NGUYỄN</div>
            <div className={classes.userDesc}>IT tại FPT Software</div>
            <div className={classes.userContent}>
              Mình là dân IT. Mình đã mua máy bên chỗ anh Tuấn Trần Phát từ 2017
              tới giờ. Chủ yếu là mình mua máy Dell Hiện tại mình vẫn đang lấy
              hàng thường xuyên chỗ anh này cho công ty dùng. Vì mình thấy cấu
              hình này so với máy mới thì rẻ hơn nhiều. Chúc anh thành công hơn
              nữa !
            </div>
          </div>
          <div className={classes.userItem}>
            <img src={user2} alt="user" className={classes.userImg} />
            <div className={classes.userName}>LƯƠNG ĐẶNG CHI</div>
            <div className={classes.userDesc}>
              Sinh viên Đại Học Bách Khoa TPHCM
            </div>
            <div className={classes.userContent}>
              Lời khuyên cho các bác mua máy tính cấu hình tốt kèm theo giá hợp
              túi tiền sinh viên. Giá không cần phải bàn rồi. Còn về chất lượng
              thì khỏi phải chê, có vấn đề gì thì cứ mang máy tới ảnh bảo hành
              từ A tới Á luôn. Mua của ảnh an tâm lắm, cho nên mình giới thiệu cho
              bạn bè cùng mua thì chúng nó có có cảm nhận giống mình. Cho 5* bự.
            </div>
          </div>
          <div className={classes.userItem}>
            <img src={user3} alt="user" className={classes.userImg} />
            <div className={classes.userName}>TRINH NGUYỄN</div>
            <div className={classes.userDesc}>Account Manager tại Sapo</div>
            <div className={classes.userContent}>
              Vì mình cần gấp 1 em laptop nhỏ gọn nhưng chạy đồ họa tốt nên nhờ
              a chủ tư vấn giúp ngay nửa đêm, ảnh vẫn rất nhiệt tình :) và máy
              thì mới quá mới, quá mượt mà ToT bạn nào thực sự muốn mua laptop
              thì cứ yên tâm với chất lượng hàng hóa shop nhé (y) (y)
            </div>
          </div>
          <div className={classes.userItem}>
            <img src={user4} alt="user" className={classes.userImg} />
            <div className={classes.userName}>ĐÀO TRẦN</div>
            <div className={classes.userDesc}>Designer tại Điền Quân Media</div>
            <div className={classes.userContent}>
              Sau một thời gian mua và sử dụng con Thinkpad T460s tại Trần Phát.
              Cảm ơn anh Tuấn Trần Phát dễ thương, tâm lý đã tư vấn và giúp mình
              chọn được em laptop hơn cả sự mong đợi với chi phí hợp lý. Tin
              mình đi, các bạn không chọn sai đâu.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(FeedBack);
