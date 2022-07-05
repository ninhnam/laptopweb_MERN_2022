const styles = theme => ({
    container: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #ccc',
        marginBottom: 4,
        cursor: 'pointer',
    },
    Left: {
        width: '40%',
        padding: 10
    },
    Right: {
        width: '60%',
    },
    ImgLeft: {
        width: '100%',
    },
    Right: {
        // marginTop: -30,
        paddingLeft: 28
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
    },
    ItemRightBold: {
        fontWeight: 'bold'
    },
})

export default styles