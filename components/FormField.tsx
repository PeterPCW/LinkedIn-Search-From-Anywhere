import React from 'react';
import { TextField, type SxProps, type Theme } from '@mui/material';

interface FormFieldProps {
  sx: SxProps<Theme>;
  label: string;
  setFormState: React.Dispatch<React.SetStateAction<{[key: string]: string}>>;
}

const FormField = ({ sx, label, setFormState }: FormFieldProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const name = ((label == "Title") ? label.toLowerCase().replace(/\s+/g, '') + "FreeText" : (label == "School") ? label.toLowerCase().replace(/\s+/g, '') + "Freetext" : label.toLowerCase().replace(/\s+/g, ''));

  return (
    <TextField
      fullWidth
      label={label}
      name={name}
      margin="normal"
      onChange={handleChange}
      sx={sx}
    />
  );
};

export default FormField;
