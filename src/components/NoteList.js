import NoteCard from "./NoteCard.js";

const NoteList = ({notes, handleDeleteNote}) => {
  return (
    <div class="note-list">
      {notes.map((note) => (
        <NoteCard 
        key={note.id}
        id={note.id}
        title={note.title}
        body={note.body}
        createdAt={note.createdAt}
        handleDeleteNote={handleDeleteNote}
        />
      ))}
    </div>
  );
};

export default NoteList;
