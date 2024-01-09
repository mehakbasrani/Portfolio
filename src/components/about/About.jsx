import { useState } from "react"
import "./about.scss"
import Logo from "./Logo"
import photo from "./myphoto2.jpg"
import Card from "./Card"
import location from "./contact logo/location.png";
import graduation from "./contact logo/graduation.jpg";
import university from "./contact logo/university.png";
import linkedin from "./contact logo/linkedin.png";
import github from "./contact logo/github.png";
import instagram from "./contact logo/instagram.jpeg";
import email from "./contact logo/email.jpeg";
import person from "./contact logo/person.png";
import skills from "./contact logo/skills.png";


export default function About( ) {

  const [active, setActive] =useState("showAbout")

  return (
    
    <div className="about" id="about">
         <img className="myphoto" src= {photo} alt="" />

      <div className="wrapper">
          <div className="info">
                 <h3 >  Mehak</h3>
                 <h6> <img src= {location} alt="" className ="icons"/> Indore, M.P</h6>
                 <h6> <img src= {graduation} alt="" className ="icons"/>Pursuing Integerated M.Tech (IT)</h6>
                 <h6> <img src= {university} alt="" className ="icons"/>International Institute of Professional Studies ,DAVV </h6>
            <div className="imgContainer">
                 <a href="mailto:mehakbasrani17@gmail.com">
                 <img src={email} alt="" />
                 </a>
                 <a href="https://www.linkedin.com/in/mehak-basrani-b444941a4/">
                 <img src={linkedin} alt="" />
                 </a>
                 <a href="https://github.com/mehakbasrani">
                 <img src={github} alt="" />
                 </a>
                 <a href="https://www.instagram.com/__.mehak_basrani/">
                 <img src={instagram} alt="" />
                 </a>
            </div>
         </div>
         <div className="btn">
                   <button onClick = {()=>setActive("showAbout")}> <img className ="pictures" src={person} alt="" /> About</button>
                   <button onClick = {()=>setActive("showSkill")}> <img className ="pictures" src={skills} alt="" />Skills</button>
          </div>
              
          <div className="information">
              {active === "showAbout" && 
             <Card show =" Detailed oriented , ambitious and committed engineer to be , with a get-it-done ,on-time,
                         high-quality product spirit. I thrive on challenges and always look forward for an 
                         opportunity to do better and enhance my skills. A highly driven individual looking for a 
                         challenging position in an organisation specializing in tech to further work towards
                         personal and professional development and will play to my strengths." /> }
                         {active === "showSkill" &&
              <Card show = {<Logo />} />   }   
         </div>    

                
    </div>
</div> 
  )
}
