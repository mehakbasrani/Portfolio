import "./header.scss"
import logo from "./logo2.png"




export default function Header({menuOpen, setmenuOpen}) {
  return (
    <div className ={"header " + (menuOpen && "active")}>
      <div className="wrapper">
          <div className="left">
          <a href="#intro">
              <img src={logo} alt="" width ="70px" height ="70px"/>
          </a>
          </div>
          <div className="right">
                <div className = "hamburger" onClick ={()=>setmenuOpen(!menuOpen)}>
                  <span  className="line1"></span>
                  <span  className="line2"></span>
                  <span  className="line3"></span>
                </div>
          </div>
      </div>
    </div>
  )
}
