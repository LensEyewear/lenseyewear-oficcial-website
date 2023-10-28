import "./signUp.css";
import { Footer } from "../../Components/Footer2/Footer";
import Navbar from "../../Components/NavBarTop/Navbar";
import { TopSign } from "../../Components/TopSign/TopSign";
import logo from "../../assets/images/logo-color.png";
import { IoEyeOffOutline } from "react-icons/io5";
import { useState } from "react";

export function SignUp() {
    const date = new Date().getFullYear();

    const [typeAccount, setTypeAccount] = useState("Pessoa Jurídica");

    function selectTypeAccount(data) {
        setTypeAccount(data);
    }
    return (
        <div className="SignUp">

            <div className="sections">
            <div className="imageSignUp"></div>
            
                <div className="sectionSignUp">
                <a href="/">
                <img src={logo} alt="" />
                </a>

                        <div className="form">
                        <h3>Cadastre-se</h3>
                        <div className="buttonsSelect">
                            <button className={typeAccount == "Pessoa Física" ? "btnSelect1" : "btnSelect2"} onClick={ () => selectTypeAccount("Pessoa Física")}>Pessoa Física</button>
                            <button className={typeAccount == "Pessoa Jurídica" ? "btnSelect1" : "btnSelect2"} onClick={ () => selectTypeAccount("Pessoa Jurídica")}>Pessoa Jurídica</button>
                        </div>
                        {
                            typeAccount == "Pessoa Física" ?
                            <>
                            <input type="text" placeholder="Nome Completo"/>
                            <input type="text" placeholder="Nome Social"/>
                            </>
                            :
                            <>
                            <input type="text" placeholder="Razão Social"/>
                            <input type="text" placeholder="Nome Fantasia"/>
                            </>

                        }
                            <div className="double">
                            {
                            typeAccount == "Pessoa Física" ?
                            <input type="text" placeholder="CPF"/>
                            :
                            <input type="text" placeholder="CNPJ"/>
                        }

                            <input type="text" placeholder="Whatsapp"/>
                            </div>
                            <input type="text" placeholder="E-mail"/>
                            <div className="passwords">
                                <div className="pass">                                    
                            <input type="password" placeholder="Senha"/>
                                  <button><IoEyeOffOutline /></button>  
                                </div>
                                <div className="pass">
                            <input type="password" placeholder="Confirmação de Senha"/>
                                <button><IoEyeOffOutline /></button>  
                                </div>
                            </div>
  
                            <button>Cadastrar</button>
                            <a href="/entrar" className="Link">Fazer login</a>
                        </div>

                        <p>Lens Eweyear &copy; {date}</p>
                </div>



            </div>

        </div>
    )
}