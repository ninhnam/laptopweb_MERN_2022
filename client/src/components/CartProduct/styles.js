const styles = theme => ({
    container: {
        width: '99%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid #ccc',
        padding: 10,
        marginBottom: 14,
        cursor: 'pointer',
        marginRight: '1%'
    },
    Left: {
        width: '20%',
        padding: 10,
        paddingLeft: 20,
        height: '33%',
    },
    Right: {
        width: '60%',
    },
    ImgLeft: {
        width: '100%',
    },
    Right: {
        position: 'relative',
        // left: -20
    },
    ProductName: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    ProductPrice: {
        fontSize: 16,
        color: 'red'
    },
    ItemRight: {
        fontSize: 14,
        paddingRight: 20
    },
    ItemRightBold: {
        fontWeight: 'bold'
    },
    detailTop: {
        display: 'flex',
    },
    DeleteForever: {
        color: 'red',
        fontSize: 44,
        '&:hover': {
            color: '#cb1c22'
        }
    },
    btnQtt: {
        width: 40,
        height: 40,
        marginRight:10,
        marginLeft:10,
        padding: 6
    },
    quantityNumber: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10
    }
})

export default styles