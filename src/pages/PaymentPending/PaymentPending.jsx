
import "./paymentPending.css"
import Navbar from "../../Components/NavBarTop/Navbar";
import { FooterCheckout } from "../../Components/FooterCheckout/FooterCheckout";
import Check from '../../assets/images/check03.png'
import img1 from "../../assets/images/armações/Feminino/ARXf00001/ARXf00001x2.jpg";
import img2 from "../../assets/images/armações/Feminino/ARXf000014/ARXf000014x8.jpg";
import img3 from "../../assets/images/armações/Masculino/ARXm00005/ARXm00008x4.jpg";
import img4 from "../../assets/images/armações/Masculino/ARXm00007/ARXm00007.x9.jpg";
import { TopCheckOut } from "../../Components/TopCheckOut/TopCheckOut";
import {GiSandsOfTime} from "react-icons/gi"

export function PaymentPending() {
    return (
        <div className="PaymentPending">
            <TopCheckOut Check={Check} />
            
            <div className="resumePaymentPending">
                <div className="textPending">

                    <GiSandsOfTime />
                <h2>PAGAMENTO PENDENTE</h2>

                <p>Seu pagamento foi recebido mas ainda em análise pela instituição financeira.
                    <br />
                    Fique ligado na aba "Meus pedidos" para acompanhar o status de pagamento de seu pedido.
                    <br />
                    <br />
                    Qualquer dúvida entre em contato:
                    <br />
                    Tel.: (11) 9XXXX-XXXX 
                        <br />
                     contato@lenseweyear.com.br
                    
                </p>
                </div>

                <div className="buttonsPaymentPending">
                    <button className="btn1"> Voltar para o site</button>
                    <button className="btn2"> Ir para meus pedidos</button>
                </div>
            </div>

            <FooterCheckout />
        </div>
    )
}