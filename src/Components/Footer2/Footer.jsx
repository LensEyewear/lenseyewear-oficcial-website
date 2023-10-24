import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import LogoImg from '../../assets/images/Logo-color.png'
import "./footer.css"

export function Footer() {
    const date = new Date().getFullYear();
    return (
        <div className="Footer">
             <div className="image">
                <a href='/'>
                <img src={LogoImg} alt="Logo Sua Chave" />
                </a>

                <div className="icons">
                <a className="unicIconMenu" href="https://instagram.com/powerstartenergy" target='_Blank'><IoLogoInstagram /></a>
                <a className="unicIconMenu" href="https://facebook.com/powerstartenergy" target='_Blank'><IoLogoFacebook /></a>
                <a className="unicIconMenu" href="https://linkedin.com/company/power-start-energy" target='_Blank'><IoLogoLinkedin /></a>
            </div>
            </div>

            <div className="top">

                <div className="menu">
                    <h4>INSTITUCIONAL</h4>
                    <a href="#">Conheça a Lens Eweyear</a>
                    <a href="#">Fale conosco</a>
                </div>
                <div className="menu">
                    <h4>MINHA CONTA</h4>
                    <a href="#">Meus dados</a>
                    <a href="#">Fale pedidos</a>
                    <a href="#">Favoritos</a>
                </div>

                <div className="menu">
                    <h4>AJUDA</h4>
                    <a href="#">Política de pagamento</a>
                    <a href="#">Trocas e devoluções</a>
                    <a href="#">Nossas lojas</a>
                </div>

            </div>

            <div className="content">
                <div className="asside">
                    <h3>FORMAS DE PAGAMENTO</h3>
                    <h3>Loja 100% Segura</h3>
                </div>

            <div className="address">
                <h5><span>Razão Social:</span> Lens Eweyear - CNPJ: 00.000.000/0000-00</h5>
                <h5><span>Endereço:</span> Rua Luis Pinto Fláquer, 365 - Centro - Santo André | CEP: 09010-090</h5>
            </div>
            </div>



            <div className="copy">
            <h5>© Lens Eyewear {date}. Todos os direitos reservados</h5>
            </div>

        </div>
    )
}