/** @format */

import {
  Button,
  Checkbox,
  FormControlLabel,
  withStyles,
} from "@material-ui/core";
import React, {Component} from "react";
import styles from "./styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import PropTypes from "prop-types";
import {TextField} from "@material-ui/core";
import {connect} from "react-redux";
import {toggleLogIn, toggleSignIn} from "./../../actions/ui";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {SignInUser} from "./../../actions/user";

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      confirmPassword: "",
      isChecked: false,
    };
  }

  toggleSignIn = () => {
    this.props.toggleSignIn();
  };

  toggleLogIn = () => {
    this.props.toggleSignIn();
    this.props.toggleLogIn();
  };

  handleStringValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({[name]: value});
  };

  handleChecked = (e) => {
    this.setState({isChecked: !this.state.isChecked});
  };

  SignInPage = (e) => {
    e.preventDefault();
    let {userName:userName, password} = this.state;
    let data = {
      name: userName,
      password: password,
    };
    this.setState({
      userName: "",
      password: "",
      confirmPassword: "",
      isChecked: false,
    });
    this.props.SignInUser(data);
  };

  canSignIn = () => {
    let {userName, password, confirmPassword, isChecked} = this.state;
    if (
      userName &&
      password &&
      confirmPassword &&
      isChecked &&
      password === confirmPassword
    ) {
      if (password === confirmPassword) {
        return false;
      }
    } else {
      return true;
    }
  };

  render() {
    const {classes} = this.props;

    return (
      <div hidden={this.props.signInPage} className={classes.background}>
        <div className={classes.signup}>
          <Card>
            <CardContent>
              <form>
                <div className={classes.title}>
                  Đăng kí tài khoản{" "}
                  <FontAwesomeIcon
                    onClick={this.toggleSignIn}
                    className={classes.icon}
                    icon={faTimes}
                  />
                </div>
                <TextField
                  id="userName"
                  label="User Name"
                  className={classes.textField}
                  fullWidth
                  name="userName"
                  margin="normal"
                  onChange={this.handleStringValue}
                ></TextField>
                <TextField
                  id="password"
                  label="Password"
                  className={classes.textField}
                  fullWidth
                  name="password"
                  margin="normal"
                  type="password"
                  onChange={this.handleStringValue}
                ></TextField>
                <TextField
                  id="cpassword"
                  label="Confirm Password"
                  className={classes.textField3}
                  fullWidth
                  name="confirmPassword"
                  margin="normal"
                  type="password"
                  onChange={this.handleStringValue}
                ></TextField>
                <FormControlLabel
                  control={<Checkbox value="agree" />}
                  label="Tôi đã đọc chính sách và đồng ý điều khoản"
                  className={classes.fullWidth}
                  onChange={this.handleChecked}
                  checked={this.state.isChecked}
                  style={{marginBottom: 10}}
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                  style={{marginBottom: 10}}
                  onClick={this.SignInPage}
                  disabled={this.canSignIn()}
                >
                  Đăng kí
                </Button>
                <div className="pt-1 text-md-center">
                  <Button
                    style={{border: "1px solid #ccc"}}
                    onClick={this.toggleLogIn}
                  >
                    Đã có tài khoản
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

SignupPage.propTypes = {
  classes: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    signInPage: state.signInPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSignIn: () => {
      return dispatch(toggleSignIn());
    },
    toggleLogIn: () => {
      return dispatch(toggleLogIn());
    },
    SignInUser: (data) => {
      return dispatch(SignInUser(data));
    },
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(SignupPage)
);
