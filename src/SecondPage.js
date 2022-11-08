import React from "react";
import { Button } from '@mui/material'
import Stack from '@mui/material/Stack';



function SecondPage() {
    
    return (
        <div>
            <h2> Second Page </h2>
            <Stack direction="row" spacing={2}>
            <Button variant="contained" >Query DMV</Button>
            <Button variant="contained" >Query SSN</Button>
            <Button variant="contained" >Query DOS</Button>
            </Stack>

        </div>
        
    )
}

export default SecondPage
