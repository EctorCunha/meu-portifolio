import "./projetos.scss";
import { BsDashLg } from "react-icons/bs";
import nlwtogether from "../../Assets/print-nlwtog.png";
import devfinances from "../../Assets/devfinances.png";
import wisegoat from "../../Assets/wisegoat.png";
import dh_money_house from "../../Assets/dh_money_house.png";
import gameNight from "../../Assets/gameNight.png";
import casinha from "../../Assets/casinha.png";

const data = [
  {
    id: "1",
    projeto: "WonderWoman",
    descricao: "Salão de beleza",
    link: "https://ectorcunha.github.io/WonderWoman/",
    repo: "https://github.com/EctorCunha/WonderWoman",
    image: nlwtogether,
  },
  {
    id: "2",
    projeto: "Dev.Finances",
    descricao: "Simulação de carteira",
    link: "https://ectorcunha.github.io/Dev.Finances/",
    repo: "https://github.com/EctorCunha/Dev.Finances",
    image: devfinances,
  },
  {
    id: "3",
    projeto: "WiseGoat",
    descricao: "Peça seu conselho",
    link: "https://ectorcunha.github.io/wisegoat/",
    repo: "https://github.com/EctorCunha/wisegoat",
    image: wisegoat,
  },
  {
    id: "4",
    projeto: "GameNight",
    descricao: "E-commerce de jogos de tabuleiro",
    link: "https://game-night-ecommerce-frontend.vercel.app/",
    repo: "https://github.com/EctorCunha/CTD-ecommerce",
    image: gameNight,
  },
  {
    id: "5",
    projeto: "Casinha",
    descricao: "E-commerce de Tiny House (fora do ar)",
    link: "https://pdrmenezes.notion.site/CASINHA-documenta-o-714eedbc9d53450cafe72a9868a5a96c",
    repo:
      "https://github.com/EctorCunha/Frontend-Casinha",
    image: casinha,
  },
  {
    id: "6",
    projeto: "DH Money House",
    descricao: "Carteira Digital",
    link: "https://dh-money.vercel.app/",
    repo: "https://github.com/EctorCunha/dh-money",
    presentation: "https://www.canva.com/design/DAFsRyzcipA/46yeGou6_veD7a2KxX-Kvw/view?utm_content=DAFsRyzcipA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    image: dh_money_house,
  },
];

export default function Projetos() {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1500"
      id="projetos"
      className="projetos"
    >
      <hr></hr>
      <div className="titulo">
        <h2 className="info">Projetos</h2>
        <p>
          Aqui estão os meus projetos relevantes no qual construí nos ultimos
          meses com as tecnologias: HTML, CSS/SASS, Material UI, Chacka UI,
          ReactJs, NextJS e outras tecnologias.{" "}
        </p>
        <br></br>
        <a href="https://github.com/EctorCunha">
          <span className="linkGithub">
            {" "}
            Para mais projetos: Github/EctorCunha
          </span>
        </a>
        <BsDashLg className="traco" size={50} />
      </div>

      <div className="cards">
        <ul>
          {data.map(({ id, image, projeto, descricao, link, repo, presentation }) => (
            <div key={id}>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                <li className="card">
                  <img src={image} alt="foto" />
                  <h3>{projeto}</h3>
                  <p>{descricao}</p>
                </li>
              </a>
                <a href={repo} className="linkRepositorio">Repositório</a>
                <br></br>
                {
                  presentation ? (<><a  href={presentation} className="linkRepositorio">Apresentação do projeto</a><br/></>) : null
                }
                <br></br>
            </div>
          ))}
        </ul>
      </div>

      <hr></hr>
    </section>
  );
}
