import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  color: {
    primary: '#2196f3',
    navPrimary: '#123d69',
    secondary: '#388e3c',
    error: '#d32f2f',
    textColor: '#fff'
  },
  layout: {
    container: 1140
  },
  typography: {
    fontFamily: 'Roboto',
  },
  shape: {
    borderRadius: 4,
    backgroundColor: '#FF1493',
    textColor: '#fff',
    borderColor: '#ccc',
  },
});

export default theme;
