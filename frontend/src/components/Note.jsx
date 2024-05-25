import React from "react";
import "../styles/Note.css";

function Note({ note, onDelete }) {
  const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");

  return (
    <div className="notes-container">
      <div className="note-container">
        <p className="note-title">{note.title}</p>
        <hr className="separator" />
        <p className="note-content">{note.content}</p>
        <div className="note-footer">
          <p className="note-date">{formattedDate}</p>
          <button className="delete-button" onClick={() => onDelete(note.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Note;
