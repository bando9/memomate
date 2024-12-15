import Header from "./components/Header.js";
import NoteForm from "./components/NoteForm.js";
import NoteList from "./components/NoteList.js";
import { useState } from "react";
import { getInitialData, showFormattedDate } from "./utils/index.js";
// import { add_note } from './image/add_file.svg' 

function App() {
  const initialNotes = getInitialData().map(note => ({
    ...note,
    createdAt: showFormattedDate(note.createdAt),
  }));

  const [notes, setNotes] = useState(initialNotes);

  const add_note = require('./image/add_file.png');

  const addNote = (title, body) => {
    if(!title.trim() || !body.trim()){
      alert("Both title or body can't be empty");
      return;
    }

    const newNote = {
      id: +new Date(),
      title: title.trim(),
      body: body.trim(),
      archived: false,
      createdAt: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' }),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const isConfirmed = window.confirm("Are you sure?");
    if (isConfirmed) {
      const newNotes = notes.filter((note) => note.id !== id);
      setNotes(newNotes);
    }    
  };

  return (
    <div className="container">
      <Header />
      <NoteForm handleAddNote={addNote} />
      {
        notes.length >0 ? (
          <NoteList 
            notes={notes.filter((note) => !note.archived)}
            handleDeleteNote={deleteNote}
          />
        ) : (
          <div className="empty-state">
            <img src={add_note} className="empty-image" />
            <h3 className="empty-message" >Belum ada Catatan. Tambahkan catatan pertama Anda!</h3>
          </div>
        )
      }
    </div>
  );
};

export default App;
