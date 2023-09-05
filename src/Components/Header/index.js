import './header.scss';
import { RiCodeView } from "react-icons/ri";

export default function Header(){

    function scroll(id){
        document.getElementById(id).scrollIntoView();
    }

    return (
        <header id='header'>
            <RiCodeView className='logo' size={70} alt="Logo do Site - Uma mala de mão"/>
            <nav>
                <ul>
                    <a href='#home'><li onClick={() => scroll("home")} >Home</li></a>
                    <a href='#projetos'><li onClick={() => scroll("projetos")}>Projetos</li></a>
                    <a href='#sobre'><li onClick={() => scroll("sobre")}>Sobre</li></a>
                    <a href='https://drive.google.com/file/d/1spclkBtMm--PUWeJuP77WEnKLz3xQEg5/view?usp=sharing' target='_blank' rel="noreferrer"><span>Curriculo PT</span></a>
                    <a href='https://drive.google.com/file/d/1HVhlOwdHrHYGpJVJhYwxfkFgGqG2wgjB/view?usp=sharing' target='_blank' rel="noreferrer"><span>Curriculo EN</span></a>
             </ul>
            </nav>

        </header>
    )
}