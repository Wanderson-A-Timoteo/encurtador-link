import "./menu.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      <a
        className="social"
        href="https://www.linkedin.com/in/wanderson-a-timoteo/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin color="#FFF" size={24} />
      </a>

      <a
        className="social"
        href="https://github.com/Wanderson-A-Timoteo/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub color="#FFF" size={24} />
      </a>
      <Link className="menu-item" to="/links">
        Meus links
      </Link>
    </div>
  );
}
