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
             </ul>
            </nav>

        </header>
    )
}