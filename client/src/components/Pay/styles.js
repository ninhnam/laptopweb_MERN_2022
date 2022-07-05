/** @format */

const styles = (theme) => ({
  container: {
    width: 1140,
    margin: '0 auto',
    fontFamily: 'sans-serif',
    paddingTop: 30,
    boxShadow: '2px 2px 20px rgb(30 115 172 / 10%)',
    marginBottom: 80,
    position: 'relative',
    overflow: 'hidden',
  },
  buying: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buyingBtn: {
    width: '100%',
    backgroundColor: '#dd0000',
    '&:hover': {
      backgroundColor: '#7d0509'
    },
    display: 'block',
    color: 'white',
    textTransform: 'capitalize',
    marginBottom: 14,
    marginTop: 14
  },
  isBasic: {
    paddingLeft: '36px !important',
    paddingRight: '36px !important',
  },
  infoLabel: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
  },
  infoInput: {
    width: '100%',
    padding: '6px 12px',
    color: '#495057',
    backgroundColor: '#fff',
    border: '1px solid #ced4da',
    borderRadius: 4,
    marginBottom: 16,
  },
  warningLabel: {
      color: '#DD0000',
      fontSize: 14,
      fontStyle: 'italic',
  },
  boxPay: {
    border: '1px solid #ccc',
    padding: 18,
  },
  boxCart: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  freeSaiGon: {
    fontSize: 14,
    paddingTop: 20,
    paddingBottom: 10,
  },
  PayTitle: {
    color: '#1E73AC',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
    marginTop: 50,
  },
  boxPayContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 30,
  },
  Paycheckbox: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 10,
  },
  imgPaycheckbox: {
    width: 28,
    margin: '0 10px',
  },
  PayContent: {
    fontSize: 14,
  },
  infoTransferItem: {
    fontSize: 14,
    paddingBottom: 3,
    paddingLeft: 30,
  },
  infoPayingTransferBold: {
    fontWeight: 'bold',
  },
  infoPayingTransfer: {
  },
  infoTransferDetail: {
    paddingBottom: 10
  },
  infoPayingTransferLabel: {
    paddingBottom: 4,
  },
  boxCartBill: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    backgroundColor: '#f5f4f4',
    padding: '18px 30px',
    marginBottom: 20,
  },
  boxCartBillNum: {
    color: 'red',
    fontSize: 20
  },
  boxCartItem: {
    maxHeight: 400,
    overflow: 'auto',
    paddingRight: 10
  }
});

export default styles;
