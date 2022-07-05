/** @format */

const styles = (theme) => ({
  container: {
    width: "1140px",
    margin: "0 auto",
  },
  ContactNav: {
    marginTop: 20,
    marginBottom: 30,
  },
  HPage: {
    paddingRight: 10,
    "&:hover": {
      color: "#0186cf",
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
  CTPage: {
    paddingLeft: 10,
    "&:hover": {
      color: "#0186cf",
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
  summaryTitle: {
    fontWeight: "bold",
    fontSize: 36,
    textAlign: "center",
    marginBottom: 40,
    color: "#0186cf",
  },
  CTLtitle: {
    color: '#1E73AC',
    fontSize: 16,
    fonWeight: 'bold',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  iconF: {
    color: '#1E73AC',
    fontSize: 24,
    width: 30,
    textAlign: 'center',
    marginRight: 5,
  },
  CTLIcontent: {
      fontSize: 14,
  },
  CTLitem: {
      paddingBottom: 15,
      
  },
  inputCT: {
      padding: '6px 12px',
      outline: 'none',
      marginBottom: 20,
      width: '100%',
  },
  buttonCT: {
      padding: '6px 12px',
      backgroundColor: '#123d69',
  },
  mapCT: {
      height: '90%',
  },
  CTcontainer: {
    marginBottom: 80
  }
});

export default styles;
