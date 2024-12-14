import { MdDeleteForever } from "react-icons/md";
import { MdArchive } from "react-icons/md";

const NoteCard = () => {
  return (
    <div class="note-card">
      <div class="note-content">
        <h2 class="title">Judul</h2>
        <p class="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero esse
          laboriosam ipsa culpa illo officiis magni est dolorem. Excepturi,
          neque Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          esse laboriosam ipsa culpa illo officiis magni est dolorem. Excepturi,
          neque Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          esse laboriosam ipsa culpa illo officiis magni est dolorem. Excepturi,
          neque Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          esse laboriosam ipsa culpa illo officiis magni est dolorem. Excepturi,
          neque
        </p>
      </div>
      <div class="note-footer">
        <small>13/10/2024</small>
        <div class="footer-icon">
          <MdDeleteForever class="delete-icon icon" />
          <MdArchive class="archive-icon icon" />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
