import "./Header.css"

export default function Header() {
  return (
    <header> 
        <h1>My Portfolio</h1>  
        <nav>
            <ul className="nav-links">
                <li><a className="link" href="#home">Start</a></li>
                <li><a className="link" href="#about">About me</a></li>
                <li><a className="link" href="#projects">Projects</a></li>
                <li><a className="link" href="#skills">Skills</a></li>
                <li><a className="link" href="#contact">Contact</a></li>   
            </ul>
        </nav>
    </header>
  )
}