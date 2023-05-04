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
    minWidth: '500px',
    padding: '1rem',
    boxSizing: 'border-box',
    height: 'auto',
    minHeight: '650px',
  },
  form: {
    width: '100%',
    maxWidth: '400px',
  },
  input: {
    '& .MuiInputBase-input': {
      color: '#bbbbbb',
    },
  },
};

