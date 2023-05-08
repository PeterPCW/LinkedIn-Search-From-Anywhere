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
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: '.8rem',
    margin: '10px 0',
  },
  input: {
    margin: '10px',
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
