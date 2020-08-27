import React from 'react';
import './index.css';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';

const CreateNote = (props)=>{

  const [notes, setNotes] = useState({
      title:"",
      content: ""
  });

  const [miniz, setMiniz] = useState(false);
  
  const inputEvent = (events)=>{
    const {name, value} = events.target;
    setNotes((prevData)=>{
        return({
            ...prevData,
            [name] : value,
        });
    });
    // console.log(notes);
  };

  const inputNote = ()=>{
    props.passNote(notes);
    setNotes(
        {
            title:"",
            content: ""
        }
    );
  }

  const expand = ()=>{
    setMiniz(true);
  }

  const minimize = ()=>{
    setMiniz(false);
  }

  return (
    <>
       <div className="mainNote" onDoubleClick={minimize}>
           <form>
             {miniz ? (
               <input 
               type="text" 
               placeholder="Title" 
               id="title"
               onChange={inputEvent}
               name="title"
               value={notes.title}
                autoComplete="off"/>
              ):null}
              <br/>
            <textarea 
               rows="" 
               column="" 
               id="txtArea"
               name="content"
               onChange={inputEvent}
               value={notes.content}
               onClick={expand}
                placeholder="Write a note ..."/>
           </form>
           {miniz?(
           <div className="btn-hover">
           <IconButton 
                color="primary" 
                aria-label="add button" 
                className="AddButton"
                onClick={inputNote}>
                 <AddIcon />
            </IconButton>
            </div>
           ):null}
       </div>
    </>
  );
}

export default CreateNote;
