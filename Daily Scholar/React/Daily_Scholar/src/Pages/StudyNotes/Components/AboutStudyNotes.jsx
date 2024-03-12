import React, { useEffect } from "react";

const AboutStudyNotes = () => {
  useEffect(() => {
    let for_color = document.getElementById("for-color");
    for_color.style.color = "#6EA95B";
  }, []);
  return (
    <>
      <div id="wrap-aboutStudyNotes-component">
        <div id="heading-for-diary">
          Nurturing
          <span id="for-color"> Academic Growth </span> Daily
        </div>
        <div id="explanatoion-for-diary">
          Welcome to Academic Notes, your all-in-one companion for cultivating
          intellectual growth. Our app is meticulously crafted to serve as your
          digital haven for organizing and expanding your knowledge base.
          Seamlessly navigate through your subjects, each a gateway to a wealth
          of learning opportunities. Dive into the depths of your chosen
          disciplines, where you can effortlessly compile and refine your notes
          to capture every insightful revelation. With Academic Notes, every
          note becomes a stepping stone towards academic excellence, empowering
          you to unlock your full scholarly potential. Embrace the pursuit of
          knowledge, enrich your mind, and foster a habit of continuous academic
          advancement with Academic Notes. With Academic Notes, let every
          keystroke ignite a spark of curiosity, fueling your relentless quest
          for academic mastery.
        </div>
      </div>
    </>
  );
};

export default AboutStudyNotes;
