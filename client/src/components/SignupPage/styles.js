const styles = (theme) => ({
    background: {
        position: 'fixed',
        zIndex: 120,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        padding: 40,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        flex: '1 0 auto'
    },
    icon: {
        marginLeft: 150,
        fontSize: 30,
        color: '#123d69',
        '&:hover': {
            color: 'red'
        }
    },
    title: {
        textAlign: 'start',
        fontWeight: 'bold',
        fontSize: 20
    },
    signup: {
        maxWidth: 400
    },
    textField3: {
        marginBottom: 10,
    }
});

export default styles