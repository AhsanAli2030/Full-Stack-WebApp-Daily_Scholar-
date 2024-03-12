import React, { useState, useEffect } from "react";
import "./PersonalDiary.css";
import logo from "./Assets_Diary/plus-svgrepo-com.svg";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { BakeShadows, OrbitControls, Stage } from "@react-three/drei";
import folders from "./Assets_Diary/folders-data-storage-svgrepo-com.svg";
import information from "./Assets_Diary/information-circle-svgrepo-com (1).svg";
import About from "./Diary_Components/About";
import Add_diary from "./Diary_Components/Add_diary";
import Directory_list from "./Diary_Components/Directory_list";
import { CSSTransition } from "react-transition-group";
import StickyNote from "./3dModel/StickyNote";
const PersonalDiary = () => {
  const [activeComponent, setActiveComponent] = useState("About");
  const [boolianField, setBoolianField] = useState(false);
  const renderComponent = () => {
    switch (activeComponent) {
      case "About":
        return <About />;
      case "Add_diary":
        return <Add_diary />;
      case "Directory_list":
        return <Directory_list />;
      default:
        return null;
    }
  };

  // useEffect(() => {
  //   if (boolianField === true && activeComponent === "Directory_list") {
  //     renderComponent();
  //   }
  // });
  return (
    <div className="wrap-it-all">
      <Header />

      <div id="work-space">
        <div id="middleHeading">Your Personal Diary</div>

        <div id="wrap-the-diary-material">
          <div id="Diary-area">
            <CSSTransition
              in={true}
              appear={true}
              timeout={5000}
              classNames="fade"
            >
              {renderComponent()}
            </CSSTransition>
          </div>
          <div id="add-diary-note">
            <Canvas camera={{ position: [0, 0, 150], fov: 40 }}>
              <Stage environment="city" intensity={0.6}>
                <StickyNote position={[0, -0.9, 0]} scale={[0.7, 0.7, 0.7]} />
              </Stage>
              <BakeShadows />
              <OrbitControls
                default
                autoRotate
                enableZoom={false}
                enablePan={false}
              />
            </Canvas>
          </div>
          <div id="buttons-three">
            <div
              className="buttons"
              onClick={() => setActiveComponent("Directory_list")}
            >
              <Link to="/personal-diary/directory-list">
                <img src={folders} alt="Logo" />
              </Link>
            </div>
            <div
              className="buttons"
              id="middle"
              onClick={() => setActiveComponent("Add_diary")}
            >
              <Link to="/personal-diary/create-diary-note">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <div
              className="buttons"
              id="last"
              onClick={() => setActiveComponent("About")}
            >
              <Link to="/personal-diary">
                <img src={information} alt="Logo" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDiary;
