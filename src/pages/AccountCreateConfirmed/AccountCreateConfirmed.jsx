import "./accountCreateConfirmed.css";
import logo from "../../assets/images/logo-color.png";
import bag from "../../assets/SVG/bag.svg";
import { useState } from "react";

export function AccountCreateConfirmed() {
    const date = new Date().getFullYear();

    const [typeAccount, setTypeAccount] = useState("Pessoa Jurídica");

    function selectTypeAccount(data) {
        setTypeAccount(data);
    }
    return (
        <div className="AccountCreateConfirmed">

            <div className="sections">
            <div className="imageAccountCreateConfirmed"></div>
            
                <div className="sectionAccountCreateConfirmed">
                <a href="/">
                <img src={logo} alt="" />
                </a>

                        <div className="form">
                            <div className="image">
                                <img src={bag} alt=""/>
                            </div>
                        <h3>Cadastro criado com sucesso</h3>
                        <p>Parabéns. Sua conta foi criada com sucesso. <br />
                        Acesse seus dados, pedidos, endereços e favoritos com facilidade.<br />
                        Clique no botão abaixo e acesse sua conta
                        </p>


  
                            <a href="/" className="btnForm">Ir para minha conta</a>
                            <a href="/" className="Link">Voltar para o site</a>
                        </div>

                        <p>Lens Eweyear &copy; {date}</p>
                </div>



            </div>

        </div>
    )
}