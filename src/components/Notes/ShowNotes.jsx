import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import NotesList from "./NotesList";
import "./ShowNotes.css";

function ShowNotes() {
  const navigate = useNavigate();
  const addNoteHandler = () => {
    navigate("/createnote");
  };
  const availablenote = useSelector((state) => state.Notes.initials);
  let flag = false;
  if (availablenote.length === 0) {
    flag = true;
  }

  return (
    <>
      <div className="addnotediv">
        <button onClick={addNoteHandler} className="addnote">
          <i class="fas fa-edit"></i>
          Add Notes
        </button>
      </div>
      {flag ? (
        <div className="empty">
          <h3>Empty!! Nothing to show</h3>
        </div>
      ) : (
        <NotesList />
      )}
    </>
  );
}

export default ShowNotes;
