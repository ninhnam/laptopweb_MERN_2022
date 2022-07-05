/** @format */

const styles = (theme) => ({
  product: {
    width: "100%",
    // padding: '20px 30px',
    cursor: 'pointer',
    
    transition: "all 0.3s linear"
  },
  itemPro: {
    width: "100%",
    height: 180,
  },
  itemPrdSum: {
    textDecoration: 'none',
    color: "#000"
  },
  itemName: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#000",
    marginBottom: "10px",
    lineHeight: 1.2,
  },
  itemPrice: {
    display: "flex",
    justifyContent: "space-between",
  },
  priceRed: {
    color: "#C42525",
    fontWeight: "bold",
    fontSize: "16px",
  },
  priceBrown: {
    textDecoration: "line-through",
    fontSize: 12,
    paddingRight: 3,
  },
  feedB: {
    display: "flex",
    marginTop: 8,
    marginBottom: 6,
  },
  iconScreen: {
    color: "#ffc120",
  },
  itemNum: {
    fontSize: 12,
    marginTop: 2,
    marginLeft: 4,
  },
  config: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "#f8f9fa",
    padding: "10px 8px 12px",
    borderRadius: 5,
  },
  screen: {
    marginRight: 14,
    marginBottom: 5,
    fontSize: 14,
  },
  iconLaptop: {
    fontSize: 12,
    marginRight: 4,
    color: "#b6bfc7",
  },
});

export default styles;
