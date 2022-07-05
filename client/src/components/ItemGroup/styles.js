/** @format */

const styles = (theme) => ({
  boxItem: {
    backgroundColor: "#1d73ac",
    padding: 20,
    paddingLeft: 0,
    display: 'flex',
    marginBottom: 40,
    cursor: 'pointer',
  },
  itemLeft: {
    flexGrow: 0,
    maxWidth: '30%',
    flexBasis: '30%',
  },
  itemRight: {
    flexGrow: 0,
    maxWidth: '70%',
    flexBasis: '70%',
  },
  itemImg: {
    width: "100%",
  },
  itemTitle: {
    color: "#fff",
    fontSize: 29,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    textTransform: "uppercase",
  },
  productRight: {
    '&:hover' :{
        boxShadow: '0 0 10px rgba(0,0,0,.3)'
    }
  },
  productRightList: {
    backgroundColor: "#fff",
    border: "4px solid #113d69",
    borderRadius: 12,
    marginRight: 20
  },
  LeftTitle: {
    display: "flex",
    justifyContent: "space-between",
    color: "#fff",
    fontSize: 15,
    marginRight: 30,
    paddingTop: 10,
    marginBottom: 8,
  },
  LTLeft: {
    display: "flex",
  },
  LRLitem: {
    '&:hover': {
        textDecoration: 'underline',
    },
    paddingRight: 30
  },
  LTRightSum: {
    
  },
  titleLink: {
    textDecoration: 'none',
  },
  tradeMarkLinkSelect: {
    color: '#fff',
    textDecoration: 'none',
    '&:hover':{
      color: '#fff',
      textDecoration: 'underline'
    }
  },
  itemImgTotal: {
      padding: '0 20px'
  },
  LTRight: {
    color: "#fff",
    '&:hover': {
      textDecoration: 'underline',
  },
  }

});

export default styles;
