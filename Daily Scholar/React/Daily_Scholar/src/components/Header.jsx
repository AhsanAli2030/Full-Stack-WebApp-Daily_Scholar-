import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const location = window.location.href;
  

  useEffect(() => {
    // Check if the current URL matches the "/personal-diary" route
    if (location === "http://localhost:5173/personal-diary") {
      let PersonalDiary = document.getElementById("About");
      
      PersonalDiary.style.width = "0vw";
      PersonalDiary.style.height = "0vh";
      PersonalDiary.style.border = "0";
      PersonalDiary.style.overflow = "hidden";
    } else if (location === "http://localhost:5173/study-notes") {
      let StudyNotes = document.getElementById("Login");
      StudyNotes.style.width = "0vw";
      StudyNotes.style.height = "0vh";
      StudyNotes.style.border = "0";
      StudyNotes.style.overflow = "hidden";
    } else if (location === "http://localhost:5173/daily-tasks") {
      let DailyTasks = document.getElementById("tasks");
      DailyTasks.style.width = "0vw";
      DailyTasks.style.height = "0vh";
      DailyTasks.style.border = "0";
      DailyTasks.style.overflow = "hidden";
    }
  }, [location]);
  return (
    <>
      <div id="header">
        <div id="left-header">
          <Link to="/">Daily Scholar</Link>
        </div>
        <div id="right-header">
          <div className="right-three  Signup" id="About">
            <Link to="/personal-diary">Personal Diary</Link>
          </div>

          <div className="right-three  Signup" id="Login">
            <Link to="/study-notes">Study Notes</Link>
          </div>

          <div className="right-three Signup" id="tasks">
            <Link to="/daily-tasks">Daily Tasks</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
