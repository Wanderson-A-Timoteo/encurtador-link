import { FiLink } from "react-icons/fi";
import "./home.css";

export default function Home() {
  return (
    <div className="container-home">
      <div className="logo">
        <img src="/Logo.svg" alt="Encurtador de Links Logo" />
        <h1>Encurtador de Links</h1>
        <span>Cole seu link para encurtar 👇</span>
      </div>
      <div className="area-input">
        <div>
          <FiLink size={24} color="#FFF" />
          <input type="text" placeholder="Cole seu link aqui" />
        </div>
        <button>Gerar link</button>
      </div>
    </div>
  );
}
