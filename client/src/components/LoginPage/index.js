/** @format */

import {Button, withStyles} from "@material-ui/core";
import React, {Component} from "react";
import styles from "./styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import PropTypes from "prop-types";
import {TextField} from "@material-ui/core";
import {toggleLogIn, toggleSignIn} from "../../actions/ui";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {toastSuccess} from "./../../helper/toastHelper";
import { changeUserLocal, LogInUser } from "../../actions/user";
import { getCart } from "../../actions/product";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errLogin: true,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({errLogin: true});
  }

  handleErr = () => {
    this.setState({errLogin: true});
  }

  toggleLogIn = () => {
    this.props.toggleLogIn();
  };

  openSignIn = () => {
    this.props.toggleLogIn();
    this.props.toggleSignIn();
  };


  LogIn = (e) => {
    e.preventDefault();
    
    let name = document.getElementById("userName").value;
    let password = document.getElementById("userPassword").value;
    const data = {
      name:name,
      password:password
    }
    
    this.props.LogInUser(data)
    this.props.changeUserLocal()
    // UserList.forEach((user) => {
    //   if (user.userName === userName && user.password === userPassword) {
    //     localStorage.removeItem("NinhNamUser");
    //     localStorage.setItem("NinhNamUser", JSON.stringify(user));
    //     this.props.toggleLogIn();
    //     toastSuccess("Đăng nhập thành công");
    //     document.getElementById("userName").value = "";
    //     document.getElementById("userPassword").value = "";
    //   } else {
    //     this.setState({errLogin: false});
    //   }
    // });
  };

  render() {
    const {classes} = this.props;

    return (
      <div hidden={this.props.logInPage} className={classes.background}>
        <div className={classes.login}>
          <Card>
            <CardContent>
              <form>
                <div className={classes.title}>
                  Đăng nhập để tiếp tục
                  <FontAwesomeIcon
                    onClick={this.toggleLogIn}
                    className={classes.icon}
                    icon={faTimes}
                  />
                </div>
                <TextField
                  id="userName"
                  label="User Name"
                  className={classes.textField}
                  onChange={this.handleErr}
                  fullWidth
                  margin="normal"
                ></TextField>
                <TextField
                  id="userPassword"
                  label="Password"
                  className={classes.textField2}
                  onChange={this.handleErr}
                  fullWidth
                  margin="normal"
                  type="password"
                ></TextField>
                <div className={classes.errLogin} hidden={this.state.errLogin}>
                  Tài khoản hoặc mật khẩu không đúng
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                  style={{marginBottom: 10}}
                  onClick={this.LogIn}
                >
                  Đăng nhập
                </Button>
                <div className="pt-1 text-md-center">
                  <Button  style={{border: '1px solid #ccc'}} onClick={this.openSignIn}>Đăng kí tài khoản</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    logInPage: state.logInPage,
    UserList: state.UserList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleLogIn: () => {
      return dispatch(toggleLogIn());
    },
    toggleSignIn: () => {
      return dispatch(toggleSignIn());
    },
    changeUserLocal: () => {
      return dispatch(changeUserLocal());
    },
    LogInUser: (data) => {
      return dispatch(LogInUser(data));
    },
    getCart: (data) => {
      return dispatch(getCart(data));
    },
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(LoginPage)
);
