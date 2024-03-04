

import './App.css'
import FrontPage from './Pages/Front_Page/FrontPage'
import PersonalDiary from './Pages/PersonalDiary/PersonalDiary'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import DailyTasks from './Pages/DailyTasks/DailyTasks'
import SingleNote from './Pages/PersonalDiary/Diary_Components/SingleNote'
import Studynotes from './Pages/StudyNotes/Studynotes'
function App() {
  

  return (
    <>
    <div id="wrap-All">
    
      <Router>
        <Routes>
          <Route path="/" exact element={<FrontPage/>} ></Route>
          <Route path="/personal-diary" exact element={<PersonalDiary/>} ></Route>
          <Route path="/personal-diary/:id" exact element={<PersonalDiary/>} ></Route>
          <Route path="/personal-diary/create-diary-note" exact element={<PersonalDiary/>} ></Route>
          <Route path="/study-notes" exact element={<Studynotes/>} ></Route>
          <Route path="/daily-tasks" exact element={<DailyTasks/>} ></Route>
          <Route path="/personal-diary/directory-list" exact element={<PersonalDiary/>} ></Route>
          <Route path="/personal-diary2" exact element={<PersonalDiary/>} ></Route>
          
        </Routes>
      </Router>
    </div>
   
    </>
  )
}

export default App
