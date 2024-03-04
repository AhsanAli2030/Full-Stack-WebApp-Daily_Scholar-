import React from 'react'
import Girl from './Girl'
import { Canvas } from '@react-three/fiber'
import { BakeShadows, OrbitControls, Stage } from '@react-three/drei'
import Header from '../../components/Header'
import './Front_page.css'
const FrontPage = () => {

   

  return (
   <>
   <div id="FrontPage-All">

<Header />

<div id="just-to-flex">


  <div id="left-side">
    <div id="heading">Your Gateway to <span>Daily Learning</span> & Productivity</div>
    <div id="explain">Our platform is your go-to destination for daily notes, writing prompts, and tasks with built-in reminders, designed to enhance your educational journey and boost your productivity. Whether you're a student, educator, or lifelong learner, Daily Scholar empowers you to stay organized, motivated, and engaged with your daily learning endeavors. Join us in making every day a step towards academic excellence and personal development.</div>
    <div id="signup-quickly"><span>✌🏽</span>Join us</div>
  </div>
    <div className="set-canvas">
      <Canvas camera={{ position: [0, 0, 150], fov: 40 }}>
          <Stage environment="city" intensity={0.6}>
        
          <Girl position={[0,-0.9,0]} scale={[1,1,1]} />

          </Stage>
          <BakeShadows />
          <OrbitControls   enableZoom ={false} enablePan={false}/>
        </Canvas>
      </div>
      </div>
    </div>
   </>
  )
}

export default FrontPage
