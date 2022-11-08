import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Header = () => {
  return (
    <div className="header">
        
        <img className="logo" src="https://media.discordapp.net/attachments/1017646884669620265/1023137125891309599/cbp-seal-1200-630-px-2021.jpg" alt="" />
       
        <div className="center">
        <input type="text" />
        <SearchIcon />
        </div>

        <div className='header_right'>
                <p>Sign In</p>
                <ExpandMoreIcon />                
        </div>
            
        
    
    </div>
  )
}

export default Header