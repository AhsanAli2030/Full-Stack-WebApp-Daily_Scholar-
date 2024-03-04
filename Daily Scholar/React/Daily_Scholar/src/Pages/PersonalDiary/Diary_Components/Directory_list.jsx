import React, { useState, useEffect } from "react";
import stickyNotepic from "../Assets_Diary/stick.png";
import { Link, useParams } from "react-router-dom";
import SingleNote from "./SingleNote";

const Directory_list = () => {
  const [activeComponent, setActiveComponent] = useState("listOfNotes");
  let [diaryNotes, setDiaryNotes] = useState([]);

  const { id } = useParams();
  const renderComponent = () => {
    switch (activeComponent) {
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
                      onClick={() => setActiveComponent("singleObject")}
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
        console.log("lo");
        return null;
    }
  };

  useEffect(() => {
    getAllDirayNotes();
  }, []);

  let getAllDirayNotes = async () => {
    let responseFromAllDiaryNotes = await fetch(
      "http://127.0.0.1:8000/personal-diary/all-diary-notes"
    );
    let dataFromAllDiaryNotes = await responseFromAllDiaryNotes.json();

    setDiaryNotes(dataFromAllDiaryNotes);
  };

  return (
    <>
      <div id="wrap-directory-list">{renderComponent()}</div>
    </>
  );
};

export default Directory_list;
