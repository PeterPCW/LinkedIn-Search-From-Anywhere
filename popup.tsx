import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box, Typography, TextField, Button } from '@mui/material';

const theme = createTheme({
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

interface FormState {
  [key: string]: string;
}

const IndexPopup = () => {
  const [formState, setFormState] = useState<FormState>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const buildUrl = (formState: FormState) => {
    const baseUrl = "https://www.linkedin.com/search/results/people/"; // LinkedIn Search base URL
    const queryParams = Object.entries(formState)
      .map(([key, value]) => {
        const encodedValue = encodeURIComponent(value.replace(/\s/g, "%20").replace(/-/g, "%2D").replace(/\./g, "%2E").replace(/,/g, "%2C").replace(/"/g, "%22").replace(/'/g, "%27").replace(/:/g, "%3A").replace(/_/g, "%5F"));
        return `${key}=${encodedValue}`;
      })
      .join("&");
    return `${baseUrl}?${queryParams}`;
  }  

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = buildUrl(formState);
    window.open(url, "_blank"); // Open the search URL in a new tab
  };
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
          LinkedIn Search
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', maxWidth: '400px' }}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            margin="normal"
            onChange={handleInputChange}
            sx={{ '& .MuiInputBase-input': { color: 'white' } }}
          />
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            margin="normal"
            onChange={handleInputChange}
            sx={{ '& .MuiInputBase-input': { color: 'white' } }}
          />
          <TextField
            fullWidth
            label="Title"
            name="titleFreeText"
            margin="normal"
            onChange={handleInputChange}
            sx={{ '& .MuiInputBase-input': { color: 'white' } }}
          />
          <TextField
            fullWidth
            label="Company"
            name="company"
            margin="normal"
            onChange={handleInputChange}
            sx={{ '& .MuiInputBase-input': { color: 'white' } }}
          />
          <TextField
            fullWidth
            label="School"
            name="schoolFreetext"
            margin="normal"
            onChange={handleInputChange}
            sx={{ '& .MuiInputBase-input': { color: 'white' } }}
          />
          <TextField
            fullWidth
            label="Keywords"
            name="keywords"
            margin="normal"
            onChange={handleInputChange}
            sx={{ '& .MuiInputBase-input': { color: 'white' } }}
            />
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Search
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default IndexPopup;