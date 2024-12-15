import React, { useState } from "react";
import { MdSaveAlt } from "react-icons/md";

const NoteForm = ({handleAddNote}) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const limitCharacterTitle = 50;

  const handleChange = (e) => {
    if (limitCharacterTitle - e.target.value.length >= 0) {
      setTitle(e.target.value);
    }
  };

  const handleSaveClick = () => {
    if (title.trim().length > 0) {
      handleAddNote(title, body);
      setTitle("");
      setBody("");
    }
  };
  
  return (
    <form className="note-form">
      <input
        id="title"
        type="text"
        value={title}
        placeholder="Judul"
        onChange={handleChange}
        required
      />
      <textarea
        id="body"
        value={body}
        placeholder="Buat catatan..."
        onChange={(e) => setBody(e.target.value)}
        required
      ></textarea>
      <div class="note-footer">
        <small>{limitCharacterTitle - title.length} remaining</small>
        <MdSaveAlt className="save-icon icon" size="1.3em" onClick={handleSaveClick} />
      </div>
    </form>
  );
};

export default NoteForm;
