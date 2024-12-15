import Header from "./components/Header.js";
import NoteForm from "./components/NoteForm.js";
import NoteList from "./components/NoteList.js";

function App() {

  const addNote = (title, body) => {
    console.log(title, body);
  };

  return (
    <div className="container">
      <Header />
      <NoteForm handleAddNote={addNote} />
      <NoteList />
    </div>
  );
}

export default App;
