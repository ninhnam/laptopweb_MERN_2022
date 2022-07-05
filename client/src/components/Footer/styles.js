/** @format */

const styles = (theme) => ({
  footer: {
    backgroundColor: "#123d69",
    color: "#fff",
    fontSize: "16px",
  },
  container: {
    width: "1140px",
    margin: "0 auto",
    padding: "60px 0",
  },
  logoF: {
    marginBottom: 20,
  },
  footerItem: {
    marginBottom: 16,
  },
  iconF: {
    fontSize: 20,
    marginRight: 10,
  },
  company: {
    fontSize: "12pt",
    paddingTop: 16,
    paddingBottom: 10,
  },
  ListFtitle: {
    fontWeight: "bold",
    paddingBottom: 15,
    borderBottom: "1px solid #fff",
    maxWidth: 280,
    textTransform: "uppercase",
    fontSize: 16,
    marginBottom: 18,
  },
  ListFitem: {
    display: "flex",
    alignItems: "center",
    paddingBottom: 14,
    transition: 'all 0.3s linear',
    "&:hover": {
      transform: "translateX(10px)",
      textDecoration: 'underline',
    },
    cursor: "pointer",
  },
  ListF: {
    marginBottom: 40,
  },
  noticeLabel: {
    marginRight: 10,
  },
  copyR: {
      backgroundColor: '#000',
      fontSize: 16,
      padding: 20,
      textAlign: 'center',
  },
  thanhninh: {
    fontWeight: 'bold',
    color: 'white'
  },
  copyBy: {
    display: 'block',
    textDecoration: 'none',
    color: 'white',
  }
});

export default styles;
