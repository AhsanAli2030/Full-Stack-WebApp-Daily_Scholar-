import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlusPic from "../assets-for-studynotes/plus.png";
import backPic from "../assets-for-studynotes/previous.png";
import { Link } from "react-router-dom";
import IfSubjectZero from "../Components/IfSubjectZero";
import stick from "../../PersonalDiary/Assets_Diary/stick.png";
import diskette from "../assets-for-studynotes/diskette.png";
import { Center } from "@react-three/drei";
const SingleSubjectComponent = ({
  singleSubjectComponet,
  setsingleSubjectComponet,
  setaboveHeadingRemove,
}) => {
  const { id } = useParams();
  const [singleSubject, setsingleSubject] = useState(null);
  const [truncatedSubject, setTruncatedSubject] = useState("");

  const gettingSubject = async () => {
    try {
      const responseForSingleObject = await fetch(
        `http://127.0.0.1:8000/study-notes/single-subject/${id}`
      );
      const dataFromSingleObject = await responseForSingleObject.json();

      setsingleSubject(dataFromSingleObject);
    } catch (error) {
      console.error("Error Getting the Single Subject:", error); // Corrected typo
    }
  };
  const [singleSubjectAllNotes, setsingleSubjectAllNotes] = useState([]);
  const gettingAllNotesofSubject = async () => {
    try {
      const responseForSingleObjectAllNotes = await fetch(
        `http://127.0.0.1:8000/study-notes/single-subject/${id}/all-notes`
      );
      const dataFromSingleObjectAllNotes =
        await responseForSingleObjectAllNotes.json();

      setsingleSubjectAllNotes(dataFromSingleObjectAllNotes);
    } catch (error) {
      console.error("Error Getting the Single Subject All Notes:", error); // Corrected typo
    }
  };
  useEffect(() => {
    gettingSubject();
    gettingAllNotesofSubject();
  }, [id]);
  useEffect(() => {
    if (singleSubject && singleSubject.subjects) {
      if (singleSubject.subjects.length > 9) {
        setTruncatedSubject(singleSubject.subjects.slice(0, 9) + "...");
      } else {
        setTruncatedSubject(singleSubject.subjects);
      }
    }
  }, [singleSubject]);
  const handleBack = () => {
    setStudyNotesComponets("Subjects");
    setaboveHeadingRemove("remain");
  };

  const [subjectnameEdit, setsubjectNameEdit] = useState(
    "truncatedwithellipse"
  );
  const handleSubjectNameChangeForEdit = (e) => {
    const newValue = e.target.value.trim();
    setsingleSubject((prevState) => ({
      ...prevState,
      subjects: newValue,
    }));
    setTruncatedSubject(newValue);
  };
  const rendrerSubjectNameArea = () => {
    switch (subjectnameEdit) {
      case "truncatedwithellipse":
        return <>{truncatedSubject}</>;

      case "EditTextArea":
        return (
          <>
            <textarea
              className="text-area"
              onChange={handleSubjectNameChangeForEdit}
              defaultValue={truncatedSubject}
              style={{
                width: "90%", // Make the textarea full width
                height: "70%",
                padding: "0", // Add some padding
                resize: "none",
                borderRadius: "0.4vw", // Add rounded corners
                fontSize: "2.1vw", // Set font size
                resize: "none",
                // Add any other styles you like
                resize: "horizontal", // Allow horizontal resizing
                overflowX: "hidden", // Hide horizontal scrollbar
                overflowY: "hidden", // Hide vertical scrollbar
                whiteSpace: "nowrap", // Prevent text wrapping
                fontFamily: '"Anta", sans-serif',
                backgroundColor: "#1B1A1D",
                color: "#FFFFFF",
                marginLeft: "0.2vw",
              }}
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </>
        );
    }
  };
  const EditTextArea = () => {
    setsubjectNameEdit("EditTextArea");
    let editName = document.getElementById("editName");
    editName.style.opacity = "0";
    editName.style.width = "0%";
    editName.style.height = "0%";
    editName.style.overflow = "hidden";
    editName.style.border = "none";
    editName.style.borderRadius = "0";

    let SaveName = document.getElementById("SaveName");
    SaveName.style.opacity = "1";
    SaveName.style.width = "90%";
    SaveName.style.height = "90%";

    SaveName.style.border = "0.3vw solid #6EA95B";
    SaveName.style.borderRadius = "1vw";
    // Adding the Hovering effect
    SaveName.addEventListener("mouseenter", handleMouseEnter);
    SaveName.addEventListener("mouseleave", handleMouseLeave);

    function handleMouseEnter() {
      this.style.backgroundColor = "#6EA95B"; // Apply hover effect
      this.style.transition = "0.3s ease all";
      this.style.fontSize = "1.7vw";
    }

    // Function to handle mouse leaving the element
    function handleMouseLeave() {
      this.style.backgroundColor = ""; // Remove hover effect
      this.style.fontSize = "1.4vw";
    }
  };
  const updateSubjectNameSingle = async () => {
    try {
      await fetch(
        `http://127.0.0.1:8000/study-notes/single-subject/${id}/update`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(singleSubject),
        }
      );
      setsubjectNameEdit("truncatedwithellipse");

      let SaveName = document.getElementById("SaveName");
      SaveName.style.opacity = "0";
      SaveName.style.width = "0%";
      SaveName.style.height = "0%";
      SaveName.style.overflow = "hidden";
      SaveName.style.border = "none";
      SaveName.style.borderRadius = "0";

      let editName = document.getElementById("editName");
      editName.style.opacity = "1";
      editName.style.width = "90%";
      editName.style.height = "90%";

      editName.style.border = "0.3vw solid #6EA95B";
      editName.style.borderRadius = "1vw";
      // Adding the Hovering effect
      editName.addEventListener("mouseenter", handleMouseEnter);
      editName.addEventListener("mouseleave", handleMouseLeave);

      function handleMouseEnter() {
        this.style.backgroundColor = "#6EA95B"; // Apply hover effect
        this.style.transition = "0.3s ease all";
        this.style.fontSize = "1.7vw";
      }

      // Function to handle mouse leaving the element
      function handleMouseLeave() {
        this.style.backgroundColor = ""; // Remove hover effect
        this.style.fontSize = "1.4vw";
      }
    } catch (error) {
      console.error("Error updating Study note:", error);
      // Handle error (e.g., display an error message to the user)
    }
  };
  const updateSubjectnameinSingleSubject = () => {
    updateSubjectNameSingle();
  };

  const handleDeleteSingleSubject = async () => {
    setdeleteSubjects(true);
    setaboveHeadingRemove("remain");
    if (setdeleteSubjectsYes) {
      try {
        await fetch(
          `http://127.0.0.1:8000/study-notes/single-subject/${id}/delete`,
          {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          }
        );
      } catch (error) {
        console.error("Error Deleteing Subject:", error);
        // Handle error (e.g., display an error message to the user)
      }
    }
  };
  const [deleteSubject, setdeleteSubjects] = useState(false);
  const [deleteSubjectYes, setdeleteSubjectsYes] = useState(false);
  const [singleNoteAdd, setSingleNoteAdd] = useState("AllNotesSigle");
  const [singleNoteAddData, setSingleNoteAddData] = useState({
    notesTitle: "Un-Titled",
    notesAre: "Add a Note 📒 ...",
  });
  const hadnlingTheAddNotes = () => {
    setSingleNoteAdd("singleSubAddNote");
  };

  const SaveTheNote = async () => {
    try {
      await fetch(
        `http://127.0.0.1:8000/study-notes/single-subject/${id}/create-note-for-this-subject`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(singleNoteAddData),
        }
      );
    } catch (error) {
      console.error("Error creating Note For Study Note:", error);
      // Handle error (e.g., display an error message to the user)
    }

    setsingleSubjectComponet("All-Subjects");
    window.location.href = "http://localhost:5173/study-notes/subjects";
  };
  const renderSingleSubAddOrNotesList = () => {
    switch (singleNoteAdd) {
      case "AllNotesSigle":
        return (
          <>
            <div id="wrap-all-single-subject-Notes">
              <div id="heading-above-single-subject">
                <div id="add-button-in-StudyNotes">
                  <Link to="/study-notes/subjects" onClick={handleBack}>
                    <img src={backPic} alt="" className="settingPic" />
                  </Link>
                </div>

                {!deleteSubject ? (
                  <>
                    <div id="subjectName">
                      Subject :{" "}
                      <span className="ellipse">
                        {rendrerSubjectNameArea()}
                      </span>
                    </div>
                  </>
                ) : (
                  <div id="subjectNameDelete">
                    Are You Sure ?
                    <div id="wrapyesOrNo">
                      <span
                        className="borderBackground"
                        onClick={() => {
                          setdeleteSubjectsYes(true);
                          window.location.href =
                            "http://localhost:5173/study-notes/subjects";
                        }}
                      >
                        Yes
                      </span>
                      <span
                        className="borderBackgroundNo"
                        onClick={() => {
                          setdeleteSubjects(false);
                        }}
                      >
                        NO
                      </span>
                    </div>
                  </div>
                )}

                <div id="editOptions">
                  <div id="wrap-edit-delete">
                    <div id="editName" onClick={EditTextArea}>
                      Edit
                    </div>
                    <div
                      id="SaveName"
                      onClick={updateSubjectnameinSingleSubject}
                    >
                      Save
                    </div>

                    <div
                      id="delete-single-subject"
                      onClick={handleDeleteSingleSubject}
                    >
                      Delete
                    </div>
                  </div>
                  <div id="add-button-single-subject">
                    <img src={PlusPic} alt="" onClick={hadnlingTheAddNotes} />
                  </div>
                </div>
              </div>

              {/* ################################################# here to start get the items and if zero length then display taht cat also delete ensure */}

              {singleSubjectAllNotes.length === 0 ? (
                <>
                  {" "}
                  <IfSubjectZero />
                </>
              ) : (
                <>
                  <div id="below-area-for-single-subject">
                    <div id="All-Subjects">
                      <div id="repeat-in-fractions-for-subjects">
                        {/* Here to add the Loop */}
                        {singleSubjectAllNotes.map((subjects, index) => (
                          <div className="diary-note-for-subjects" key={index}>
                            <div id="wrap-diary-note-for-subjects">
                              <Link>
                                <img src={stick} alt="" />
                                <div id="subject-name">
                                  {subjects.notesTitle}
                                </div>
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </>
        );
      case "singleSubAddNote":
        return (
          <>
            <div id="wrapAllforAdd">
              <div id="abovePortionForSingle">
                <div id="saveButton" onClick={SaveTheNote}>
                  <Link
                    to="/study-notes/subjects"
                    onClick={() => {
                      setaboveHeadingRemove("remain");
                    }}
                  >
                    Save
                  </Link>
                </div>
                <div id="delButton">
                  <Link
                    to="/study-notes/subjects"
                    onClick={() => {
                      setsingleSubjectComponet("All-Subjects");
                      setSingleNoteAdd("AllNotesSigle");
                      setaboveHeadingRemove("remain");
                      window.location.href =
                        "http://localhost:5173/study-notes/subjects";
                    }}
                  >
                    Delete
                  </Link>
                </div>
              </div>

              <div id="belowPortionForSingle">
                <div id="titleEntering">
                  <span>Title : </span>
                  <textarea
                    onChange={(e) => {
                      setSingleNoteAddData({
                        ...singleNoteAddData,
                        notesTitle: e.target.value,
                      });
                    }}
                    defaultValue="Un-Titled ..."
                    style={{
                      width: "60%",
                      height: "60%",
                      resize: "none",
                      padding: "0",
                      // border: "0.2vw solid #12b8d5",
                      borderRadius: "0.5vw",
                      fontSize: "2.3vw",
                      resize: "horizontal",
                      overflowX: "hidden",
                      overflowY: "hidden",
                      whiteSpace: "nowrap",
                      fontFamily: '"Anta", sans-serif',
                      display: "flex",
                      alignItems: "Center",
                      resize: "none",
                    }}
                    id="doTextarea"
                  ></textarea>
                </div>

                <div id="bodyAreaForStudyNotes">
                  <textarea
                    onChange={(e) => {
                      setSingleNoteAddData({
                        ...singleNoteAddData,
                        notesAre: e.target.value,
                      });
                    }}
                    defaultValue="Add a Note 📒 ..."
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    style={{
                      width: "95%",
                      resize: "none",
                      height: "95%",
                      border: "inherit",
                      borderRadius: "0vw",
                      backgroundColor: "inherit",
                      fontFamily: '"Anta", sans-serif',
                      // boxShadow: "0.3vw 0.7vh 0.3vw black",
                      color: "white",
                      fontSize: "1vw",
                      overflowY: "scroll",
                      scrollbarWidth: "none",
                      msOverflowStyle: "none",
                      "&::WebkitScrollbar": {
                        display: "none",
                      },
                    }}
                  ></textarea>
                </div>
              </div>
            </div>
          </>
        );
    }
  };
  return <>{renderSingleSubAddOrNotesList()}</>;
};

export default SingleSubjectComponent;
