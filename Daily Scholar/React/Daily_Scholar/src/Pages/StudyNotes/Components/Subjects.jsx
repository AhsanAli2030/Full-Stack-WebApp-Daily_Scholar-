import React, { useEffect, useState, lazy } from "react";
import PlusPic from "../assets-for-studynotes/plus.png";
import backPic from "../assets-for-studynotes/previous.png";

import book from "../assets-for-studynotes/book.png";
import yellowBook from "../assets-for-studynotes/yellowBook.png";
import grey from "../assets-for-studynotes/grey.png";
import { Link, useLocation } from "react-router-dom";
const IfSubjectZero = lazy(() => import("./IfSubjectZero.jsx"));
import diskette from "../assets-for-studynotes/diskette.png";
import SingleSubjectComponent from "./SingleSubjectComponent.jsx";
const Subjects = () => {
  const [allSubjects, setAllSubjects] = useState([]);
  const [subjectName, setsubjectName] = useState(null);
  const [singleSubjectComponet, setsingleSubjectComponet] =
    useState("All-Subjects");
  // Handling prop from child

  // Handling prop from child

  const location = useLocation();
  const currentUrl = location.pathname;

  useEffect(() => {
    setaboveHeadingRemove("remain");
  }, [currentUrl]);

  const hadnleSubjectNameAnimation = () => {
    let for_animation = document.getElementById("for-animation");
    for_animation.style.height = "0vh";
    for_animation.style.overflow = "hidden";
    for_animation.style.width = "0vw";

    let second_animation = document.getElementById("second-for-subject-name");
    second_animation.style.height = "100%";

    second_animation.style.width = "100%";
  };

  const handleBacktoTotalSubjects = () => {
    let second_animation = document.getElementById("second-for-subject-name");
    second_animation.style.height = "0vh";
    second_animation.style.overflow = "hidden";
    second_animation.style.width = "0vw";

    let for_animation = document.getElementById("for-animation");
    for_animation.style.height = "100%";

    for_animation.style.width = "100%";
  };
  const getAllSubjects = async () => {
    try {
      const responseFromStudyNotesAlSubjects = await fetch(
        "http://127.0.0.1:8000/study-notes/all-subjects"
      );
      const dataFromAllDiaryNotes =
        await responseFromStudyNotesAlSubjects.json();
      setAllSubjects(dataFromAllDiaryNotes);
    } catch (error) {
      console.error("Error fetching all Study Notes:", error);
    }
  };
  useEffect(() => {
    getAllSubjects();
  }, []);
  const bookColor = (index) => {
    index = index % 3;
    switch (index) {
      case 0:
        return yellowBook;
      case 1:
        return book;
      case 2:
        return grey;
      default:
        return null;
    }
  };

  const handleSubjectNameChange = (e) => {
    const newValue = e.target.value;
    let firstButtonPic = document.getElementById("firstButtonPic");
    let secondButtonPic = document.getElementById("secondButtonPic");
    if (newValue.trim() === "") {
      secondButtonPic.style.opacity = "0";
      secondButtonPic.style.width = "0%";
      secondButtonPic.style.overflow = "hidden";

      firstButtonPic.style.width = "50%";
      firstButtonPic.style.opacity = "1";
    } else {
      setsubjectName({ ...subjectName, subjects: e.target.value });
      secondButtonPic.style.width = "50%";
      secondButtonPic.style.opacity = "1";

      firstButtonPic.style.opacity = "0";
      firstButtonPic.style.width = "0%";
      firstButtonPic.style.overflow = "hidden";
    }
    setsubjectName(newValue.trim());

    // allsubject is a list so we have to add a object with subejcts name  to be continue
  };
  const [aboveHeadingRemove, setaboveHeadingRemove] = useState("remain");
  useEffect(() => {
    let above_Heading = document.getElementById("above-Heading");
    switch (aboveHeadingRemove) {
      case "remove":
        {
          above_Heading.style.width = "0";
          above_Heading.style.height = "0";
          above_Heading.style.overflow = "hidden";
        }
        break;
      case "remain":
        {
        }
        break;
    }
  }, [aboveHeadingRemove]);
  const render_AllSubjects_SingleSubject = () => {
    switch (singleSubjectComponet) {
      case "All-Subjects":
        return (
          <>
            <div id="All-Subjects">
              <div id="repeat-in-fractions-for-subjects">
                {allSubjects.map((subjects, index) => (
                  <div className="diary-note-for-subjects" key={subjects.id}>
                    <div id="wrap-diary-note-for-subjects">
                      <Link
                        to={`/study-notes/single-subject/${subjects.id}`}
                        onClick={() => {
                          setsingleSubjectComponet("single-subject-component");
                          setaboveHeadingRemove("remove");
                        }}
                      >
                        <img src={bookColor(index)} alt="" />
                        <div id="subject-name">{subjects.subjects}</div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        );

        break;
      case "single-subject-component":
        return (
          <SingleSubjectComponent
            singleSubjectComponet={singleSubjectComponet}
            setsingleSubjectComponet={setsingleSubjectComponet}
            setaboveHeadingRemove={setaboveHeadingRemove}
          />
        );
    }
  };

  const AddSubject = async () => {
    await fetch(`http://127.0.0.1:8000/study-notes/create-subject`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify(subjectName),
    });
    let text_area = document.getElementsByClassName("text-area");
    text_area[0].value = ""; // Set the value property, not newValue
    let firstButtonPic = document.getElementById("firstButtonPic");
    let secondButtonPic = document.getElementById("secondButtonPic");
    secondButtonPic.style.opacity = "0";
    secondButtonPic.style.width = "0%";
    secondButtonPic.style.overflow = "hidden";

    firstButtonPic.style.width = "50%";
    firstButtonPic.style.opacity = "1";
    await getAllSubjects();
  };
  const renderForSUbjects = () => {
    if (allSubjects.length == 0) {
      return <IfSubjectZero />;
    } else {
      return render_AllSubjects_SingleSubject();
    }
  };

  return (
    <>
      <div id="wrap-all-subjects">
        <div id="above-Heading">
          <div id="for-animation">
            <div id="total-subjects">
              Total Subjects : <span>{allSubjects.length}</span>
            </div>{" "}
            <div id="add-button-in-StudyNotes">
              <img src={PlusPic} alt="" onClick={hadnleSubjectNameAnimation} />
            </div>
          </div>

          <div id="second-for-subject-name">
            <div id="total-subjects">
              <span>Subjects Name : </span>
              <textarea
                defaultValue=""
                onChange={handleSubjectNameChange}
                style={{
                  width: "60%", // Make the textarea full width
                  height: "60%",
                  padding: "0", // Add some padding
                  resize: "none",
                  borderRadius: "0.5vw", // Add rounded corners
                  fontSize: "2.3vw", // Set font size

                  // Add any other styles you like
                  resize: "horizontal", // Allow horizontal resizing
                  overflowX: "hidden", // Hide horizontal scrollbar
                  overflowY: "hidden", // Hide vertical scrollbar
                  whiteSpace: "nowrap", // Prevent text wrapping
                  fontFamily: '"Anta", sans-serif',
                  backgroundColor: "#1B1A1D",
                  color: "#F5E2A6",
                }}
                name=""
                id=""
                cols="30"
                rows="10"
                className="text-area"
              ></textarea>
            </div>
            <div id="add-button-in-StudyNotes">
              <Link to="/study-notes/subjects">
                <img
                  src={backPic}
                  alt=""
                  onClick={handleBacktoTotalSubjects}
                  id="firstButtonPic"
                />
                <img
                  src={diskette}
                  alt=""
                  id="secondButtonPic"
                  onClick={AddSubject}
                />
              </Link>
            </div>
          </div>
        </div>
        {renderForSUbjects()}
      </div>
    </>
  );
};

export default Subjects;
