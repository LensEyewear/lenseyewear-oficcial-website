import "./notFound.css";
import logo from "../../assets/images/logo-color.png";
import bag from "../../assets/SVG/404.svg";
import { useState } from "react";

export function NotFound() {
    const Local = localStorage.getItem("lenseyewear");
    const user = JSON.parse(Local);

    const date = new Date().getFullYear();

    const [typeAccount, setTypeAccount] = useState("Pessoa Jurídica");

    function selectTypeAccount(data) {
        setTypeAccount(data);
    }
    return (
        <div className="NotFound">

            <div className="sections">
           
                <div className="sectionNotFound">
                <a href="/">
                <img src={logo} alt="" />
                </a>

                        <div className="form">
                            <div className="image">
                                <img src={bag} alt=""/>
                            </div>
                        <h3>Página ou recurso não encontrado</h3>
                        <p>Não foi possível encontrar a página ou recurso solicitado.
                            <br />
                            Tente novamente mais tarde ou busque por uma página ou recurso válido
                        </p>


  
                            <a href={
                                user !== null ?
                                "/minha-conta/meus-dados"
                                :
                                "/entrar"} className="btnForm">Ir para minha conta</a>
                            <a href="/" className="Link">Voltar para o site</a>
                        </div>

                        <p>Lens Eweyear &copy; {date}</p>
                </div>



            </div>

        </div>
    )
}