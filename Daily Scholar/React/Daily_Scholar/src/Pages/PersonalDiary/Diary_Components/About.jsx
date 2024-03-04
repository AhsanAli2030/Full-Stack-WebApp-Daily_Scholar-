import React from 'react'
import hand from '../Assets_Diary/backhand-index-pointing-right-skin-3-svgrepo-com.svg'
const About = () => {
  return (
    <>
    <div id="wrap-about-component">

    
        <div id="heading-for-diary">Cultivating
        <span> Personal Growth </span> Daily</div>
        <div id="explanatoion-for-diary">
        Welcome to Personal Diary, your personalized gateway to a world of learning and self-reflection. Our app is designed to be your trusted companion in your daily journey towards knowledge and growth. With Personal Diary, you can effortlessly document your thoughts, reflections, and experiences in your personal diary. But it doesn't stop there. Our innovative features help you connect your daily musings with curated resources, insightful prompts, and educational content, creating a seamless integration of reflection and learning. Whether you're jotting down your thoughts, setting goals, or exploring new ideas, Daily Scholar empowers you to cultivate a habit of continuous self-improvement. Embrace the journey, enrich your mind, and unlock your full potential with Personal Diary.
        </div>
        <div id="buttons-information">
            <div className="press-three-buttons">
                <span>Press Directory Structure for Printing Notes</span> <span>  </span><img src={hand} alt="" /></div>
            <div className="press-three-buttons">
                <span>Press Add Button to Add Notes</span><span>  </span><img src={hand} alt="" /></div>
            <div className="press-three-buttons">
                <span>Press About button for Printing About</span><span>  </span><img src={hand} alt="" /></div>
        </div>
    </div>
    
    </>
  )
}

export default About
