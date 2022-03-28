import projetos from './projetos.scss';
import { BsDashLg } from "react-icons/bs";
import nlwtogether from "../../Assets/print-nlwtog.png"
import devfinances from "../../Assets/devfinances.png"
import wisegoat from "../../Assets/wisegoat.png"
import codar from "../../Assets/codar.png"
import amazinggraph from "../../Assets/amazingGraph.png"
import relogio from "../../Assets/relogio.png"


const data = [
    {
        id: "1",
        projeto: "WonderWoman",
        descricao: "Salão de beleza", 
        link: "https://ectorcunha.github.io/WonderWoman/",
        image: nlwtogether
    },
    {
        id: "2",
        projeto: "Dev.Finances", 
        descricao: "Simulação de carteira",
        link: "https://ectorcunha.github.io/Dev.Finances/",
        image: devfinances
    },
    {
        id: "3",
        projeto: "WiseGoat",
        descricao: "Peça seu conselho",
        link: "https://ectorcunha.github.io/wisegoat/",
        image: wisegoat
    },
    {
        id: "4",
        projeto: "Codar",
        descricao: "Alavanque seu negócio", 
        link: "https://ectorcunha.github.io/codar/",
        image: codar
    },
    {
        id: "5",
        projeto: "AmazingGraph", 
        descricao: "Create amazing graphics",
        link: "https://ectorcunha.github.io/Amazing-Graph/",
        image: amazinggraph
    },
    {
        id: "6",
        projeto: "Relógio",
        descricao: "Relógio Analógico", 
        link: "https://ectorcunha.github.io/Rel-gio/",
        image: relogio
    },
    
]

export default function Projetos(){
    return (
        <section data-aos="fade-up" data-aos-duration="1500" id="projetos" className='projetos'>
            <hr></hr>
         <div className='titulo'>  
            <h2 className='info'>Meus Projetos</h2>
            <p>Aqui estão os meus projetos relevantes no qual construí 
            nos ultimos meses com as tecnologias: HTML, CSS/SASS e ReactJs com algumas bibliotecas. </p>
            <BsDashLg className='traco' size={50}/>
         </div> 

         <div className='cards'>
             <ul>
                {data.map(({image, projeto, descricao, link})=>(
                     <a href={link} target="_blank">
                     <li className='card' >
                     <img src={image}/>
                     <h3>{projeto}</h3>
                     <p>{descricao}</p>
                </li>
                </a>
                ))}
                
            </ul>
         </div>

         <hr></hr>

        </section>
    )
}