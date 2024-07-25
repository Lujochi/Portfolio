import "./About.css";

const About = () => {
  return (
    <section id="AboutPage">
      <div className="about">
        <h2>Sobre Mim</h2>
        <div className="img-about-hero">
          <img
            src="../src/assets/hero/hero-avatar.png"
            alt="Luan Jose Chiodini"
          />
        </div>
        <div className="text-about">
          <p>
            Prazer, me chamo Luan, tenho 20 anos e moro em Blumenau–SC. Curto
            muito jogos online e sair para se divertir com os amigos. Também
            gosto muito de tecnologias, comecei me interessando pela parte de
            manutenção de hardware e hoje estou aqui, nos códigos. Me apaixonei
            pela área de desenvolvimento, tanto web quanto de jogos, e agora
            estou em busca de oportunidades de crescer e me tornar um grande
            desenvolvedor no mercado.
          </p>
        </div>
      </div>
      <div className="education">
        <div className="time-line">
          <div className="box-content">
            <div className="years">2024-2025</div>
            <h3>Dev-Quest</h3>
            <p>Dev em dobro</p>
          </div>
          <div className="box-content">
            <div className="years">2024-2024</div>
            <h3>Desenvolvedor Front-End</h3>
            <p>Udemy</p>
          </div>
          <div className="box-content">
            <div className="years">2021-2022</div>
            <h3>Curso de Java Script</h3>
            <p>Curso em vídeo</p>
          </div>
          <div className="box-content">
            <div className="years">2020-2021</div>
            <h3>Curso HTML5 e CSS3</h3>
            <p>Curso em vídeo</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
