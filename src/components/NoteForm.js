import React, { useState } from "react";

const NoteForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !body.trim()) {
      alert("Title and Body");
      return;
    }

    const newNote = {
      id: Date.now(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };

    onAddNote(newNote);

    setTitle("");
    setBody("");
  };

  return (
    <form className="note-form">
      <input
        id="title"
        type="text"
        value="title"
        placeholder="Judul"
        required
      />
      <textarea
        id="body"
        value="body"
        placeholder="Buat catatan..."
        required
      ></textarea>
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
