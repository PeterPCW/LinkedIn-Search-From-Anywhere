import React from 'react';
import { TextField } from '@mui/material';

interface FormFieldProps {
  label: string;
  setFormState: React.Dispatch<React.SetStateAction<{[key: string]: string}>>;
}

const FormField = ({ label, setFormState }: FormFieldProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const name = ((label == "Title" || label == "School") ? label.toLowerCase().replace(/\s+/g, '') + "freetext" : label.toLowerCase().replace(/\s+/g, ''));

  return (
    <TextField
      fullWidth
      label={label}
      name={name}
      margin="normal"
      onChange={handleChange}
      sx={{ '& .MuiInputBase-input': { color: 'white' } }}
    />
  );
};

export default FormField;
