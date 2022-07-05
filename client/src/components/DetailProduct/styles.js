/** @format */

const styles = (theme) => ({
  container: {
    width: 1140,
    margin: "0 auto",
  },
  DPnav: {
    marginTop: 20,
    marginBottom: 30,
    fontSize: 14,
    cursor: "pointer",
  },
  DPnavItemHome: {
    paddingRight: 10,
    color: "#000",
    fontSize: 16,
    textDecoration: 'none',
    "&:hover": {
      color: "#0186cf",
      textDecoration: "underline",
    },
  },
  DPnavItem: {
    paddingRight: 10,
    paddingLeft: 10,
    color: "#000",
    fontSize: 16,
    textDecoration: 'none',
    "&:hover": {
      color: "#0186cf",
      textDecoration: "underline",
    },
  },
  DPnavBot: {
    borderBottom: "1px solid #ccc",
    paddingBottom: 5,
    marginBottom: 15,
  },
  DPnavBotRight: {
    display: "flex",
    alignItems: "center",
  },
  iconF: {
    color: "#ffc107",
  },
  countStar: {
    marginLeft: 10,
    padding: "2px 10px",
    border: "1px solid #ddd",
    fontSize: "14px",
    marginRight: 20,
  },
  evalute: {
    paddingRight: 10,
    fontSize: 14,
    color: "#007bff",
    cursor: "pointer",
    borderRight: "1px solid #333",
  },
  answer: {
    paddingLeft: 10,
    fontSize: 14,
    color: "#007bff",
    cursor: "pointer",
  },
  DPIImg: {
    width: "100%",
    marginBottom: 40,
  },
  iconCheck: {
    color: "#13bf13",
    position: "relative",
    top: 5,
    marginRight: 6,
  },
  DPLPrItem: {
    display: "flex",
    position: "relative",
    marginBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
  },
  DPLPromotion: {
    border: "1px solid #ccc",
    padding: "25px 0 5px",
    borderRadius: 4,
    fontSize: 16,
    position: "relative",
  },
  DPLPrLabel: {
    position: "absolute",
    top: -24,
    left: 20,
    borderRadius: 4,
    display: "inline-flex",
    alignItems: "center",
    padding: "6px 14px",
    backgroundColor: "#f1f1f1",
    fontWeight: "bold",
    border: "1px solid #ccc",
  },
  iconGift: {
    fontSize: "22px",
    color: "red",
    marginRight: 8,
  },
  befTop: {
    border: "1px solid #ccc",
    padding: 4,
    borderRadius: 4,
    marginBottom: 30,
  },
  befTopitem: {
      display: "flex",
      fontSize: 12,
      marginBottom: 6,
      
  },
  befIconTBG: {
      width: 23,
      marginRight: 5,
  },
  befIconTSM: {
      marginRight: 5
  },
  iconRF: {
      color: '#1e73ac',
      fontSize: 18,
      marginRight: 6,
      marginTop: 2,
  },
  befBotitem: {
      fontSize: 13,
      marginBottom: 10,
      display: "flex",
  },
  befBot: {
      border: '1px solid #ccc',
      padding: 8,
      borderRadius: 4,
  },
  priceList: {
    backgroundColor: '#efedee',
    padding: '15px 15px',
    marginBottom: 35,
  },
  priceName: {
    fontSize: 15,
    color: '#33302A',
    paddingLeft: 10,
  },
  price: {
    paddingBottom: 10,
    color: '#ea0000',
    fontSize: 24,
    lineHeight: 1,
  },
  dePercent: {
    padding: '4px 9px',
    borderRadius: 4,
    marginLeft: 16,
    color: '#fff',
    backgroundColor: '#03234b',
  },
  pastPrice: {
    color: '#BDBDBD',
    textDecoration: 'line-through',
    fontWeight: 'normal',
    fontSize: 14,
    marginLeft: 5,
  },
  VAT: {
    fontSize: 14,
    paddingBottom: 10,
  },
  stocking: {
    fontSize: 18,
    color: "#25b925",
  },
  ProductDPitem: {
    paddingBottom: 16,
  },
  buyingBtn: {
    width: '100%',
    backgroundColor: '#cb1c22',
    '&:hover': {
      backgroundColor: '#7d0509'
    },
    display: 'block',
    color: 'white',
    textTransform: 'capitalize',
    marginBottom: 14,
    marginTop: 14
  },
  buying: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  addToCart: {
    width: '100%',
    display: 'block',
    textTransform: 'capitalize',
    color: '#123d69',
  },
  addCart: {
    fontWeight: 'bold',
    fontSize: '18px',
  },
  loginRe: {
    textAlign: 'center',
    paddingTop: '14px',
    color: 'red',
    fontSize: 18,
  },
  loginReAdd: {
    fontWeight: 'bold',
    fontSize: '20px',
    color: '#123d69',
    cursor: "pointer",
    '&:hover': {
      textDecoration: 'underline',
      color: '#1e73ac'
    }
  }
  
});

export default styles;
