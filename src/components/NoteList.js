import NoteCard from "./NoteCard.js";

const NoteList = ({notes, handleDeleteNote, handleArchiveNote, handleUnarchiveNote}) => {
  return (
    <div class="note-list">
      {notes.map((note) => (
        <NoteCard 
        key={note.id}
        id={note.id}
        title={note.title}
        body={note.body}
        createdAt={note.createdAt}
        archived={note.archived}
        handleDeleteNote={handleDeleteNote}
        handleArchiveNote={handleArchiveNote}
        handleUnarchiveNote={handleUnarchiveNote}
        />
      ))}
    </div>
  );
};

export default NoteList;
