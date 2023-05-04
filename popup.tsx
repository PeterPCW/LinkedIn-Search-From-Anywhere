import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box, Typography, Button } from '@mui/material';
import FormField from "./components/FormField"
import { theme, styles } from './styles/styles';

interface FormState {
  [key: string]: string;
}

function IndexPopup() {
  const [formState, setFormState] = useState<FormState>({});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = buildUrl(formState);
    window.open(url, "_blank"); // Open the search URL in a new tab
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
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={styles.formContainer}>
        <Typography variant="h5">
          LinkedIn Search
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={styles.form}>
          {['First Name', 'Last Name', 'Title', 'Company', 'School', 'Keywords'].map((label) => (
            <FormField label={label} setFormState={setFormState} key={label} sx={styles.input} />
          ))}
          <Button type="submit" variant="contained" sx={styles.button}>
            Search
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default IndexPopup;