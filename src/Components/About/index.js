import "./sobre.scss";
import foto from "../../Assets/esportivo-cortado.png";
import { BsDashLg, BsFillArrowUpCircleFill } from "react-icons/bs";
import BackToTop from "react-back-to-top-button";

export default function Sobre() {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1500"
      id="sobre"
      className="sobre"
    >
      <div className="titulo-sobre">
        <h2 className="info-sobre">Sobre mim</h2>
        <p>
          Com uma paixão por tecnologia e um compromisso com a excelência, sou
          um Desenvolvedor Frontend com 2 anos de experiência, especializado em
          JavaScript, TypeScript, ReactJS e NextJS. Minha experiência abrange
          uma variedade de competências, incluindo HTML, CSS, Sass, NodeJs, e
          muito mais.
        </p>
        <BsDashLg className="traco" size={50} />
      </div>

      <div className="subtitulo-sobre">
        <img src={foto} alt="foto" />

        <div className="sobre-info">
          <h2 className="subinfo-sobre">Expertise</h2>
          <ul className="texto">
            <li>EF Level 12 CEFR B1 - English Live</li>
            <li>Front End Specialist - Digital Hous</li>
            <li>Professional Developer - Digital House</li>
            <li>Spread Full Stack Developer - DIO</li>
            <li>Cibersecurity Essentials - CISCO</li>
            <li>Scrum Foundation Professional Certificate - Certiprof</li>
          </ul>
          <br></br>
          <h2 className="subinfo-sobre">Educação</h2>
          <ul className="texto">
            <li>HACKONE - Pós Graduação em redes e cibersegurança</li>
            <li>DIGITAL HOUSE - Certified Tech Develope</li>
            <li>ESTÁCIO - Análise e Desenvolvimento de Sistemas</li>
          </ul>
        </div>
      </div>
      <BackToTop
        showOnScrollUp
        showAt={100}
        speed={1500}
        easing="easeInOutQuint"
      >
        <span>
          <BsFillArrowUpCircleFill className="arrow" />
        </span>
      </BackToTop>

      <div className="sociais-footer">
        <div className="social-footer">
          <div className="contatos">
            <h4 className="contato">Nome:</h4>
            <span>Ector Cunha</span>
          </div>

          <div className="contatos">
            <h4 className="contato contato2">Github:</h4>
            <span>Github/EctorCunha</span>
          </div>
        </div>

        <div className="social-footer">
          <div className="contatos">
            <h4 className="contato">Email:</h4>
            <span>ectorvccunha@outlook.com</span>
          </div>

          <div className="contatos ">
            <h4 className="contato contato2">Linkedin:</h4>
            <span>Linkedin/ectorcunha</span>
          </div>
        </div>
      </div>

      <hr></hr>

      <p className="copy">© Copyright 2023 | Ector Cunha</p>
    </section>
  );
}
