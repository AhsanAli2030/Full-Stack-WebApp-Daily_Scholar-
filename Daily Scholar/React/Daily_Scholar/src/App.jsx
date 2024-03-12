import "./App.css";
import FrontPage from "./Pages/Front_Page/FrontPage";
import PersonalDiary from "./Pages/PersonalDiary/PersonalDiary";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DailyTasks from "./Pages/DailyTasks/DailyTasks";
import SingleNote from "./Pages/PersonalDiary/Diary_Components/SingleNote";
import Studynotes from "./Pages/StudyNotes/Studynotes";
function App() {
  return (
    <>
      <div id="wrap-All">
        <Router>
          <Routes>
            {/* Front Page */}
            <Route path="/" exact element={<FrontPage />}></Route>
            {/* Front Page */}

            {/* Personal Diary*/}
            <Route
              path="/personal-diary"
              exact
              element={<PersonalDiary />}
            ></Route>
            <Route
              path="/personal-diary/:id"
              exact
              element={<PersonalDiary />}
            ></Route>
            <Route
              path="/personal-diary/create-diary-note"
              exact
              element={<PersonalDiary />}
            ></Route>

            <Route path="/daily-tasks" exact element={<DailyTasks />}></Route>
            <Route
              path="/personal-diary/directory-list"
              exact
              element={<PersonalDiary />}
            ></Route>
            <Route
              path="/personal-diary2"
              exact
              element={<PersonalDiary />}
            ></Route>

            {/* Personal Diary*/}

            {/* Study Notes*/}
            <Route path="/study-notes" exact element={<Studynotes />}></Route>
            <Route
              path="/study-notes/about"
              exact
              element={<Studynotes />}
            ></Route>
            <Route
              path="/study-notes/subjects"
              exact
              element={<Studynotes />}
            ></Route>
            <Route
              path="/study-notes/single-subject/:id"
              exact
              element={<Studynotes />}
            ></Route>
            {/* Study Notes*/}
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
