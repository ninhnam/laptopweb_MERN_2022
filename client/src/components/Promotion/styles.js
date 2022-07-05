/** @format */

const styles = (theme) => ({
  container: {
    width: 1140,
    margin: "0 auto",
  },
  itemPar: {
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "#123d69",
    width: "100%",
    marginTop: 30,
    justifyContent: "space-evenly",
  },
  imgItem: {
    height: "100%",
    position: 'absolute',
    zIndex: 10,
  },
  ItemChild: {
    height: 50,
    backgroundColor: "#fff",
    width: 176,
    paddingRight: 10,
    paddingLeft: 10,
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 14,
    display: "flex",
    flexDirection: "column",
    alignItem: "center",
    justifyContent: "center",
    position: "relative",
  },
  itemBottom: {
    color: "#C42525",
    position: "absolute",
    zIndex: 10,
    left: '50%',
    transform: 'translateX(-50%)',
  },
  itemTop: {
    color: "#123d69",
    position: "absolute",
    zIndex: 10,
    left: '50%',
    transform: 'translateX(-50%)',
  },
  beforeItem: {
    position: "absolute",
    top: 0,
    left: -8,
    right: 0,
    margin: "0 auto",
    width: "calc(100% + 16px)",
    height: "100%",
    backgroundColor: "#fff",
    transform: "skew(343deg)",
    zIndex: 0
  },
});

export default styles;
