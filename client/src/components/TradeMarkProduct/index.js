/** @format */

import {Grid, withStyles} from "@material-ui/core";
import React, {useState} from "react";
import styles from "./styles";
import bannerL from "./img/bannerL.jpg";
import bannerR from "./img/bannerR.jpg";
import dell from "./img/dell.png";
import HP from "./img/HP.png";
import macbook from "./img/macbook.png";
import thinkpad from "./img/thinkpad.png";

import DescDell from "./descSum/descDell";
import DescHP from "./descSum/descHP";
import DescThinkpad from "./descSum/descThinkpad";
import DescMacbook from "./descSum/descMacbook";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Link } from 'react-router-dom'

import Product from "../ProductReal/index";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

import Button from "@material-ui/core/Button";

function TMProduct(props) {
  const {classes} = props;
  const DellTradeMark = ["Dell Latitude", "Dell Inspiron", "Dell Vostro"];
  const HPTradeMark = ["HP Pavilion", "HP Envy", "HP Probook"];
  // const ThinkPadTradeMark = [
  //   "ThinkPad X Series",
  //   "ThinkPad  T Series",
  //   "ThinkPad  P Series",
  // ];

  const tradeMarkImage = [dell, HP, thinkpad, macbook];

  let {trademarkName, listProducts} = props;

  const selectSeries = (value) => {
    props.selectTMseries(value);
  };

  const renderItem = () => {
    if (listProducts.length > 0) {
      if (trademarkName === "/dellTradeMark") {
        return listProducts.map((item) => {
          if (item.trademark === "Dell") {
            return (
              <Grid
                xs={3}
                md={3}
                sm={3}
                lg={3}
                item
                className={classes.TMProductitem}
              >
                <Product product={item} />
              </Grid>
            );
          }
        });
      }
      if (trademarkName === "/HPTradeMark") {
        return listProducts.map((item) => {
          if (item.trademark === "HP") {
            return (
              <Grid
                xs={3}
                md={3}
                sm={3}
                lg={3}
                item
                className={classes.TMProductitem}
              >
                <Product product={item} />
              </Grid>
            );
          }
        });
      }
      if (trademarkName === "/macbookTradeMark") {
        return listProducts.map((item) => {
          if (item.trademark === "macbook") {
            return (
              <Grid
                xs={3}
                md={3}
                sm={3}
                lg={3}
                item
                className={classes.TMProductitem}
              >
                <Product product={item} />
              </Grid>
            );
          }
        });
      }
      if (trademarkName === "/thinkpadTradeMark") {
        return listProducts.map((item) => {
          if (item.trademark === "lenovo") {
            return (
              <Grid
                xs={3}
                md={3}
                sm={3}
                lg={3}
                item
                className={classes.TMProductitem}
              >
                <Product product={item} />
              </Grid>
            );
          }
        });
      }
    }
  };

  const renderTradeMarkTitle = () => {
    if (listProducts.length > 0) {
      if (trademarkName === "/dellTradeMark") {
        return "Laptop Dell";
      }
      if (trademarkName === "/HPTradeMark") {
        return "Laptop HP";
      }
      if (trademarkName === "/macbookTradeMark") {
        return "Apple Macbook";
      }
      if (trademarkName === "/thinkpadTradeMark") {
        return "Lenovo Thinkpad";
      }
    }
  };

  const renderTradeMarkDesc = () => {
    if (listProducts.length > 0) {
      if (trademarkName === "/dellTradeMark") {
        return <DescDell />;
      }
      if (trademarkName === "/HPTradeMark") {
        return <DescHP />;
      }
      if (trademarkName === "/macbookTradeMark") {
        return <DescMacbook />;
      }
      if (trademarkName === "/thinkpadTradeMark") {
        return <DescThinkpad />;
      }
    }
  };

  const renderTradeMark = () => {
    if (listProducts.length > 0) {
      if (trademarkName === "/dellTradeMark") {
        return DellTradeMark.map((item, index) => {
          return (
            <Grid
              className={classes.TRMPrDeltailItem}
              item
              xs={2}
              sm={2}
              md={2}
              lg={2}
              key={item}
            >
              <div
                onClick={() => selectSeries(item)}
                className={
                  item.includes(props.seriesValue)
                    ? classes.TRMPrDeltailActive
                    : classes.TRMPrDeltail
                }
              >
                {item}
              </div>
            </Grid>
          );
        });
      }
      if (trademarkName === "/HPTradeMark") {
        return HPTradeMark.map((item, index) => {
          return (
            <Grid
              className={classes.TRMPrDeltailItem}
              item
              xs={2}
              sm={2}
              md={2}
              lg={2}
              key={item}
            >
              <div
                onClick={() => selectSeries(item)}
                className={
                  item.includes(props.seriesValue)
                    ? classes.TRMPrDeltailActive
                    : classes.TRMPrDeltail
                }
              >
                {item}
              </div>
            </Grid>
          );
        });
      }
      if (trademarkName === "/macbookTradeMark") {
        return DellTradeMark.map((item, index) => {
          return (
            <Grid
              className={classes.TRMPrDeltailItem}
              item
              xs={2}
              sm={2}
              md={2}
              lg={2}
              key={item}
            ></Grid>
          );
        });
      }
      // if (trademarkName === "/thinkpadTradeMark") {
      //   return ThinkPadTradeMark.map((item, index) => {
      //     return (
      //       <Grid
      //         className={classes.TRMPrDeltailItem}
      //         item
      //         xs={2}
      //         sm={2}
      //         md={2}
      //         lg={2}
      //         key={item}
      //       >
      //         <div
      //           onClick={() => selectSeries(item)}
      //           className={
      //             item.includes(props.seriesValue)
      //               ? classes.TRMPrDeltailActive
      //               : classes.TRMPrDeltail
      //           }
      //         >
      //           {item}
      //         </div>
      //       </Grid>
      //     );
      //   });
      // }
    }
  };

  const selectImgLink = (data) => {
    if(data === dell){
      return "/dellTradeMark"
    }
    if(data === HP){
      return "/HPTradeMark"
    }
    if(data === macbook){
      return "/macbookTradeMark"
    }
    if(data === thinkpad){
      return "/thinkpadTradeMark"
    }
  }

  const imgTrademarkActive = (data) => {
    const activeLabel = renderTradeMarkTitle();

    if (activeLabel) {
      if (data === dell) {
        if (activeLabel.replace(/\s/g, "").toLowerCase().includes("dell")) {
          return (
            <div className={classes.TRMitemWrapperActive}>
              <img alt="prod" className="TRMing" src={data} />
              <div className={classes.borderProd}></div>
            </div>
          );
        } else {
          return (
            <Link to={selectImgLink(data)}>
            <div className={classes.TRMitemWrapper}>
              <img alt="prod" className="TRMing" src={data} />
              <div className={classes.borderProd}></div>
            </div></Link>
          );
        }
      } else if (data === HP) {
        if (activeLabel.replace(/\s/g, "").toLowerCase().includes("hp")) {
          return (
            <div className={classes.TRMitemWrapperActive}>
              <img alt="prod" className="TRMing" src={data} />
              <div className={classes.borderProd}></div>
            </div>
          );
        } else {
          return (
            <Link to={selectImgLink(data)}>
            <div className={classes.TRMitemWrapper}>
              <img alt="prod" className="TRMing" src={data} />
              <div className={classes.borderProd}></div>
            </div></Link>
          );
        }
      } else if (data === thinkpad) {
        if (activeLabel.replace(/\s/g, "").toLowerCase().includes("thinkpad")) {
          return (
            <div className={classes.TRMitemWrapperActive}>
              <img alt="prod" className="TRMing" src={data} />
              <div className={classes.borderProd}></div>
            </div>
          );
        } else {
          return (
            <Link to={selectImgLink(data)}>
            <div className={classes.TRMitemWrapper}>
              <img alt="prod" className="TRMing" src={data} />
              <div className={classes.borderProd}></div>
            </div></Link>
          );
        }
      } else if (data === macbook) {
        if (activeLabel.replace(/\s/g, "").toLowerCase().includes("macbook")) {
          return (
            <div className={classes.TRMitemWrapperActive}>
              <img alt="prod" className="TRMing" src={data} />
              <div className={classes.borderProd}></div>
            </div>
          );
        } else {
          return (
            <Link to={selectImgLink(data)}>
            <div className={classes.TRMitemWrapper}>
              <img alt="prod" className="TRMing" src={data} />
              <div className={classes.borderProd}></div>
            </div></Link>
          );
        }
      }
    }
  };

  const renderTradeMkImage = () => {
    return tradeMarkImage.map((item) => {
      return (
        <Grid
          key={item}
          item
          xs={3}
          sm={3}
          md={3}
          lg={3}
          className={classes.TRMitem}
        >
          {imgTrademarkActive(item)}
        </Grid>
      );
    });
  };

  const [descFull, setDescFull] = useState(false);

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    props.sortValue(event.target.value)
  };

  return (
    <div className={classes.container}>
      <div className={classes.PRnav}>
        <span className={classes.HPage}><Link className={classes.HPage} to="/">Trang chủ</Link></span>/
        <span className={classes.LTpage}>{renderTradeMarkTitle()}</span>
      </div>
      <Grid container spacing={2} className={classes.bannerPD}>
        <Grid item xs={6} sm={6} md={6} lg={6} className={classes.bannerL}>
          <img className={classes.bannerImg} alt="banner" src={bannerL} />
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} className={classes.bannerR}>
          <img className={classes.bannerImg} alt="banner" src={bannerR} />
        </Grid>
      </Grid>
      <div className={classes.TMtitle}>{renderTradeMarkTitle()}</div>
      <Grid container className={classes.TRMcontainer}>
        {renderTradeMkImage()}
      </Grid>
      <Grid container spacing={2} className={classes.TRMdetailList}>
        {renderTradeMark()}
      </Grid>

      <div className={classes.FormControlPrice}>
        <FormControl className={classes.formControl}>
          <InputLabel
            className={classes.inputLabel}
            id="demo-simple-select-helper-label"
          >
            Giá:
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={0}>
              <em>Không</em>
            </MenuItem>
            <MenuItem value={-1}>Thấp đến cao</MenuItem>
            <MenuItem value={1}>Cao đến thấp</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* PRODUCT */}
      <Grid container spacing={2} className={classes.TMProductListitem}>
        {renderItem()}
      </Grid>

      <div className={classes.TMpaging}>
        <div className={classes.TMpagingL}>
          Có <span style={{fontWeight: "bold", color: "#000"}}>46</span> sản
          phẩm trong <span style={{fontWeight: "bold", color: "#000"}}>6</span>{" "}
          trang
        </div>
        <div className={classes.TMpagingR}>
          <span className={classes.TMpagingLpage}>Trang</span>
          <button className={classes.TMPLButton}>
            <FontAwesomeIcon className="icon" icon={faChevronLeft} />
          </button>

          <button className={classes.TMPLButton}>1</button>
          <button disabled className={classes.TMPLButton}>
            2
          </button>
          <button disabled className={classes.TMPLButton}>
            3
          </button>
          <button disabled className={classes.TMPLButton}>
            4
          </button>
          <button disabled className={classes.TMPLButton}>
            ...
          </button>

          <button disabled className={classes.TMPLButton}>
            <FontAwesomeIcon className="icon" icon={faChevronRight} />
          </button>
        </div>
      </div>

      <div
        className={descFull ? classes.TMdescSummaryFull : classes.TMdescSummary}
      >
        {renderTradeMarkDesc()}
        {descFull ? <span></span> : <div className={classes.descOverlay}></div>}
      </div>
      <Button
        className={classes.seeAll}
        onClick={() => setDescFull(!descFull)}
        variant="contained"
        color="primary"
      >
        {descFull ? "Rút gon" : "Xem tất cả"}
      </Button>
    </div>
  );
}

export default withStyles(styles)(TMProduct);
