import React from 'react'


export default function Card(props) {
  console.log(props);
  return (
    <> 
       <div className="card">
         <img src= {props.imgsrc} alt={props.alt} />
         <h2>{props.title}</h2>
         <h6>{props.quotes}</h6>
         <p>{props.description}</p>
         {/* <div className="languages">
           <div className="lang">{props.lang1}</div>
           <div className="lang">{props.lang2}</div>
           <div className="lang">{props.lang3}</div>
         </div> */}
         <a href={props.link}>
            <button>READ MORE</button>
          </a>
         </div>
     
    </>
  )
}
