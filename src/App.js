import React, { useState } from 'react';
import Header from './header';
import CreateNote from './createNote';
import Footer from './footer';
import Note from './note';

function App() {

  const [item, setItem] = useState([]);

  const addNote = (note)=>{
    // alert("Button clicked !");
    setItem((oldItem)=>{
      return([...oldItem,note]);
    });
    console.log(item);
  };

  const deleteNote = (id)=>{
    setItem((oldArr)=>
      oldArr.filter((curVal, indx)=>{
        return id !== indx;
      })
    );
  };

  return (
    <>
      <Header/>
      <CreateNote passNote={addNote}/>
      <div class="push">
      {
        item.map((val, index)=>{
          return( 
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={deleteNote}
          />
          );
        })
      }
      </div>
      <Footer/>
    </>
  );
}

export default App;
