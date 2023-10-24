
import "./cart.css"
import Navbar from "../../Components/NavBarTop/Navbar";
import { FooterCheckout } from "../../Components/FooterCheckout/FooterCheckout";
import Check from '../../assets/images/check01.png'
import img1 from "../../assets/images/armações/Feminino/ARXf00001/ARXf00001x2.jpg";
import img2 from "../../assets/images/armações/Feminino/ARXf000014/ARXf000014x8.jpg";
import img3 from "../../assets/images/armações/Masculino/ARXm00005/ARXm00008x4.jpg";
import img4 from "../../assets/images/armações/Masculino/ARXm00007/ARXm00007.x9.jpg";
import { TopCheckOut } from "../../Components/TopCheckOut/TopCheckOut";

export function Cart() {
    return (
        <div className="Cart">
            <TopCheckOut Check={Check}/>
            
            <div className="resumeCart">
                <h3>CARRINHO DE COMPRAS</h3>

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

                <div className="ItensCartList">
                    <div className="ItensCartListOne">
                   <img src={img2} alt="" />
                   <h5>Óculos Sunglass Rock Solid Nude só armação</h5>
                    </div>
                    <div className="ItensCartListUnic">
                    <h5>R$ 199.99</h5>
                    </div>
                    <div className="ItensCartListUnic">
                    <button>+</button>
                    <h5>1</h5>
                    <button>-</button>
                    </div>
                    <div className="ItensCartListUnic">
                    <h5>R$ 199.99</h5>
                    </div>
                    <div className="ItensCartListUnic">
                    <button>x</button>
                    </div>
                </div>
                
                <div className="ItensCartList">
                    <div className="ItensCartListOne">
                   <img src={img3} alt="" />
                   <h5>Óculos Sunglass Rock Solid Nude só armação</h5>
                    </div>
                    <div className="ItensCartListUnic">
                    <h5>R$ 199.99</h5>
                    </div>
                    <div className="ItensCartListUnic">
                    <button>+</button>
                    <h5>1</h5>
                    <button>-</button>
                    </div>
                    <div className="ItensCartListUnic">
                    <h5>R$ 199.99</h5>
                    </div>
                    <div className="ItensCartListUnic">
                    <button>x</button>
                    </div>
                </div>
                <div className="ItensCartList">
                    <div className="ItensCartListOne">
                   <img src={img4} alt="" />
                   <h5>Óculos Sunglass Rock Solid Nude só armação</h5>
                    </div>
                    <div className="ItensCartListUnic">
                    <h5>R$ 199.99</h5>
                    </div>
                    <div className="ItensCartListUnic">
                    <button>+</button>
                    <h5>1</h5>
                    <button>-</button>
                    </div>
                    <div className="ItensCartListUnic">
                    <h5>R$ 199.99</h5>
                    </div>
                    <div className="ItensCartListUnic">
                    <button>x</button>
                    </div>
                </div>
                <div className="ItensCartList">
                    <div className="ItensCartListOne">
                   <img src={img1} alt="" />
                   <h5>Óculos Sunglass Rock Solid Nude só armação</h5>
                    </div>
                    <div className="ItensCartListUnic">
                    <h5>R$ 199.99</h5>
                    </div>
                    <div className="ItensCartListUnic">
                    <button>+</button>
                    <h5>1</h5>
                    <button>-</button>
                    </div>
                    <div className="ItensCartListUnic">
                    <h5>R$ 199.99</h5>
                    </div>
                    <div className="ItensCartListUnic">
                    <button>x</button>
                    </div>
                </div>

                </div>


                <div className="buttonsCart">
                    <button className="btn1"> Continuar comprando</button>
                    <button className="btn2"> Ir para pagamento</button>
                </div>
            </div>

            <FooterCheckout />
        </div>
    )
}