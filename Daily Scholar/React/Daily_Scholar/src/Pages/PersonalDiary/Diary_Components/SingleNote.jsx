import React, { useState, useEffect ,onChange} from 'react';
import { Link } from 'react-router-dom';
import Directory_list from './Directory_list';
const SingleNote = ({ id }) => {
  const [singleNote, setSingleNote] = useState(null);
  const [year, setYear] = useState(null); // Declare year state
  const [month, setMonth] = useState(null); // Declare year state
  const [day, setDay] = useState(null); // Declare year state
  const [hour, setHour] = useState(null); // Declare year state
  const [minute, setMinute] = useState(null); // Declare year state
  const [sec, setSec] = useState(null); // Declare year state

  const [yearUpdate, setYearUpdate] = useState(null); // Declare year state
  const [monthUpdate, setMonthUpdate] = useState(null); // Declare year state
  const [dayUpdate, setDayUpdate] = useState(null); // Declare year state
  const [hourUpdate, setHourUpdate] = useState(null); // Declare year state
  const [minuteUpdate, setMinuteUpdate] = useState(null); // Declare year state
  const [secUpdate, setSecUpdate] = useState(null); // Declare year state

  useEffect(() => {
    getSingleDiaryNote();
    
  }, []); // Empty dependency array to run the effect only once

  let getSingleDiaryNote = async () => {
    
      let responseFromSingleDiaryNote = await fetch(`http://127.0.0.1:8000/personal-diary/single-diary-note/${id}`);
    
     
    let dataFromSingleDiaryNote = await responseFromSingleDiaryNote.json();
    
    setSingleNote(dataFromSingleDiaryNote);

    const timestamp = dataFromSingleDiaryNote.created;
    const timestampUpdated = dataFromSingleDiaryNote.update;

    const dateObject = new Date(timestamp);
    const dateObjectUpdate = new Date(timestampUpdated);

    const extractedYear = dateObject.getFullYear();
    const extractedYearUpdate =dateObjectUpdate.getFullYear();

    const extracedmonth = dateObject.getMonth() + 1; 
    const extracedmonthUpdate = dateObjectUpdate.getMonth() + 1;

const extracteddayUpdate = dateObjectUpdate.getDate();
const extractedday = dateObject.getDate();

const extractedhoursUpdate = dateObjectUpdate.getHours();
const extractedhours = dateObject.getHours();

    const extractedminutesUpdate = dateObjectUpdate.getMinutes();
    const extractedminutes = dateObject.getMinutes();

    const extractedsecondsUpdate = dateObjectUpdate.getSeconds();
    const extractedseconds = dateObject.getSeconds();

    setYear(extractedYear);
    setMonth(extracedmonth);
    setDay(extractedday);
    setHour(extractedhours);
    setMinute(extractedminutes);
    setSec(extractedseconds);

    setYearUpdate(extractedYearUpdate);
    setMonthUpdate(extracedmonthUpdate);
    setDayUpdate(extracteddayUpdate);
    setHourUpdate(extractedhoursUpdate);
    setMinuteUpdate(extractedminutesUpdate);
    setSecUpdate(extractedsecondsUpdate);
 
  };
  const [activeComponent, setActiveComponent] = useState('update_component');
  let updateDiaryNote = async () => {
    try {
      await fetch(`http://127.0.0.1:8000/personal-diary/single-diary-note/${id}/update`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(singleNote),
        
      });
    } catch (error) {
      console.error('Error updating diary note:', error);
      // Handle error (e.g., display an error message to the user)
    }
  }

 let handleSubmitSave=()=>{
  updateDiaryNote();
 
 }
let  deleteDiaryNote = async ()=>{
  try {
    await fetch(`http://127.0.0.1:8000/personal-diary/single-diary-note/${id}/delete`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
     
      
    });
  } catch (error) {
    console.error('Error updating diary note:', error);
    // Handle error (e.g., display an error message to the user)
  }
}
 let handleSubmitDelete=()=>{
  deleteDiaryNote();
 }
 
  const renderComponent = () => {
    switch (activeComponent) {
      case 'update_component':
        return (
        <>
         {singleNote && ( // Check if singleNote is not null before accessing its properties
          <div id="dates">
            <div className="created same">
               <span>Created</span>  <br />
              <span>Date :</span> <span>{`${day} / ${month} / ${year}`}</span> <br />
              <span>Time :</span> <span>{`${hour}-${minute}-${sec}`}</span>
            </div>
            
            <div id="button" onClick={() => setActiveComponent('Directory_list')}>
          <Link to="/personal-diary" onClick={handleSubmitSave}>
                Save
                </Link>
            </div>


            <div className='second-one' onClick={() => setActiveComponent('Directory_list')}>
          <Link to="/personal-diary" onClick={handleSubmitDelete}>
                Delete
                </Link>
            </div>
            
            
            <div className="updated-last same">
            <span>Updated-Last</span>
            <br />
              <span>Date :</span> <span>{`${dayUpdate} / ${monthUpdate} / ${yearUpdate}`}</span> <br />
              <span>Time :</span> <span>{`${hourUpdate}-${minuteUpdate}-${secUpdate}`}</span>
            </div>
          </div>
        )}


        <div id="titl-and-body">
            <div id="title-update">
                <span>Title : </span>
                <textarea  
                onChange={(e) => setSingleNote({ ...singleNote, 'title': e.target.value })}
                defaultValue={singleNote?.title}
                style={{
    width: '60%', // Make the textarea full width
    height:'80%',
    padding: '0', // Add some padding
    border: '0.2vw solid #12b8d5', // Add a border
    borderRadius: '0.5vw', // Add rounded corners
    fontSize: '2.3vw', // Set font size
    
    // Add any other styles you like
    resize: 'horizontal', // Allow horizontal resizing
    overflowX: 'hidden', // Hide horizontal scrollbar
    overflowY: 'hidden', // Hide vertical scrollbar
    whiteSpace: 'nowrap', // Prevent text wrapping
    fontFamily:'"Anta", sans-serif',
    
  }}></textarea>
            </div>



            <div id="body-now">
                <textarea   
                onChange={(e) => setSingleNote({ ...singleNote, 'body': e.target.value })}
                defaultValue={singleNote?.body}
                
                name=""
  id=""
  cols="30"
  rows="10"
  style={{
    width: '95%', // Make the textarea full width
    height:'100%',
    border: '0vw solid #1B1A1D', // Add a border
    borderRadius: '0vw',
    backgroundColor:'#1B1A1D',
    fontFamily:'"Anta", sans-serif',
    boxShadow:'0.3vw 0.7vh 0.3vw black',
    color:'white',
    fontSize: '1vw', 
    overflowY: 'scroll', // Enable vertical scrolling
    scrollbarWidth: 'none', // Hide scrollbar for Firefox
    msOverflowStyle: 'none', // Hide scrollbar for IE and Edge
    '&::WebkitScrollbar': {
      display: 'none' // Hide scrollbar for Chrome, Safari, and Opera
    }
  }}></textarea>
            </div>
        </div>
        </>)
      case 'Directory_list':
        return <Directory_list />;
      default:
        return null;
    }
  };











  
  return (
    <>
      <div id="wrap-single-note">
       {renderComponent()}
      
      </div>
    </>
  );
};

export default SingleNote;
