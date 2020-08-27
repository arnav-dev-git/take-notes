import React from 'react';
import './index.css';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

const Header = ()=>{
  return (
    <>
       <div className="header">
           <span>
                <NoteAddIcon style={{float:"left", marginRight:"10px", fontSize:"45px"}}/>
                <h1>Text Keeper</h1> 
           </span>
       </div> 
    </>
  );
}

export default Header;
