import { MdDeleteForever } from "react-icons/md";
import { MdArchive } from "react-icons/md";

const NoteCard = ({title, body, createdAt}) => {
  return (
    <div class="note-card">
      <div class="note-content">
        <h2 class="title">{title}</h2>
        <p class="text">{body} </p>
      </div>
      <div class="note-footer">
        <small>{createdAt} </small>
        <div class="footer-icon">
          <MdDeleteForever class="delete-icon icon" />
          <MdArchive class="archive-icon icon" />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
