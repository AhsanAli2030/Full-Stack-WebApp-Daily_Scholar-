import React, { useEffect, useState } from "react";
import boyPic from "./assets-for-studynotes/vecteezy_3d-illustration-character-high-school-boy_8525673.png";
import Header from "../../components/Header";
import "./StudyNotes.css";
import aboutPic from "./assets-for-studynotes/info (1).png";
import stack_of_books from "./assets-for-studynotes/stack-of-books.png";
import AboutStudyNotes from "./Components/AboutStudyNotes";
import Subjects from "./Components/Subjects";
import { useLocation, Link } from "react-router-dom";
const Studynotes = () => {
  const [StudyNotesComponets, setStudyNotesComponets] =
    useState("AboutStudyNotes");

  // Url Settings
  // Url Settings
  const location = useLocation();
  const currentUrl = location.pathname;

  useEffect(() => {
    if (currentUrl === "/study-notes/about") {
      setStudyNotesComponets("AboutStudyNotes");
    } else if (currentUrl === "/study-notes/subjects") {
      setStudyNotesComponets("Subjects");
    }
  }, [currentUrl]);

  useEffect(() => {
    renderTheStudyNoteComponents();
  }, [StudyNotesComponets]);

  const renderTheStudyNoteComponents = () => {
    switch (StudyNotesComponets) {
      case "AboutStudyNotes":
        return <AboutStudyNotes />;

      case "Subjects":
        return <Subjects />;
    }
  };

  useEffect(() => {
    let headerDiv = document.getElementById("header");
    headerDiv.style.borderBottom = "0.7vw solid #6ea95b";
    let PersonDiaryDiv = document.getElementById("About");
    PersonDiaryDiv.style.border = "0.4vw solid #F5E2A6";
    // let DailyTasks = document.getElementById("tasks");
    // DailyTasks.style.border = "0.4vw solid #F5E2A6";
    let middleHeading = document.getElementById("middleHeading");
    middleHeading.style.marginLeft = "-11vw";
    let Login = document.getElementById("Login");
    Login.style.opacity = "0";
    Login.style.width = "0vw";
    Login.style.height = "0vh;";
    Login.style.overflow = "hidden";
    let for_color = document.getElementById("for-color");
    for_color.style.color = "#6EA95B";
  }, []);

  return (
    <div className="wrap-it-all">
      <Header />
      <div id="middleHeading">Notes For Academics</div>
      <div id="wrap-left-right">
        <div id="leftside">
          <div id="wrap-icons-2">
            <div className="firstIcon ">
              <Link
                to="/study-notes/subjects"
                onClick={() => {
                  window.location.href =
                    "http://localhost:5173/study-notes/subjects";
                }}
              >
                <img src={stack_of_books} alt="" />
              </Link>
            </div>
            <div className="firstIcon">
              <Link to="/study-notes/about">
                <img src={aboutPic} alt="" />
              </Link>
            </div>
          </div>

          <div id="boxForLeftSide">{renderTheStudyNoteComponents()}</div>
        </div>
        <div id="rightSide">
          <img src={boyPic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Studynotes;
