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
  },
  input: {
    '& .MuiInputBase-input': {
      color: '#FF6300',
      margin: '3px',
    },
  },
  button: {
    backgroundColor: '#ff6300',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#ff6300',
    },
  },
};

