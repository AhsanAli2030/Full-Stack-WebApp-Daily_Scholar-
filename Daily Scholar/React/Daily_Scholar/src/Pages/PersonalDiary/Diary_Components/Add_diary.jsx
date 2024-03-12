import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Directory_list from "./Directory_list";
import About from "./About";

const Add_diary = () => {
  const [activeComponent, setActiveComponent] = useState("add_component");
  const [singleNote, setSingleNote] = useState({
    title: "Un-Titled",
    body: "Please Write Something 😊",
  });
  const location = useLocation();
  const currentUrl = location.pathname;

  useEffect(() => {
    if (currentUrl === "/personal-diary/create-diary-note") {
      setActiveComponent("add_component");
    } else if (currentUrl === "/personal-diary/directory-list") {
      setActiveComponent("Directory_list");
    }
  }, [currentUrl]);
  const handleSubmitSave = () => {
    createDiaryNote();
  };

  const createDiaryNote = async () => {
    try {
      await fetch(
        `http://127.0.0.1:8000/personal-diary/single-diary-note/create/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(singleNote),
        }
      );
    } catch (error) {
      console.error("Error creating diary note:", error);
      // Handle error (e.g., display an error message to the user)
    }
  };

  const handleTitleChange = (e) => {
    setSingleNote({ ...singleNote, title: e.target.value });
  };

  const handleBodyChange = (e) => {
    setSingleNote({ ...singleNote, body: e.target.value });
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "add_component":
        return (
          <>
            <div id="buttons-add">
              <div
                id="button"
                onClick={() => setActiveComponent("Directory_list")}
              >
                <Link to="/personal-diary" onClick={handleSubmitSave}>
                  Save
                </Link>
              </div>

              <div
                className="second-one"
                onClick={() => setActiveComponent("Directory_list")}
              >
                <Link to="/personal-diary/directory-list">Delete</Link>
              </div>
            </div>

            <div id="wrap-single-note">
              <div id="titl-and-body">
                <div id="title-update">
                  <span>Title : </span>
                  <textarea
                    onChange={handleTitleChange}
                    defaultValue={singleNote.title}
                    style={{
                      width: "60%",
                      resize: "none",
                      height: "80%",
                      padding: "0",
                      border: "0.2vw solid #12b8d5",
                      borderRadius: "0.5vw",
                      fontSize: "2.3vw",
                      resize: "horizontal",
                      overflowX: "hidden",
                      overflowY: "hidden",
                      whiteSpace: "nowrap",
                      fontFamily: '"Anta", sans-serif',
                    }}
                  ></textarea>
                </div>

                <div id="body-now">
                  <textarea
                    onChange={handleBodyChange}
                    defaultValue={singleNote.body}
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    style={{
                      width: "95%",
                      height: "100%",
                      resize: "none",
                      border: "0vw solid #1B1A1D",
                      borderRadius: "0vw",
                      backgroundColor: "#1B1A1D",
                      fontFamily: '"Anta", sans-serif',
                      boxShadow: "0.3vw 0.7vh 0.3vw black",
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
      case "Directory_list":
        return <Directory_list />;
      default:
        return null;
    }
  };

  return (
    <>
      <div id="wrap-single-note">{renderComponent()}</div>
    </>
  );
};

export default Add_diary;
