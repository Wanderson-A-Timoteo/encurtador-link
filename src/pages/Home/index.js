import { useState } from "react";
import { FiLink } from "react-icons/fi";
import "./home.css";
import Menu from "./../../components/menu/index";
import LinkItem from "./../../components/LinkItem/index";

export default function Home() {
  const [link, setLink] = useState("");
  const [showModal, setShowModal] = useState(false);

  function handleShortLink() {
    setShowModal(true);
  }
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
          <input
            type="text"
            placeholder="Cole seu link aqui..."
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <button onClick={handleShortLink}>Gerar link</button>
      </div>
      <Menu />
      {showModal && <LinkItem />}
    </div>
  );
}
