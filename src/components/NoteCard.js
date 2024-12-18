import { MdDeleteForever } from "react-icons/md";
import { MdArchive, MdUnarchive } from "react-icons/md";

const NoteCard = ({id, title, body, createdAt, handleDeleteNote, archived, handleArchiveNote, handleUnarchiveNote}) => {
  return (
    <div class="note-card">
      <div class="note-content">
        <h2 class="title">{title}</h2>
        <p class="text">{body} </p>
      </div>
      <div class="note-footer">
        <small>{createdAt}</small>
        <div class="footer-icon">
          <MdDeleteForever class="delete-icon icon" onClick={() => handleDeleteNote(id)} />
          {
            archived ? (
              <MdUnarchive class="archive-icon icon" onClick={() => handleUnarchiveNote(id)} />
            ) : (
              <MdArchive class="archive-icon icon" onClick={() => handleArchiveNote(id)} />
            )
          }
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
