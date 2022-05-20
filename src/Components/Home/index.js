import './home.scss';
import foto from '../../Assets/ector.png';
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs';

export default function Home(){
    return (
        <main data-aos="fade-up" data-aos-duration="1000" id='home'>
            <div className='chamada'>
                <div className='icones'>
                    <a href="https://facebook.com" target="_blank" rel='noreferrer'><BsFacebook className='icone icone-face'  size={30}/></a>
                    <a href="https://github.com/EctorCunha" target="_blank" rel='noreferrer'><BsGithub className='icone icone-github' size={30}/></a>
                    <a href="https://instagram.com" target="_blank" rel='noreferrer'><BsInstagram className='icone icone-insta' size={30}/></a>
                    <a href="https://www.linkedin.com/in/ector-cunha-b7892411a/" target="_blank" rel='noreferrer'><BsLinkedin className='icone icone-linkedin' size={30}/></a>
                    <a href="https://youtube.com" target="_blank" rel='noreferrer'><BsYoutube className='icone icone-youtube' size={30}/></a>
                </div>

                <h1 className='meu-nome' >Olá, eu sou Ector Cunha</h1>
                <p>Eu sou Ector, desenvolvedor web com experiência
                  em projetos pessoais e de estudo. Sinta-se à vontade para desfrutar deste ambiente.</p>

            </div>

            <img src={foto} alt='foto'/>

        </main>
    )
}