/** @format */

const styles = (theme) => ({
  container: {
    width: "1140px",
    margin: "0 auto",
  },
  PRnav: {
    marginTop: 20,
    marginBottom: 30,
  },
  HPage: {
    paddingRight: 10,
    fontSize: 16,
    "&:hover": {
      color: "#0186cf",
      textDecoration: "underline",
      cursor: "pointer",
    },
    textDecoration: 'none',
    color: "#000"
  },
  LTpage: {
    paddingLeft: 10,
    "&:hover": {
      color: "#0186cf",
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
  bannerImg: {
    width: "100%",
  },
  bannerPD: {
    marginBottom: 40,
  },
  TRMcontainer: {
    width: "80%",
  },
  TRMitem: {
    width: "100%",
    borderRadius: 4,
    paddingRight: 4,
  },
  TRMitemWrapperActive: {
    border: "5px solid red",
    width: "100%",
    position: "relative",
    height: "50px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: "all 0.2s linear",
    "&:hover": {
      boxShadow: "2px 2px 3px rgba(0,0,0,.3)",
    },
  },
  TRMitemWrapper: {
    border: "1px solid #ddd",
    width: "100%",
    position: "relative",
    height: "50px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: "all 0.2s linear",
    "&:hover": {
      boxShadow: "2px 2px 3px rgba(0,0,0,.3)",
    },
  },
  TRMPrDeltail: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 0",
    border: "1px solid #adacac",
    transition: "all 0.3s linear",
    borderRadius: 5,
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "white",
      backgroundColor: "#0078dc",
    },
  },
  TRMPrDeltailActive: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 0",
    border: "1px solid #adacac",
    transition: "all 0.3s linear",
    borderRadius: 5,
    fontWeight: "bold",
    cursor: "pointer",
    color: "white",
    backgroundColor: "#123d69",
  },
  TMtitle: {
    marginBottom: 15,
    fontWeight: "bold",
    fontSize: 35,
  },
  TRMdetailList: {
    marginBottom: 10,
    marginTop: 20,
  },
  formControl: {
    margin: 8,
    minWidth: 150,
    marginBottom: 16,
  },
  selectEmpty: {
    // marginTop: 16,
  },
  inputLabel: {
    fontSize: 22,
    color: "#333",
  },
  FormControlPrice: {
    display: "flex",
    justifyContent: "flex-end",
    borderBottom: "1px solid #adacac",
    marginBottom: 36,
  },
  TMProductitem: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    overflow: "hidden",
    transition: "all 0.2s linear",
    "&:hover": {
      boxShadow: "0 0 5px rgba(0,0,0,.3)",
    },
  },
  TMProductListitem: {
    marginBottom: 30,
  },
  TMpaging: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: 14,
    borderBottom: "1px solid #ccc",
    marginBottom: 20,
  },
  TMpagingLpage: {
    paddingRight: 14,
  },
  TMPLButton: {
    border: "none",
    backgroundColor: "#fff",
    padding: "5px 12px",
    borderRadius: "4px",
    "&:hover": {
      backgroundColor: "red",
      color: "#fff",
    },
  },
  laptopBold: {
    fontWeight: "bold",
  },
  TMdescCT: {
    paddingBottom: 10,
  },
  TMdescTitle: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 35,
  },
  TMdescSummary: {
    transtition: "all 1s linear",
    paddingLeft: 100,
    paddingRight: 100,
    paddingTop: 20,
    paddingBottom: 80,
    height: 300,
    overflow: "hidden",
    position: "relative",
  },
  TMdescSummaryFull: {
    transtition: "all 1s linear",
    paddingLeft: 100,
    paddingRight: 100,
    paddingTop: 20,
    paddingBottom: 20,
    position: "relative",
  },
  descOverlay: {
    width: "100%",
    height: "100%",
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 20,
    backgroundImage: "linear-gradient(transparent, #42f5da80)",
  },
  seeAll: {
    marginLeft: "50%",
    transform: "translateX(-50%)",
    marginBottom: 80,
    marginTop: 20,
  },
});

export default styles;
