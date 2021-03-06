import { useState } from "react";
import { FiLink } from "react-icons/fi";
import "./home.css";

import Menu from "./../../components/menu/index";
import LinkItem from "./../../components/LinkItem/index";

import api from "../../services/api";
import { saveLink } from "../../services/storeLinks";

export default function Home() {
  const [link, setLink] = useState("");
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  async function handleShortLink() {
    try {
      const response = await api.post("/shorten", { long_url: link });
      setData(response.data);
      setShowModal(true);
      saveLink("@encurtalink", response.data);
      setLink("");
    } catch {
      alert("Ops parece que algo deu errado!");
      setLink("");
    }
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
      {showModal && (
        <LinkItem closeModal={() => setShowModal(false)} content={data} />
      )}
    </div>
  );
}
