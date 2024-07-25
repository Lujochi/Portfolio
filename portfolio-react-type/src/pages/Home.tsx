import "./Home.css";

const Home = () => {
  return (
    <section id="HomePage">
      <div className="main-text-box">
        <div className="main-text">
          <h2>Eu sou Luan</h2>
          <h1>
            Desenvolvedor Web <br />
            Front-End
          </h1>
          <p>
            Crio interfaces atraentes e intuitivas, garantindo uma experiência
            de usuário impecável através de design e programação inovadores.
          </p>
        </div>
        <div className="home-links">
          <div className="download-cv">
            <a
              href="../../public/Curriculo.pdf"
              download
              className="download-button"
            >
              Baixar CV
              <i className="ri-download-2-line"></i>
            </a>
          </div>
          <div className="social-links">
            <ul>
              <li>
                <a href="https://www.instagram.com/lujochii/" target="_blank">
                  <i className="ri-instagram-line"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/lujochi/" target="_blank">
                  <i className="ri-linkedin-fill"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/Lujochi" target="_blank">
                  <i className="ri-github-fill"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="hero-box">
        <img src="../src/assets/hero/hero.jpg" alt="Foto de perfil" />
      </div>
    </section>
  );
};

export default Home;
