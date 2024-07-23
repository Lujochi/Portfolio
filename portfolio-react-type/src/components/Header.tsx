import "./Header.css"

const Header = () => {
  return (
    <header>
      <div className="logo">
        <a href="/">
          <img src="../src/assets/logo/logoFull.png" alt="Logo" />
        </a>
      </div>
      <nav>
        <input type="checkbox" name="menu-hamburger" id="menu-hamburger" />
        <label htmlFor="menu-hamburger">
          <div className="menu">
            <span className="hamburger"></span>
          </div>
        </label>
        <ul>
          <li><a href="#AboutPage">Sobre</a></li>
          <li><a href="#SkillPage">Habilidades</a></li>
          <li><a href="#ServicesPage">Serviços</a></li>
          <li><a href="#ProjectsPage">Projetos</a></li>
          <li><a href="#ContactPage">Contato</a></li>
          <li><a href="#ContactPage" className="button-hire">Contrate Me</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
