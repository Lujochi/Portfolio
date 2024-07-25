import React, {useState} from "react";

import "./Header.css"

const Header: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  }

  const handleLinkClick = () => {
    setIsChecked(false)
  } 

  return (
    <header>
      <div className="logo">
        <a href="/">
          <img src="../src/assets/logo/logoFull.png" alt="Logo" />
        </a>
      </div>
      <nav>
        <input type="checkbox" name="menu-hamburger" id="menu-hamburger" checked={isChecked} onChange={handleCheckboxChange}/>
        <label htmlFor="menu-hamburger">
          <div className="menu">
            <span className="hamburger"></span>
          </div>
        </label>
        <ul>
          <li><a href="#AboutPage" onClick={handleLinkClick}>Sobre</a></li>
          <li><a href="#SkillPage" onClick={handleLinkClick}>Habilidades</a></li>
          <li><a href="#ServicesPage" onClick={handleLinkClick}>Serviços</a></li>
          <li><a href="#ProjectsPage" onClick={handleLinkClick}>Projetos</a></li>
          <li><a href="#ContactPage" onClick={handleLinkClick}>Contato</a></li>
          <li><a href="#ContactPage" className="button-hire" onClick={handleLinkClick}>Contrate Me</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
