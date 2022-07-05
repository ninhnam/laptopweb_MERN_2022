const styles = theme => ({
    cartCom: {
      position: 'fixed'  ,
      zIndex: 190,
    },
    overlay: {
        width: '100%',
        height: '100%',
        position: 'fixed',
        backgroundColor: 'rgba(0,0,0,0.3)',
        top: '0px',
        bottom: '0px',
        left: '0px',
        right: '0px',
        zIndex: 200,
    },
    productList: {
        position: 'relative',
        top: '50vh',
        left: '50vw',
        transform: 'translateX(-50%)translateY(-50%)',
        zIndex: 210,
        maxWidth: '600px',
        backgroundColor: '#fff',
        padding: '0 30px',
        borderRadius: 14,
        border: '4px solid #1d73ac',
    },
    cartTitle: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'red',
        paddingTop: 24,
        marginBottom: 20,
        textAlign: 'center'
    },
    listItem: {
        maxHeight: 300,
        overflow: 'auto',
        marginBottom: 20,
    },
    quantity: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 18
    },
    BillSummary: {
        backgroundColor: '#c1c1c1',
        padding: 10,
        marginBottom: 25,
        fontWeight: 'bold',
    },
    sumBill: {
        display: 'flex',
        paddingTop: 10,
        justifyContent: 'space-between',
        fontSize: 22,
    },
    billLeftSum: {
        color: '#1d73ac'
    },
    billRightSum: {
        color: 'red'
    },
    buyBtn: {
        textAlign: 'right',
    },
    buyButton: {
        backgroundColor: 'red',
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        '&:hover': {
            backgroundColor: '#cb1c22'
        }
    },
    closeIcon: {
        fontSize: 29,
        position: 'absolute',
        top: 22,
        right: 22,
        color: '#333',
        '&:hover': {
            color: 'red'
        },
        cursor: 'pointer'
    }
})

export default styles