import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import ProfileHeader from "../Profile/Profile Header/ProfileHeader";
import { v1 as uuidv1 } from "uuid";
import "./CreateNote.css";
import { NoteActions } from "../../Store/Store";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateNote() {
  const navigate = useNavigate();
  const params = useParams();
  const availablenote = useSelector((state) => state.Notes.initials);
  let initialnote = params["id"]
    ? availablenote.find((note) => note.id === params["id"])
    : {
        id: uuidv1(),
        date: "",
        time: "",
        text: "",
      };
  const [note, setnote] = useState(initialnote);
  const dateChangeHandler = (e) => {
    setnote({ ...note, date: e.target.value });
  };
  const timeChangeHandler = (e) => {
    setnote({ ...note, time: e.target.value });
  };
  const textChangeHandler = (e) => {
    setnote({ ...note, text: e.target.value });
  };
  const dispatch = useDispatch();
  const formSubmitHandler = (e) => {
    e.preventDefault();
    note.id = uuidv1();
    if (note.date && note.time && note.text) {
      dispatch(NoteActions.create(note));
      setnote(initialnote);
      navigate("/profile");
    } else {
      toast.error("Input Fields Can't be Empty", {
        autoClose: 3000,
        position: "top-right",
      });
    }
  };
  const cancelHandler = () => {
    navigate("/profile");
  };
  const handleEditNote = (event) => {
    event.preventDefault();
    dispatch(NoteActions.edit({ note: note, id: params["id"] }));
    setnote(note);
    navigate("/profile");
  };
  return (
    <>
      <ProfileHeader />
      <div className="create-note-container">
        <div className="container addNoteMain">
          <div className="addNoteHeading">
            <i className="fas fa-chevron-left"></i>
            <span id="notetext">Add Note</span>
          </div>
          <div className="namediv">
            <img
              className="addNoteDP"
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <span className="name"> David Beckham</span>
          </div>
          <br />
          <form onSubmit={params["id"] ? handleEditNote : formSubmitHandler}>
            <div className="container row ">
              <div className="col-6">
                Date:
                <input
                  className="inpt"
                  name="inputDate"
                  type="date"
                  value={note.date}
                  onChange={dateChangeHandler}
                />
              </div>
              <div className="col-6">
                Time:
                <input
                  className="inpt"
                  name="inputTime"
                  type="time"
                  value={note.time}
                  onChange={timeChangeHandler}
                />
              </div>
            </div>
            <div className="container notesdiv">
              Note:
              <textarea
                className="inpt notes"
                name="inputText"
                value={note.text}
                onChange={textChangeHandler}
              />
            </div>
            <div className="container row actionbar">
              <div className="col-6 actions ">
                <button
                  onClick={cancelHandler}
                  className="btn btn-success w-50 main-color"
                  id="cncl"
                >
                  Cancel
                </button>
              </div>
              <div className="col-6 actions">
                <button className="btn btn-success w-50 main-color">
                  Save
                </button>
              </div>
            </div>
            <ToastContainer />
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateNote;
