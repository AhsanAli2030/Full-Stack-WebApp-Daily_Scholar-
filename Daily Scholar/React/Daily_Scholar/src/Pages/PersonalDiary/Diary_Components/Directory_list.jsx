import React, { useState, useEffect } from "react";
import stickyNotepic from "../Assets_Diary/stick.png";
import { useLocation, Link, useParams } from "react-router-dom";
import SingleNote from "./SingleNote";

const Directory_list = () => {
  const [activeComponentDirectory, setActiveComponentDirectory] =
    useState("listOfNotes");
  const [diaryNotes, setDiaryNotes] = useState([]);

  const { id } = useParams();
  const location = useLocation();
  const currentUrl = location.pathname;
  useEffect(() => {
    if (currentUrl === "/personal-diary/directory-list") {
      setActiveComponentDirectory("listOfNotes");
    } else if (currentUrl === "/personal-diary/:id") {
      setStudyNotesComponets("singleObject");
    }
  }, [currentUrl]);

  const renderComponent = () => {
    switch (activeComponentDirectory) {
      case "listOfNotes":
        return (
          <>
            <div id="top-heading">
              <div id="below-line">
                Total Diary Notes :{" "}
                <span className="first-one">{diaryNotes.length}</span>{" "}
              </div>
            </div>
            <div id="All-diary-Notes">
              <div id="repeat-in-fractions">
                {diaryNotes.map((note, index) => (
                  <Link to={`/personal-diary/${note.id}`} key={note.id}>
                    <div
                      className="diary-note"
                      key={note.id}
                      onClick={() =>
                        setActiveComponentDirectory("singleObject")
                      }
                    >
                      <div id="wrap-diary-note">
                        <img src={stickyNotepic} alt="" />
                        <div id="title-for-this">{note.title}</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </>
        );
      case "singleObject":
        return <SingleNote id={id} />;

      default:
        return null;
    }
  };

  useEffect(() => {
    getAllDirayNotes();
  }, []);

  const getAllDirayNotes = async () => {
    try {
      const responseFromAllDiaryNotes = await fetch(
        "http://127.0.0.1:8000/personal-diary/all-diary-notes"
      );
      const dataFromAllDiaryNotes = await responseFromAllDiaryNotes.json();
      setDiaryNotes(dataFromAllDiaryNotes);
    } catch (error) {
      console.error("Error fetching all diary notes:", error);
    }
  };

  return (
    <>
      <div id="wrap-directory-list">{renderComponent()}</div>
    </>
  );
};

export default Directory_list;
