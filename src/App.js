import Header from "./components/Header.js";
import NoteForm from "./components/NoteForm.js";
import NoteList from "./components/NoteList.js";

function App() {
  return (
    <div className="container">
      <Header />
      <NoteForm />
      <NoteList />
    </div>
  );
}

export default App;
