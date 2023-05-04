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
    width: '100%',
    padding: '1rem',
    boxSizing: 'border-box',
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
