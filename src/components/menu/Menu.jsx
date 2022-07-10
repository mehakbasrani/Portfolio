import "./menu.scss"

export default function Menu({menuOpen ,setmenuOpen}) {
  return (
    <div className={"menu " +(menuOpen && "active")}> 
      <ul>
          <li onClick= {()=>setmenuOpen(false)}>
              <a href="#intro">Home</a>
          </li>
          <li onClick= {()=>setmenuOpen(false)}>
              <a href="#about">About</a>
          </li>
          <li onClick= {()=>setmenuOpen(false)}>
              <a href="#projects">Projects</a>
          </li>
          <li onClick= {()=>setmenuOpen(false)}>
              <a href="#contact">Contact</a>
          </li>
      </ul>
    </div>
  )
}
