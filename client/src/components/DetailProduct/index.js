/** @format */

import {
  faCheckCircle,
  faGift,
  faMapMarkerAlt,
  faPhone,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Grid, withStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, {useEffect, useState} from "react";
import styles from "./styles";

import one from "./RightImg/1.svg";
import two from "./RightImg/2.svg";
import three from "./RightImg/3.svg";
import foure from "./RightImg/4.svg";
import five from "./RightImg/5.png";
import six from "./RightImg/6.svg";
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";
import { toggleLogIn } from "../../actions/ui";
import { connect } from "react-redux";
import { changeUserLocal } from "../../actions/user";
import { addCart, getCart, updateCart } from "../../actions/product";

function DetailProduct(props) {
  const {classes, product} = props;
  const [Name, setName] = useState("");
  const [price, setprice] = useState("");
  const [pastPrice, setpastPrice] = useState("");
  const [CPU, setCPU] = useState("");
  const [Ram, setRam] = useState("");
  const [Card, setCard] = useState("");
  const [linkImg, setlinkImg] = useState("");
  const [screen, setscreen] = useState("");
  const [memoryCompact, setmemoryCompact] = useState("");

  
  useEffect(() => {
    if (localStorage.getItem("NinhNamUser")) {
      // console.log(JSON.parse(localStorage.getItem("NinhNamUser")).token);
      props.getCart(JSON.parse(localStorage.getItem("NinhNamUser")).token);
    }
    if (product !== null) {
      setName(product.name);
      setprice(product.price);
      setpastPrice(product.pastPrice);
      setCPU(product.CPU);
      setRam(product.Ram);
      setCard(product.Card);
      setlinkImg(product.linkImg);
      setscreen(product.screen);
      setmemoryCompact(product.memoryCompact);
    }
  }, [product]);

  const renderTraddemark = () => {
    if (product !== null) {
      if (product.trademark === "macbook") {
        return (
          <Link className={classes.DPnavItem} to="/macbookTradeMark">
            Macbook
          </Link>
        );
      }
      if (product.trademark === "Dell") {
        return (
          <Link className={classes.DPnavItem} to="/dellTradeMark">
            Dell
          </Link>
        );
      }
      if (product.trademark === "HP") {
        return (
          <Link className={classes.DPnavItem} to="/HPTradeMark">
            HP
          </Link>
        );
      }
      if (product.trademark === "lenovo") {
        return (
          <Link className={classes.DPnavItem} to="/thinkpadTradeMark">
            Thinkpad
          </Link>
        );
      }
    } else {
      return "";
    }
  };

  let history = useHistory();
  const payingPage = () => {
    history.push({
      pathname: "/paying",
      state: {product: product},
    });
  };

  const renderLoginPage = () => {
    props.toggleLogIn()
  }

  const addProductToCart = () => {
    let isSort = true
    let sortPd = {}
    props.handleCart.forEach(item => {
      if(item.idProduct === product._id) {
        isSort = false // đã có trong sort
        sortPd = item
      }
    })

    if(isSort === true) {
      props.addCart({product:product, token:JSON.parse(localStorage.getItem("NinhNamUser")).token})
    } else {
      let newQtt = sortPd.quantity + 1
      let newPd = {...sortPd, quantity: newQtt}
      props.updateCart({product:newPd, token:JSON.parse(localStorage.getItem("NinhNamUser")).token})
    }
  }

  const [displaytoCartBtn, setDisplaytoCartBtn] = useState(props.isLocal);

  useEffect(() => {
    // setDisplaytoCartBtn(props.isLocal);
    setDisplaytoCartBtn(props.isLocal)
  }, [props.isLocal]);

  return (
    <div className={classes.container}>
      <div className={classes.DPnav}>
        <span>
          <Link className={classes.DPnavItemHome} to="/">
            Trang chủ
          </Link>
        </span>
        /<span>{renderTraddemark()}</span>/
        <span className={classes.DPnavItem}>{Name}</span>
      </div>

      <Grid container spacing={4} className={classes.DPnavBot}>
        <Grid
          item
          xs={5}
          md={5}
          sm={5}
          lg={5}
          className={classes.DPnavBotTitle}
        >
          <h3 className={classes.DPnavBotTitleContent}>{Name}</h3>
        </Grid>
        <Grid
          item
          xs={5}
          md={5}
          sm={5}
          lg={5}
          className={classes.DPnavBotRight}
        >
          <FontAwesomeIcon className={classes.iconF} icon={faStar} />
          <FontAwesomeIcon className={classes.iconF} icon={faStar} />
          <FontAwesomeIcon className={classes.iconF} icon={faStar} />
          <FontAwesomeIcon className={classes.iconF} icon={faStar} />
          <FontAwesomeIcon className={classes.iconF} icon={faStar} />

          <span className={classes.countStar}>5</span>
          <span className={classes.evalute}>0 đánh giá</span>
          <span className={classes.answer}>0 câu hỏi</span>
        </Grid>
      </Grid>

      <Grid container style={{marginBottom: 50}} spacing={4}>
        <Grid xs={5} md={5} sm={5} lg={5} item>
          <div className={classes.DPITemImg}>
            <img alt="imgPR" className={classes.DPIImg} src={linkImg} />
          </div>
          <div className={classes.DPLPromotion}>
            <div className={classes.DPLPrLabel}>
              <div>
                <FontAwesomeIcon className={classes.iconGift} icon={faGift} />
              </div>
              <div>Khuyến mãi</div>
            </div>

            <div className={classes.DPLPrItem}>
              <FontAwesomeIcon
                className={classes.iconCheck}
                icon={faCheckCircle}
              />
              <div>
                Tặng Túi xách thời trang Mr.Vui or Balo Laptop trị giá 199.000đ
              </div>
            </div>
            <div className={classes.DPLPrItem}>
              <FontAwesomeIcon
                className={classes.iconCheck}
                icon={faCheckCircle}
              />
              <div>Tặng chuột không dây trị giá 119.000đ</div>
            </div>
            <div className={classes.DPLPrItem}>
              <FontAwesomeIcon
                className={classes.iconCheck}
                icon={faCheckCircle}
              />
              <div>Tặng Túi Chống Sốc trị giá 109.000đ</div>
            </div>
            <div className={classes.DPLPrItem}>
              <FontAwesomeIcon
                className={classes.iconCheck}
                icon={faCheckCircle}
              />
              <div>
                Tặng phiếu vệ sinh, thay keo tản nhiệt và bảo dưỡng Laptop định
                kì miễn phí "20 năm"
              </div>
            </div>
            <div className={classes.DPLPrItem}>
              <FontAwesomeIcon
                className={classes.iconCheck}
                icon={faCheckCircle}
              />
              <div>
                Tặng Voucher giảm giá trực tiếp cho khách hàng thân thiết 3%
                ngày thường và 5% sinh nhật
              </div>
            </div>
          </div>
        </Grid>
        <Grid xs={5} md={5} sm={5} lg={5} item>
          <Grid container className={classes.priceList}>
            <Grid
              item
              xs={2}
              md={2}
              sm={2}
              lg={2}
              className={classes.priceName}
            >
              Giá:
            </Grid>
            <Grid item xs={4} md={4} sm={4} lg={4} className={classes.priceNum}>
              <div className={classes.price}>{price}</div>
              <div className={classes.pastPrice}>{pastPrice}</div>
            </Grid>
            <Grid item xs={2} md={2} sm={2} lg={2}>
              <span className={classes.dePercent}>-8%</span>
            </Grid>
            <Grid item xs={4} md={4} sm={4} lg={4} style={{paddingLeft: 20}}>
              <div className={classes.VAT}>(Chưa VAT)</div>
              <div className={classes.stocking}>CÒN HÀNG</div>
            </Grid>
          </Grid>
          <div className={classes.ProductDPitem}>
            <span style={{fontWeight: "bold", paddingRight: 4}}>CPU:</span>
            {CPU} (2.40 GHz, up to 4.20 GHz with Turbo Boost, 4 Cores, 8
            Threads, 8 MB Cache)
          </div>
          <div className={classes.ProductDPitem}>
            <span style={{fontWeight: "bold", paddingRight: 4}}>RAM:</span>
            {Ram} LPDDR4X 4267MHz (Soldered)
          </div>
          <div className={classes.ProductDPitem}>
            <span style={{fontWeight: "bold", paddingRight: 4}}>Đĩa cứng:</span>
            {memoryCompact} SSD M.2 PCIe
          </div>
          <div className={classes.ProductDPitem}>
            <span style={{fontWeight: "bold", paddingRight: 4}}>Màn hình:</span>
            {screen} IPS, anti-glare, low-power, 400 nits
          </div>
          <div className={classes.ProductDPitem}>
            <span style={{fontWeight: "bold", paddingRight: 4}}>
              Card đồ họa:
            </span>
            Integrated Intel® Iris® Xe Graphics
          </div>

          <Button
            onClick={payingPage}
            variant="contained"
            className={classes.buyingBtn}
          >
            <div className={classes.buying}>MUA NGAY</div>
            <div className={classes.buyTitle}>
              Gọi xác nhận và giao hàng tận nơi
            </div>
          </Button>

          <Button
            variant="outlined"
            className={classes.addToCart}
            color="primary"
            disabled={!displaytoCartBtn}
            onClick={addProductToCart}
          >
            <div className={classes.addCart}>THÊM VÀO GIỎ HÀNG</div>
            <div className={classes.cartTitle}>
              Thêm vào giỏ hàng để mua ngay bất cứ khi nào
            </div>
          </Button>
          <div hidden={displaytoCartBtn} className={classes.loginRe}>Đăng nhập <span onClick={renderLoginPage} className={classes.loginReAdd}>tại đây</span> để thêm sản phẩm vào giỏ hàng</div>
        </Grid>
        <Grid xs={2} md={2} sm={2} lg={2} item>
          <div className={classes.befTop}>
            <div className={classes.befTopitem}>
              <img alt="img" src={one} className={classes.befIconTSM} />
              <div className={classes.befItemTopContent}>
                7 ngày dùng thử đổi trả vì bất kỳ lý do gì. Đổi trả hư hỏng 30
                ngày
              </div>
            </div>
            <div className={classes.befTopitem}>
              <img alt="img" src={two} className={classes.befIconTSM} />
              <div className={classes.befItemTopContent}>
                Bảo hành máy nhanh 3H. Bảo hành phần cứng 12 Tháng
              </div>
            </div>
            <div className={classes.befTopitem}>
              <img alt="img" src={three} className={classes.befIconTSM} />
              <div className={classes.befItemTopContent}>
                Bảo hành nhanh 3H - Không kịp mượn máy mang về
              </div>
            </div>
            <div className={classes.befTopitem}>
              <img alt="img" src={foure} className={classes.befIconTSM} />
              <div className={classes.befItemTopContent}>
                Free Ship HCM - COD Toàn Quốc
              </div>
            </div>
            <div className={classes.befTopitem}>
              <img alt="img" src={five} className={classes.befIconTBG} />
              <div className={classes.befItemTopContent}>Đổi cũ lấy mới</div>
            </div>
            <div className={classes.befTopitem}>
              <img alt="img" src={six} className={classes.befIconTBG} />
              <div className={classes.befItemTopContent}>
                Trả góp 0% qua Visa Mastercard hoặc Tín chấp HD SaiGon
              </div>
            </div>
          </div>

          <div className={classes.befBot}>
            <div className={classes.befBotitem}>
              <FontAwesomeIcon
                className={classes.iconRF}
                icon={faMapMarkerAlt}
              />
              <div className={classes.befItemTopContent}>
                103/16 Nguyễn Hồng Đào , phường 14, Quận Tân Bình, TPHCM
              </div>
            </div>
            <div className={classes.befBotitem}>
              <FontAwesomeIcon
                className={classes.iconRF}
                icon={faMapMarkerAlt}
              />
              <div className={classes.befItemTopContent}>
                169 Võ Văn Ngân, Phường Linh Chiểu, TP.Thủ Đức
              </div>
            </div>
            <div className={classes.befBotitem}>
              <FontAwesomeIcon className={classes.iconRF} icon={faPhone} />
              <div className={classes.befItemTopContent}>035.9814.518</div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLocal: state.isLocal,
    handleCart: state.handleCart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleLogIn: () => {
      return dispatch(toggleLogIn());
    },
    changeUserLocal: () => {
      return dispatch(changeUserLocal());
    },
    addCart: (data) => {
      return dispatch(addCart(data));
    },
    getCart: (data) => {
      return dispatch(getCart(data));
    },
    updateCart: (data) => {
      return dispatch(updateCart(data));
    },
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(DetailProduct)
);
