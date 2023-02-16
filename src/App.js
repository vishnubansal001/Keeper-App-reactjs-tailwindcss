import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import Note from "./components/Note";

function App() {
  const [notes,setNotes] = useState([]);
  function addNote(newNote){
    setNotes(prevNotes => {
      return [...prevNotes,newNote];
    });
  }
  function deleteNote(id){
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem,index) => {
        return index!== id;
      })
    })
  }
  return (
    <div className="App">
      {/* <h1 className="text-white bg-black">hsdfb</h1> */}
      <Header/>
      <InputBox onAdd={addNote}/>
      {
        notes.map((nateItem,index) => {
          return (<Note key={index} id={index} title={nateItem.title} content={nateItem.content} onDelete={deleteNote}/>)
        })
      }
      <Footer/>
    </div>
  );
}

export default App;
