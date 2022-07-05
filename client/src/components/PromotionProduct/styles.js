const styles = theme => ({
    container: {
        width: '1140px',
        margin: '0 auto',
        overflow: 'hidden'
    },
    title: {
        width: 300,
        height: 50,
        marginTop: 30,
        padding: 10,
        position: 'relative',
        borderLeft: '4px solid #123D69',
        display: 'flex',
        alignItem: 'center',
    },
    titleMain: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        color: '#c42525',
        fontSize: '24px',
        fontWeight: 'bold',
        left: 45
    },
    fire: {
        width: 30,
    },
    titleAfter: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: -20,
        transform: "skew(35deg)",
        border: '4px solid #123D69'
    },
    ContainerProd: {
        border: '5px solid #123D69'
    },
    ProductItemHover: {
        '&:hover': {
            boxShadow: '0 0 6px rgba(0,0,0,.4)'
        }
    }
})

export default styles