const styles = theme => ({
    zaloBox: {
        display: 'block',
        position: 'fixed',
        top: '33%',
        right: 20,
        width: 50,
        borderRadius: 10,
        overflow: 'hidden',
        zIndex: 100,
    },
    zalo: {
        width: '100%',
    },
    messBox: {
        display: 'block',
        position: 'fixed',
        top: '45%',
        right: 20,
        width: 50,
        borderRadius: 10,
        overflow: 'hidden',
        zIndex: 100,
    },
    mess: {
        width: '100%',
    },
    contact: {
        backgroundColor: 'red',
        display: 'flex',
        color: '#fff',
        position: 'fixed',
        bottom: '0px',
        left: '0px',
        padding: '8px 16px',
        borderTopRightRadius: 16,
        zIndex: 100,
    },
    iconF: {
        fontSize: 60,
        marginRight: 18,
    },
    hotline: {
        fontSize: 18,
    },
    hotlineNum: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    toTop: {
        width: '40px',
        height: '40px',
        backgroundColor: 'red',
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
    },
    iconToTop: {
        fontSize: 22,
        color: '#fff',
        transition: 'all 0.2s linear',
    },
    hideTop: {
        display: 'none',
    }

});

export default styles;