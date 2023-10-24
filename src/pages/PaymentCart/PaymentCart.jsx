
import "./paymentCart.css"
import Navbar from "../../Components/NavBarTop/Navbar";
import { FooterCheckout } from "../../Components/FooterCheckout/FooterCheckout";
import Check from '../../assets/images/check02.png'
import img1 from "../../assets/images/armações/Feminino/ARXf00001/ARXf00001x2.jpg";
import img2 from "../../assets/images/armações/Feminino/ARXf000014/ARXf000014x8.jpg";
import img3 from "../../assets/images/armações/Masculino/ARXm00005/ARXm00008x4.jpg";
import img4 from "../../assets/images/armações/Masculino/ARXm00007/ARXm00007.x9.jpg";
import { TopCheckOut } from "../../Components/TopCheckOut/TopCheckOut";

export function PaymentCart() {
    return (
        <div className="PaymentCart">
            <TopCheckOut Check={Check} />
            
            <div className="resumePaymentCart">
                <h3>ENDEREÇO E PAGAMENTO</h3>

                <div className="ListProducts">
                <div className="TitleList">
                    <div className="itensTitleOne">
                    <h4>PRODUTO</h4>
                    </div>
                    <div className="itensTitle">
                    <h4>PREÇO</h4>
                    </div>
                    <div className="itensTitle">
                    <h4>QUANTIDADE</h4>
                    </div>
                    <div className="itensTitle">
                    <h4>TOTAL</h4>
                    </div>
                    <div className="itensTitle">
                    <h4>REMOVER</h4>
                    </div>
                </div>

                <div className="ItensPaymentCartList">
                    <div className="ItensPaymentCartListOne">
                   <img src={img2} alt="" />
                   <h5>Óculos Sunglass Rock Solid Nude só armação</h5>
                    </div>
                    <div className="ItensPaymentCartListUnic">
                    <h5>R$ 199.99</h5>
                    </div>
                    <div className="ItensPaymentCartListUnic">
                    <button>+</button>
                    <h5>1</h5>
                    <button>-</button>
                    </div>
                    <div className="ItensPaymentCartListUnic">
                    <h5>R$ 199.99</h5>
                    </div>
                    <div className="ItensPaymentCartListUnic">
                    <button>x</button>
                    </div>
                </div>
                
                <div className="ItensPaymentCartList">
                    <div className="ItensPaymentCartListOne">
                   <img src={img3} alt="" />
                   <h5>Óculos Sunglass Rock Solid Nude só armação</h5>
                    </div>
                    <div className="ItensPaymentCartListUnic">
                    <h5>R$ 199.99</h5>
                    </div>
                    <div className="ItensPaymentCartListUnic">
                    <button>+</button>
                    <h5>1</h5>
                    <button>-</button>
                    </div>
                    <div className="ItensPaymentCartListUnic">
                    <h5>R$ 199.99</h5>
                    </div>
                    <div className="ItensPaymentCartListUnic">
                    <button>x</button>
                    </div>
                </div>
                <div className="ItensPaymentCartList">
                    <div className="ItensPaymentCartListOne">
                   <img src={img4} alt="" />
                   <h5>Óculos Sunglass Rock Solid Nude só armação</h5>
                    </div>
                    <div className="ItensPaymentCartListUnic">
                    <h5>R$ 199.99</h5>
                    </div>
                    <div className="ItensPaymentCartListUnic">
                    <button>+</button>
                    <h5>1</h5>
                    <button>-</button>
                    </div>
                    <div className="ItensPaymentCartListUnic">
                    <h5>R$ 199.99</h5>
                    </div>
                    <div className="ItensPaymentCartListUnic">
                    <button>x</button>
                    </div>
                </div>
                <div className="ItensPaymentCartList">
                    <div className="ItensPaymentCartListOne">
                   <img src={img1} alt="" />
                   <h5>Óculos Sunglass Rock Solid Nude só armação</h5>
                    </div>
                    <div className="ItensPaymentCartListUnic">
                    <h5>R$ 199.99</h5>
                    </div>
                    <div className="ItensPaymentCartListUnic">
                    <button>+</button>
                    <h5>1</h5>
                    <button>-</button>
                    </div>
                    <div className="ItensPaymentCartListUnic">
                    <h5>R$ 199.99</h5>
                    </div>
                    <div className="ItensPaymentCartListUnic">
                    <button>x</button>
                    </div>
                </div>

                </div>


                <div className="buttonsPaymentCart">
                    <button className="btn1"> Voltar</button>
                    <button className="btn2"> Efetuar pagamento</button>
                </div>
            </div>

            <FooterCheckout />
        </div>
    )
}