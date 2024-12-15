import Header from "./components/Header.js";
import NoteForm from "./components/NoteForm.js";
import NoteList from "./components/NoteList.js";
import { useState } from "react";
import { getInitialData, showFormattedDate } from "./utils/index.js";

function App() {
  const initialNotes = getInitialData().map(note => ({
    ...note,
    createdAt: showFormattedDate(note.createdAt),
  }));

  const [notes, setNotes] = useState(initialNotes);

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
  return (
    <div className="container">
      <Header />
      <NoteForm handleAddNote={addNote} />
      {
        notes.length >0 ? (
          <NoteList 
            notes={notes.filter((note) => !note.archived)}
          />
        ) : (
          <h3>Belum ada Catatan</h3>
        )
      }
    </div>
  );
};

export default App;
