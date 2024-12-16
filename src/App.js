import Header from "./components/Header.js";
import NoteForm from "./components/NoteForm.js";
import NoteList from "./components/NoteList.js";
import { useState } from "react";
import { getInitialData, showFormattedDate } from "./utils/index.js";
import Search from "./components/Search.js";

function App() {
  const initialNotes = getInitialData().map(note => ({
    ...note,
    createdAt: showFormattedDate(note.createdAt),
  }));

  const [notes, setNotes] = useState(initialNotes);
  const [search, setSearch] = useState('');

  const add_note = require('./image/add_file.png');
  const photographer = require('./image/photographer.png');

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

  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="container">
      <Header />
      <NoteForm handleAddNote={addNote} />
      <Search handleSearchNote={setSearch} />
      {
        notes.length >0 ? (
          filteredNotes.length > 0 ? (
            <NoteList 
            notes={filteredNotes}
            handleDeleteNote={deleteNote}
          />
          ) : (
            <div className="empty-state">
              <img src={photographer} className="empty-image" />
              <h3 className="empty-message">
                Tidak ada yang cocok dengan pencarianmu. 
                <br />
                <span className="highlight">Coba gunakan kata kunci yang berbeda atau buat catatan baru!</span>
              </h3>
            </div>
          )
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
