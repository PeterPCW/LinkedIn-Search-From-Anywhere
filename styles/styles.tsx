import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#878787',
    },
  },
  typography: {
    fontWeightBold: 700,
  },
});

export const styles = {
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minWidth: '400px',
    padding: '1rem',
    boxSizing: 'border-box',
    height: 'auto',
    maxHeight: '500px',
  },
  form: {
    width: '333px',
    maxWidth: '333px',
    maxHeight: '400px',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '.8rem',
    margin: '0 0 10px',
  },
  input: {
    margin: '3px',
  },
  button: {
    backgroundColor: '#878787',
    margin: '3px',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#0077b5',
    },
  },
};
