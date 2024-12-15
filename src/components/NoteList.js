import NoteCard from "./NoteCard.js";

const NoteList = ({notes}) => {
  return (
    <div class="note-list">
      {notes.map((note) => (
        <NoteCard 
        key={note.id}
        id={note.id}
        title={note.title}
        body={note.body}
        createdAt={note.createdAt}
        />
      ))}
    </div>
  );
};

export default NoteList;
