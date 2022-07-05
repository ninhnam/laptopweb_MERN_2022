/** @format */

const styles = (theme) => ({
  container: {
    width: "1140px",
    margin: "0 auto",
  },
  FBtitle: {
    borderBottom: "1px solid #dee2e6",
    display: "flex",
    fontSize: 15,
    margin: "0",
    marginBottom: 16,
  },
  FBlaptop: {
    fontWeight: "bold",
    padding: "8px 16px",
    borderBottom: "2px solid #0186cf",
  },
  FBtintuc: {
    padding: "8px 16px",
  },
  FBcontent: {
    display: "flex",
    justifyContent: "space-between",
  },
  ctRitem: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 20,
    cursor: "pointer",
    '&:hover': {
      boxShadow: "0 0 7px rgba(0,0,0,.4)"
    }
  },
  ctRcontentL: {
    width: "30%",
    display: "flex",
    justifyContent: "flex-end",
  },
  imgFB: {
    maxWidth: "90%",
    height: 90,
    marginRight: 20,
  },
  ctRcontent: {
    width: "70%",
  },
  ctrcTop: {
    fontSize: 13,
    fontWeight: "bold",
    "&:hover": {
      color: "#0186CF",
    },
  },
  ctrcBot: {
    fontSize: 12,
    color: "#828282",
  },
  FBcontentRight: {
    width: "40%",
  },
  FBcontentLeft: {
    width: "60%",
    paddingRight: 30,
  },
  ExpTitleUser: {
    textAlign: "center",
    marginBottom: 30,
    marginTop: 30,
  },
  userExp: {
    display: "flex",
    width: "100%",
  },
  userItem: {
    width: "25%",
    textAlign: "center",
    fontSize: 13,
  },
  userImg: {
    borderRadius: "50%",
    width: "50%",
    marginBottom: 5,
  },
  userName: {
    lineHeight: 1.3,
    textTransform: "uppercase",
    fontSize: 15,
    fontWeight: "bold",
    color: "#123D69",
    marginBottom: 3,
    textAlign: "center",
  },
  userDesc: {
      marginBottom: 10,
  },
  userContent: {
      paddingRight: 20,
      paddingLeft: 20,
      marginBottom: 50,
  }
});

export default styles;
