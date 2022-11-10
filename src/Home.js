import React from 'react';
import {useState} from 'react';
import { Button, TextField } from '@mui/material'
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { inputLabelClasses } from "@mui/material/InputLabel";
import { styled } from "@mui/material/styles";
import { Navigate } from "react-router-dom";
import Stack from '@mui/material/Stack';




function formatSSN(value) {
  // if input value is falsy eg if the user deletes the input, then just return
  if (!value) return value;

  // clean the input for any non-digit values.
  const ssn = value.replace(/[^\d]/g, "");

  // ssnLength is used to know when to apply our formatting for the ssn
  const ssnLength = ssn.length;

  // we need to return the value with no formatting if its less then four digits
  if (ssnLength < 4) return ssn;

  // if ssnLength is greater than 4 and less the 6 we start to return
  // the formatted number
  if (ssnLength < 6) {
    return `${ssn.slice(0, 3)}-${ssn.slice(3)}`;
  }

  // finally, if the ssnLength is greater then 6, we add the last
  // bit of formatting and return it.
  return `${ssn.slice(0, 3)}-${ssn.slice(3, 5)}-${ssn.slice(5, 9)}`;
}

const StyledTextField = styled(TextField)({
  [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: "white"
  },
  [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: "white"
  },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: "white"
  },
  [`& .${outlinedInputClasses.input}`]: {
    color: "white"
  },
  [`&:hover .${outlinedInputClasses.input}`]: {
    color: "white"
  },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.input}`]: {
    color: "white"
  },
  [`& .${inputLabelClasses.outlined}`]: {
    color: "white"
  },
  [`&:hover .${inputLabelClasses.outlined}`]: {
    color: "white"
  },
  [`& .${inputLabelClasses.outlined}.${inputLabelClasses.focused}`]: {
    color: "white"
  }
});

const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const handleInput = (e) => {
      // this is where we'll call the formatSSN function
      const formattedPhoneNumber = formatSSN(e.target.value);
      // we'll set the input value using our setInputValue
      setInputValue(formattedPhoneNumber);
    };

    const [goToDMV, setGoToDMV] = React.useState(false);
    if (goToDMV) {
      return <Navigate to="/DMV" />;
    }

    //const [btnDisabled, setBtnDisabled] = useState(true)

    return (
      
      <div className="Home">
        
        <header className="Home-header">
        
          <h2>
            travelX
          </h2>
          <StyledTextField
            label="Social Security"
            helperText="Please enter your SSN"
            id="outlined-size-small"
            size='small'
            placeholder='xxx-xx-xxxx'
            
            
            value={inputValue}
            onChange={(e) => handleInput(e)}
            //onChange={(e) => setBtnDisabled(!text.target.value)}
          />
       
    
   
          <Stack direction="row" spacing={2}>
          <Button onClick={() => {setGoToDMV(true)}} type="submit" variant="contained" style={{margin: '0 auto', display: "flex"}} >DMV</Button>
            <Button variant="contained" >SSN</Button>
            <Button variant="contained" >DOS</Button>
            </Stack>
          
        </header>
      </div>
    );
}

export default Home