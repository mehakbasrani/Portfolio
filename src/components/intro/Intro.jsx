import "./intro.scss"
import image from "./myphoto_prev_ui.png"
import downArrow from "./down.png"
import Typewriter from "typewriter-effect";

 


export default function Intro() {

  return (
    <div className="intro" id = "intro">
    
       <div className="left">
       <div className="imgContainer">
         <img src={image} alt="" />
          </div>
          <div className="bg"></div>
       </div>
       <div className="right">
         <div className="wrapper">
           <h2>Hi There, I'm</h2>
           <h1>Mehak Basrani</h1>
           <h3>
             <Typewriter
            options={{
              strings: ['FrontEnd Develpoer', 'Engineer to be!','Travel Enthusiast'],
              autoStart: true,
              loop: true,
            }}
            />  
           </h3>
         </div>
        
        <a href="#about">
          <img src={downArrow} alt="" />
        </a>
       </div>
  </div>
  )
}
