import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #333333;
    color: #878787;
    font-weight: bold;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  input[type='text'] {
    border: 1px solid #878787;
    background-color: #333333;
    color: #878787;
  }

  button {
    color: #333333;
    background-color: #878787;
    font-weight: bold;
  }
`;

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
    <div>
      <GlobalStyle />
      <form onSubmit={handleSubmit}>
        <br /><br />
        <label>
          First Name:
          <input type="text" name="firstName" onChange={handleInputChange} />
        </label><br /><br />
        <label>
          Last Name:
          <input type="text" name="lastName" onChange={handleInputChange} />
        </label><br /><br />
        <label>
          Title:
          <input type="text" name="titleFreeText" onChange={handleInputChange} />
        </label><br /><br />
        <label>
          Company:
          <input type="text" name="company" onChange={handleInputChange} />
        </label><br /><br />
        <label>
          School:
          <input type="text" name="schoolFreetext" onChange={handleInputChange} />
        </label><br /><br />
        <label>
          Keywords:
          <input type="text" name="keywords" onChange={handleInputChange} />
        </label><br /><br />
        {/* Add more fields as needed */}
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default IndexPopup;
