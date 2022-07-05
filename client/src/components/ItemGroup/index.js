/** @format */

import {Grid} from "@material-ui/core";
import {withStyles} from "@material-ui/styles";
import React from "react";
import styles from "./styles";
import dell from "./img/dell.jpg";
import HP from "./img/HP.jpg";
import macbook from "./img/macbook.jpg";
import thinkpad from "./img/thinkpad.jpg";
import Product from "./../ProductReal/index";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {selectTMseries} from "./../../actions/product";


function ItemGroup(props) {
  const {classes, trademark, productsList} = props;

  const renderInner = (e) => {
    // props.selectTMseriesed(e.target.id);
    
  }

  const renderListLeft = () => {
    if (trademark === "dell") {
      return (
        <>
          <Link className={classes.tradeMarkLinkSelect} to="/dellTradeMark"><div onClick={renderInner} id="Inspiron" className={classes.LRLitem}>Dell XPS</div></Link>
          <Link className={classes.tradeMarkLinkSelect} to="/dellTradeMark"><div onClick={renderInner} id="Latitude" className={classes.LRLitem}>Dell Latitude</div></Link>
          <Link className={classes.tradeMarkLinkSelect} to="/dellTradeMark"><div onClick={renderInner} id="Vostro" className={classes.LRLitem}>Dell Vostro</div></Link>
        </>
      );
    } else if (trademark === "HP") {
      return (
        <>
          <Link className={classes.tradeMarkLinkSelect} to="/HPTradeMark"><div onClick={renderInner} id="Pavillon" className={classes.LRLitem}>HP Pavilion</div></Link>
          <Link className={classes.tradeMarkLinkSelect} to="/HPTradeMark"><div onClick={renderInner} id="Probook" className={classes.LRLitem}>HP Probook</div></Link>
          <Link className={classes.tradeMarkLinkSelect} to="/HPTradeMark"><div onClick={renderInner} id="Envy" className={classes.LRLitem}>HP Envy</div></Link>
        </>
      );
    }
    else if (trademark === "thinkpad") {
      return (
        <>
          <Link className={classes.tradeMarkLinkSelect} to="/thinkpadTradeMark"><div onClick={renderInner} id="XSeries" className={classes.LRLitem}>Thinkpad X Series</div></Link>
          <Link className={classes.tradeMarkLinkSelect} to="/thinkpadTradeMark"><div onClick={renderInner} id="TSeries" className={classes.LRLitem}>Thinkpad T Series</div></Link>
          <Link className={classes.tradeMarkLinkSelect} to="/thinkpadTradeMark"><div onClick={renderInner} id="PSeries" className={classes.LRLitem}>Thinkpad P Series</div></Link>
        </>
      );
    } else {
      return (
        <>
          <div className={classes.LRLitem}></div>
        </>
      );
    }
  };

  const renderTitleandImg = () => {
    if (trademark === "dell") {
      return (
        <>
          <Link to="/dellTradeMark" className={classes.titleLink}><h2 className={classes.itemTitle}>LAPTOP DELL</h2></Link>
          <div className={classes.itemImgTotal}>
            <Link to="/dellTradeMark"><img alt="laptop" className={classes.itemImg} src={dell} /></Link>
          </div>
        </>
      );
    } else if (trademark === "HP") {
      return (
        <>
          <Link to="/HPTradeMark" className={classes.titleLink}><h2 className={classes.itemTitle}>LAPTOP HP</h2></Link>
          <div className={classes.itemImgTotal}>
            <Link to="/HPTradeMark"><img alt="laptop" className={classes.itemImg} src={HP} /></Link>
          </div>
        </>
      );
    } else if (trademark === "macbook") {
      return (
        <>
          <Link to="/macbookTradeMark" className={classes.titleLink}><h2 className={classes.itemTitle}>APPLE MACBOOK</h2></Link>
          <div className={classes.itemImgTotal}>
            <Link to="/macbookTradeMark"><img alt="laptop" className={classes.itemImg} src={macbook} /></Link>
          </div>
        </>
      );
    } else if (trademark === "thinkpad") {
      return (
        <>
          <Link to="/thinkpadTradeMark" className={classes.titleLink}><h2 className={classes.itemTitle}>LENOVO THINKPAD</h2></Link>
          <div className={classes.itemImgTotal}>
            <Link to="/thinkpadTradeMark"><img alt="laptop" className={classes.itemImg} src={thinkpad} /></Link>
          </div>
        </>
      );
    }
  };

  const renderSeeAll = () => {  
    if (trademark === "dell") {
      return (
        <>
            <Link className={classes.LTRight} to="/dellTradeMark"><div className={classes.LTRight}>Xem tất cả</div></Link>
        </>
      );
    } else if (trademark === "HP") {
      return (
        <>
            <Link className={classes.LTRight} to="/HPTradeMark"><div className={classes.LTRight}>Xem tất cả</div></Link>
        </>
      );
    } else if (trademark === "macbook") {
      return (
        <>
            <Link className={classes.LTRight} to="/macbookTradeMark"><div className={classes.LTRight}>Xem tất cả</div></Link>
        </>
      );
    } else if (trademark === "thinkpad") {
      return (
        <>
            <Link className={classes.LTRight} to="/thinkpadTradeMark"><div className={classes.LTRight}>Xem tất cả</div></Link>
        </>
      );
    }
  };


  const renderListItem = () => {
    if (productsList[0]) {
      return productsList.map((item) => {
        return (
          <Grid
            xs={4}
            md={4}
            lg={4}
            sm={4}
            xl={4}
            item
            className={classes.productRight}
            style={{padding: 10}}
          >
            <Product product={item} />
          </Grid>
        );
      });
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.boxItem} container>
        <div className={classes.itemLeft}>{renderTitleandImg()}</div>
        <Grid className={classes.itemRight}>
          <div className={classes.LeftTitle}>
            <div className={classes.LTLeft}>{renderListLeft()}</div>
            {renderSeeAll()}
          </div>
          <div className={classes.LTRightSum}>
            <Grid className={classes.productRightList} container>
              {renderListItem()}
            </Grid>
          </div>
        </Grid>
      </div>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    listProducts: state.product,
    seriesValue: state.selectTMseries,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectTMseriesed: (data) => {
      return dispatch(selectTMseries(data));
    },
  };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ItemGroup));
