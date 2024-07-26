import "./Skill.css";

const Skill = () => {
  return (
    <section id="SkillPage">
      <div className="skills-title">
        <h2>Habilidades</h2>
      </div>
      <div className="carousel">
        <div className="carousel-content">
          <div className="cards card-0" data-index="0">
            <h3>Java Script</h3>
            <img
              src="../src/assets/img/JavaScript-logo.png"
              alt="JavaScript logo"
            />
            <div className="description">
              <h4>Descrição</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                iusto, impedit accusamus sunt tempora unde quidem veniam nihil
                voluptate saepe molestiae temporibus ullam quaerat esse ut non
                atque? Eveniet,
              </p>
            </div>
          </div>
          <div className="cards card-1" data-index="1">
            <h3>Css</h3>
            <img src="../src/assets/img/Css-logo.png" alt="CSS 3 logo" />
            <div className="description">
              <h4>Descrição</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam tenetur ab ad, dolorem repellendus exercitationem odio
                maxime tempora. Magni reprehenderit, pariatur enim
                exercitationem omnis explicabo quidem perferendis vitae aperiam.
                Tempora.
              </p>
            </div>
          </div>
          <div className="cards card-2" data-index="2">
            <h3>Html</h3>
            <img src="../src/assets/img/Html-logo.png" alt="HTML 5 logo" />
            <div className="description">
              <h4>Descrição</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto vero vel amet odio earum voluptatibus? Illum
                necessitatibus sint quam beatae unde fugiat adipisci accusamus.
                Illum fugiat qui laboriosam nam natus.
              </p>
            </div>
          </div>
          <div className="cards card-3" data-index="3">
            <h3>React</h3>
            <img src="../src/assets/img/React-logo.jpg" alt="React logo" />
            <div className="description">
              <h4>Descrição</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corporis autem quidem nisi odit aliquam sed aperiam assumenda,
                delectus minus tempora magni! Provident repudiandae adipisci,
                magnam placeat est asperiores facilis tenetur.
              </p>
            </div>
          </div>
          <div className="cards card-4" data-index="4">
            <h3>TypeScript</h3>
            <img
              src="../src/assets/img/TyoeScript-logo.png"
              alt="TypeScript logo"
            />
            <div className="description">
              <h4>Descrição</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
                quod voluptates expedita recusandae, ratione fugit, sapiente
                pariatur possimus sint laudantium perspiciatis praesentium
                tempora illum sunt, reiciendis maiores corrupti explicabo
                similique.
              </p>
            </div>
          </div>
          <div className="cards card-5" data-index="5">
            <h3>Git</h3>
            <img src="../src/assets/img/Git-logo.png" alt="Git logo" />
            <div className="description">
              <h4>Descrição</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                expedita laudantium sequi rerum saepe ratione earum illo
                laboriosam tempore culpa veritatis quia voluptate, eveniet ad ab
                vero? Expedita, exercitationem beatae.
              </p>
            </div>
          </div>
          <div className="cards card-6" data-index="6">
            <h3>GitHub</h3>
            <img src="../src/assets/img/GitHub-logo.png" alt="GitHub logo" />
            <div className="description">
              <h4>Descrição</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                culpa laborum similique. Doloremque ducimus quo cum veniam
                nostrum voluptatum sunt repudiandae explicabo fugiat iusto
                deserunt sapiente, expedita accusamus. Porro, optio.
              </p>
            </div>
          </div>
          <div className="cards card-7" data-index="7">
            <h3>Jest</h3>
            <img src="../src/assets/img/Jest-logo.png" alt="Jest logo" />
            <div className="description">
              <h4>Descrição</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                amet id nostrum atque reiciendis! Voluptatum eaque fuga quas
                reiciendis perferendis, nisi facilis cupiditate veritatis saepe
                tempora sequi eveniet ab atque!
              </p>
            </div>
          </div>
          <div className="cards card-8" data-index="8">
            <h3>Figma</h3>
            <img src="../src/assets/img/Figma-logo.png" alt="Figma logo" />
            <div className="description">
              <h4>Descrição</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eveniet neque laborum maxime esse nulla delectus consectetur
                impedit sed fuga architecto, qui autem eaque aperiam cum,
                assumenda molestiae iure optio pariatur.
              </p>
            </div>
          </div>
          <div className="controlls">
            <button
              className="btn-arrow button-previous"
            >
              <i className="ri-arrow-left-fill"></i>
            </button>
            <button className="btn-arrow button-next">
              <i className="ri-arrow-right-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
