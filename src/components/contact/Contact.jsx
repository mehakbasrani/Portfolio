import "./contact.scss"
import shake from "./shake.svg"
import linkedin from "./logos/linkedin.png";
import github from "./logos/github.png";
import instagram from "./logos/instagram.jpeg";
import emailjs from "emailjs-com"

export default function Contact() {

  const date = new Date().getFullYear();

  const submitForm = (e)=>{
      e.preventDefault();

      emailjs.sendForm("service_rdkw18h",
       "template_phlammg", e.target ,"P-oivXsUidldFqMbZ").
       then(res=>{console.log(res);}).
       catch(err=>{console.log(err);});
  }

  return (
    <div className ="contact" id ="contact">
      <div className="left">
         <img src={shake} alt="" />
         <h5>Thank You for stopping by !</h5>
         <p>Whether you have a question, 
            talk about a project collaboration, 
            brainstorming or just want to say hi, my inbox is always open.</p>
         <div className="imgContainer">
           <a href="https://www.linkedin.com/in/mehak-basrani-b444941a4/">
           <img src={linkedin} alt="" />
           </a>
           <a href="https://github.com/mehakbasrani">
           <img src={github} alt="" />
           </a>
           <a href="https://www.instagram.com/rifff__life__23/">
             <img src={instagram} alt="" />
             </a>
         </div>
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit ={submitForm}>
          <input name ="email" type="text" placeholder="Email" />
          <textarea name="message" placeholder ="Message"></textarea>
          <button type ="submit">Send</button>
          <div className="copyright">
            <p>&copy;{date}
             <a href="https://github.com/mehakbasrani">Mehak</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

