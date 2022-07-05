/** @format */

import {ThemeProvider, withStyles} from "@material-ui/styles";
import React from "react";
import styles from "./styles";
import {Provider} from "react-redux";
import configStore from "../../redux/configStore";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import theme from "../../commons/Theme/index";
import {CLIENT_ROUTES} from "../../constants/route";
import HomePageProduct from "./../../commons/Layout/HomepageProduct/index";
import GlobalLoading from "../../components/GlobalLoading/index";
import DetailProduct from "./../ProductDetailContainer/index";
import Contact from "./../../components/Contact/index";
import CartInBody from "./../../components/CartInBody/index";
import Pay from "../../components/Pay";
import Header from "./../Header/index";
import {ToastContainer} from "react-toastify";
import LoginPage from "./../../components/LoginPage/index";
import SignIn from "./../../components/SignupPage/index";
import NotFound from './../NotFound'

import "react-toastify/dist/ReactToastify.css";

const store = configStore();

const renderHomePageProduct = () => {
  let xhtml = null;

  xhtml = CLIENT_ROUTES.map((route) => {
    return (
      <HomePageProduct
        key={route.path}
        path={route.path}
        component={route.component}
        exact={route.exact}
        name={route.name}
      />
    );
  });

  return xhtml;
};

const productDetail = (
  <HomePageProduct path="/products/:namePrd" component={DetailProduct} />
);
const contactPage = <HomePageProduct path="/contact" component={Contact} />;
const cartInBodyPage = <HomePageProduct path="/cartInBody" component={CartInBody} />;
const PayingPage = <HomePageProduct path="/paying" component={Pay} />;

function App(props) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <LoginPage />
          <SignIn />
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <GlobalLoading />
          <Header />
          <Switch>
            {renderHomePageProduct()}
            {productDetail}
            {contactPage}
            {PayingPage}
            {cartInBodyPage}
            <Route component={NotFound} />
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default withStyles(styles)(App);
