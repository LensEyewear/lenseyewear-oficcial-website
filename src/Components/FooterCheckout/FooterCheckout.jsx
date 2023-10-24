import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import LogoImg from '../../assets/images/logo-color.png'
import "./footerCheckout.css"

export function FooterCheckout() {
    const date = new Date().getFullYear();
    return (
        <div className="FooterCheckout">
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