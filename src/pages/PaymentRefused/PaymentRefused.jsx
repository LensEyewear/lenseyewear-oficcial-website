
import "./paymentRefused.css"
import Navbar from "../../Components/NavBarTop/Navbar";
import { FooterCheckout } from "../../Components/FooterCheckout/FooterCheckout";
import Check from '../../assets/images/check03.png'
import img1 from "../../assets/images/armações/Feminino/ARXf00001/ARXf00001x2.jpg";
import img2 from "../../assets/images/armações/Feminino/ARXf000014/ARXf000014x8.jpg";
import img3 from "../../assets/images/armações/Masculino/ARXm00005/ARXm00008x4.jpg";
import img4 from "../../assets/images/armações/Masculino/ARXm00007/ARXm00007.x9.jpg";
import { TopCheckOut } from "../../Components/TopCheckOut/TopCheckOut";
import {AiFillCloseCircle} from "react-icons/ai"

export function PaymentRefused() {
    return (
        <div className="PaymentRefused">
            <TopCheckOut Check={Check} />
            
            <div className="resumePaymentRefused">
                <div className="textRefused">

                    <AiFillCloseCircle />
                <h2>PAGAMENTO RECUSADO</h2>

                <p>Seu pagamento foi recusado pela instituição financeira.
                    <br />
                    Entre em contato com sua instituição financeira ou tente outro meio de pagamento.
                    <br />
                    <br />
                    Qualquer dúvida entre em contato:
                    <br />
                    Tel.: (11) 9XXXX-XXXX 
                        <br />
                     contato@lenseweyear.com.br
                    
                </p>
                </div>

                <div className="buttonsPaymentRefused">
                    <button className="btn1"> Voltar para o site</button>
                    <button className="btn2"> Ir para meus pedidos</button>
                </div>
            </div>

            <FooterCheckout />
        </div>
    )
}