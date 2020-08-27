import React, {useState} from 'react';
import './note.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const Note = (props)=>{

    const onDelete = ()=>{
        props.deleteItem(props.id);
    };

  return (
    <>
    <div className="noteHolder">
       <div className="note">
           <div className="title">
               {props.title}
           </div>
           <br/>
           <div className="text">
               {props.content}
           </div>
           <div className="btn-d">
            <IconButton 
                className="btn" 
                color="secondary"
                 onClick={onDelete} >
                <DeleteIcon fontSize="small"/>
            </IconButton>
            </div>
       </div>
       </div>
    </>
  );
}

export default Note;
