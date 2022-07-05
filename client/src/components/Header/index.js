/** @format */

import React, {Component} from "react";
import "./main.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUserCircle,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import {Grid} from "@material-ui/core";
import {toastSuccess} from "./../../helper/toastHelper";

import logo from "./../../commons/img/logo_tran_phat.png";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {toggleCartTable, toggleLogIn, toggleUserTable} from "../../actions/ui";
import {changeUserLocal} from "../../actions/user";
import {getCart} from "../../actions/product";
import {toastWarning} from "./../../helper/toastHelper";
import {withRouter} from "react-router-dom";
import Cart from "../Cart";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userApp: {},
      onblur: true,
      userName: ''
    };
  }
  handleToggleUser = () => {
    const userApp = JSON.parse(localStorage.getItem("NinhNamUser"));
    if (userApp) {
      this.props.toggleUserTable(); // đã có tài khoản
      this.setState({userApp: userApp});
    } else {
      this.props.toggleLogIn(); // chưa có tài khoản
    }
  };

  logOutUser = () => {
    var isOK = window.confirm("Bạn có chắc chắn muốn đăng xuất");
    this.props.history.push({
      pathname: `/`,
  });
    if (isOK) {
      localStorage.removeItem("NinhNamUser");
      this.props.toggleUserTable();
      toastSuccess("Đăng xuất thành công");
      this.props.changeUserLocal();
    }
  };

  renderUser = () => {
    if (JSON.parse(localStorage.getItem("NinhNamUser")).user.name) {
      return JSON.parse(localStorage.getItem("NinhNamUser")).user.name
    } else {
      return " "
    }
  };

  toggleCartTable = () => {
    if (localStorage.getItem("NinhNamUser")) {
      this.props.history.push({
        pathname: `/cartInBody`,
    });
    } else {
      toastWarning("Vui lòng đăng nhập để truy cập vào giỏ hàng")
    }
  };

  // renderCart = () => {
  //   let detailUser = JSON.parse(localStorage.getItem("NinhNamUser"));

  //   if (detailUser) {
  //     if (detailUser.cartProduct.length > 0) {
  //       return <Cart />;
  //     }
  //   }
  // };

  setBlur = () => {
    this.setState({onblur: true});
  };

  setFocus = (e) => {
    this.setState({onblur: false});
  };

  fowSearchPage = () => {
    let value = document.getElementById("searchingPage").value;
    // history.push()
    console.log(value);
    this.props.history.push({
      pathname: "/searchPage",
      state: {value: value, products: this.props.listProducts},
    });
  };

  setKeyDown = (e) => {
    let value = document.getElementById("searchingPage").value;
    if (e.keyCode === 13) {
      this.props.history.push({
        pathname: "/searchPage",
        state: {value: value, products: this.props.listProducts},
      });
    }
  };

  render() {
    return (
      <>
        {" "}
        {/* {this.renderCart()} */}
        <div className="header__sum">
          <Grid alignItems="center" spacing={4} container>
            <Grid item xs={3}>
              <a href="#" alt="imgaelogo" className="header_logo">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </a>
            </Grid>
            <Grid item xs={3}>
              <div className="header__search">
                <input
                  onBlur={this.setBlur}
                  onFocus={this.setFocus}
                  onKeyDown={this.setKeyDown}
                  id="searchingPage"
                  type="text"
                  placeholder="Nhập tên sản phẩm"
                />
                <FontAwesomeIcon
                  onClick={this.fowSearchPage}
                  className="icon"
                  icon={faSearch}
                />
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="header__insurance">
                <div className="header__insurance-day">
                  <div className="number">07</div>
                  <div className="letter">ngày</div>
                </div>
                <span className="header__insurance-insurance">
                  Dùng thử miễn phí
                </span>
                <div className="header__insurance-day ml-10">
                  <div className="number">30</div>
                  <div className="letter">ngày</div>
                </div>
                <span className="header__insurance-insurance">
                  Đổi trả hư hỏng
                </span>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="header__extension">
                <div className="header__extension-item col">
                  <FontAwesomeIcon
                    onClick={this.toggleCartTable}
                    className="icon"
                    icon={faShoppingCart}
                  />
                  <div>Giỏ hàng</div>
                </div>
                <div className="header__extension-item col">
                  <FontAwesomeIcon
                    onClick={this.handleToggleUser}
                    className="icon"
                    icon={faUserCircle}
                  />
                  <div>Tài khoản</div>
                  <div
                    hidden={!this.props.userTable}
                    className="userTable fadeIn"
                  >
                    <div className="userName">
                      {this.state.userApp.userName}
                    </div>
                    <div className="userID">
                      User: 
                    </div>
                    <button className="userBtn userBtnInfo">
                      Thông tin tài khoản
                    </button>
                    <button
                      onClick={this.logOutUser}
                      className="userBtn userBtnLogout"
                    >
                      Đăng xuất
                    </button>
                  </div>
                  <div
                    hidden={!this.props.userTable}
                    className="tamgiac fadeIn"
                  ></div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listProducts: state.product,
    userTable: state.userTable,
    isLocal: state.isLocal,
    cartTable: state.cartTable,
    handleCart: state.handleCart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleUserTable: () => {
      return dispatch(toggleUserTable());
    },
    toggleLogIn: () => {
      return dispatch(toggleLogIn());
    },
    changeUserLocal: () => {
      return dispatch(changeUserLocal());
    },
    toggleCartTable: () => {
      return dispatch(toggleCartTable());
    },
    getCart: () => {
      return dispatch(getCart());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
