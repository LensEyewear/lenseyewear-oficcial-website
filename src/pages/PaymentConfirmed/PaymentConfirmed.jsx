
import "./paymentConfirmed.css"
import Navbar from "../../Components/NavBarTop/Navbar";
import { FooterCheckout } from "../../Components/FooterCheckout/FooterCheckout";
import Check from '../../assets/images/check03.png'
import img1 from "../../assets/images/armações/Feminino/ARXf00001/ARXf00001x2.jpg";
import img2 from "../../assets/images/armações/Feminino/ARXf000014/ARXf000014x8.jpg";
import img3 from "../../assets/images/armações/Masculino/ARXm00005/ARXm00008x4.jpg";
import img4 from "../../assets/images/armações/Masculino/ARXm00007/ARXm00007.x9.jpg";
import { TopCheckOut } from "../../Components/TopCheckOut/TopCheckOut";
import {BsPatchCheckFill} from "react-icons/bs"

export function PaymentConfirmed() {
    return (
        <div className="PaymentConfirmed">
            <TopCheckOut Check={Check} />
            
            <div className="resumePaymentConfirmed">
                <div className="textConfirmed">

                    <BsPatchCheckFill />
                <h2>PAGAMENTO CONFIRMADO</h2>

                <p>Parabéns, seu pagamento foi confirmado!
                    <br />
                    Fique ligado na aba "Meus pedidos" para acompanhar o andamento e entrega do seu produto.
                    <br />
                    <br />
                    Qualquer dúvida entre em contato:
                    <br />
                    Tel.: (11) 9XXXX-XXXX 
                        <br />
                     contato@lenseweyear.com.br
                    
                </p>
                </div>

                <div className="buttonsPaymentConfirmed">
                    <button className="btn1"> Voltar para o site</button>
                    <button className="btn2"> Ir para meus pedidos</button>
                </div>
            </div>

            <FooterCheckout />
        </div>
    )
}