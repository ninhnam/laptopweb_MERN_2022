/** @format */

const styles = (theme) => ({
  container: {
    width: "1140px",
    margin: "0 auto",
  },
  TrademarkList: {},
  trademarkItem: {
    display: "flex",
    height: "50px",
    width: "calc(100% / 8)",
    border: "1px solid #e4e4e4",
    marginBottom: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    transition: 'all 0.1s ease',
    "&:hover": {
      boxShadow: "0 0 2px rgba(0,0,0,0.5)",
      fontWeight: 'bold'
    },
  },
  trademarkItemLinkItem: {
    width: "100%",
    height: "100%",
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10,
    color: '#000',
    textDecoration: "none",
    transition: 'all 0.1s ease',
    "&:hover": {
      boxShadow: "0 0 2px rgba(0,0,0,0.5)",
      fontWeight: 'bold'
    },
  },
  hotFire: {
    width: "60px",
  },
  rebellious: {
    paddingTop: 40,
    paddingBottom: 20,
    cursor: "pointer"
  },
  rebelliousTitle: {
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "rgb(196, 37, 37)",
    margin: 0,
    lineHeight: 0.9,
    position: "relative",
    top: 15,
    paddingLeft: 10,
  },
  trmarkTitle: {
    fontSize: 18,
    textTransform: "uppercase",
    color: "rgb(51, 51, 51)",
    fontWeight: "bold",
    marginBottom: 15,
  },
  trmSum: {
    width: "100%",
  },
  trmItem: {
      width: "25%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "1px solid #e4e4e4",
      height: 70,
      overflow: "hidden",
      marginBottom: 40,
      '&:hover': {
        boxShadow: "0 0 5px rgba(0,0,0,.3)"
      }
  },
  TradeMarkItemLabel: {
    width: "100%"
  },
  dell: {
      width: "50%",
  },
  HP: {
      width: "70%",
  },
  macbook: {
      width: "60%",
  },
  thinkpad: {
      width: "50%",
  },
});

export default styles;
