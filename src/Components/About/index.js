import sobre from './sobre.scss';
import foto from '../../Assets/esportivo-cortado.png';
import { BsDashLg, BsFillArrowUpCircleFill } from "react-icons/bs";
import BackToTop from "react-back-to-top-button";

export default function Sobre(){

    return (
        
        <section data-aos="fade-up" data-aos-duration="1500" id='sobre' className='sobre'>
            <div className='titulo-sobre'>  
                <h2 className='info-sobre'>Sobre mim</h2>
                <p>Oi, sou o Ector, desenvolvedor web. Gosto de esportes no geral, 
                jogos de computador e amo estar na natureza. Procuro inspiração para inovar em tudo que faço.</p>
                 <BsDashLg className='traco' size={50}/>
            </div> 

            <div className='subtitulo-sobre'>  

                <img src={foto}/>

                <div className='sobre-info' >
                    <h2 className='subinfo-sobre'>Oi, povo!</h2>
                    <p className='texto' >Esse projeto consiste na junção do conhecimento adquirito a cerca de 8 meses. Através desse projeto, consegui desenvolver as habilidades técnicas são utilizadas no mercado de trabalho.</p>
                    <p className='texto'>Neste portifólio contém tecnologias e habilidades como ReactJs com o uso de algumas bibliotecas como Material UI, AOS - Animate on Scroll Library, Back to top e Sass na estilização.</p>

                   

                </div>

            </div> 
            <BackToTop
        showOnScrollUp
        showAt={100}
        speed={1500}
        easing="easeInOutQuint"
      >

        <span><BsFillArrowUpCircleFill  className='arrow'/></span>
        
      </BackToTop>

      <div className='sociais-footer'>

        <div className='social-footer'>
            <div className='contatos'>
                 <h4  className='contato'>Nome:</h4>
                <span>Ector Cunha</span>
            </div>


            <div className='contatos'>
                 <h4  className='contato contato2'>Fone:</h4>
                <span>(81) 99861-3646</span>
            </div>
        </div>

        <div className='social-footer'>
            <div className='contatos'>
                 <h4  className='contato'>Email:</h4>
                <span>ectorvccunha@outlook.com</span>
            </div>


            <div className='contatos '>
                <h4  className='contato contato2'>Linkedin:</h4>
            <span>Linkedin/EctorCunha</span>
            </div>

        </div>

        </div>

        <hr></hr>

        <p className='copy'>© Copyright 2022 | Ector Cunha</p>

        </section>
    )
}