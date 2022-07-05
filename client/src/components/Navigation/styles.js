const styles = (theme) => ({
    sumNav: {
        backgroundColor: '#123d69',
    },
    itemNav: {
        color: '#fff',
        padding: 20,
        fontSize: 18,
        position: 'relative',
        '&:hover': {
            backgroundColor: '#0186cf',
            color: '#fff'
        },
        cursor: 'pointer',
        textDecoration: 'none'
    },
    itemNavActive: {
        color: '#fff',
        padding: 20,
        fontSize: 18,
        position: 'relative',
        backgroundColor: '#0186cf',
        fontWeight: 'bold',
        '&:hover': {
            color: '#fff'
        },
        cursor: 'pointer',
        textDecoration: 'none'
    },
    itemNavSum: {
        paddingTop:18,
        paddingBottom:18,
        overflow: 'hidden',
    },
    itemPar: {
        display: 'none',
        position: 'absolute',
        left: 0,
        top: '100%',
    },
    itemChild: {
        padding: 18,
        width: 200,
        color: '#000',
        backgroundColor: '#f3f3f3',
        border: '1px solid #2223'
    },
    
});

export default styles