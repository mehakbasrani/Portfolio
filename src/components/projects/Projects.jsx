import "./projects.scss"

import Card from "./Card.jsx";
import Data from "./Data.jsx";


export default function Projects() {
  return  (  <>
<div className="projects" id ="projects">
<img src="TravelGuide.png" alt="" />
    <h1>Personal Projects</h1>
    
   <div className="container">
    {Data.map((value) =>{
    return(
    <Card 
      imgsrc = {value.imgsrc} 
      alt = {value.alt} 
      title = {value.title}
      quotes = {value.quotes} 
      description = {value.description}
      link ={value.link} 
      />);
    })}  

    {/* lang1 ={value.lang1} lang2 ={value.lang2} lang3 ={value.lang3} */}
      
  </div> 
</div>
    </>
  )
}
