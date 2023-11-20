import "./recoverPasswordNew.css";
import { Footer } from "../../Components/Footer2/Footer";
import Navbar from "../../Components/NavBarTop/Navbar";
import { TopSign } from "../../Components/TopSign/TopSign";
import logo from "../../assets/images/logo-color.png";
import { useContext, useState } from "react";
import { IoEyeOffOutline } from "react-icons/io5";
import { AuthContext } from "../../contexts/Auth";

export function RecoverPasswordNew() {
    const date = new Date().getFullYear();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {loginSession} = useContext(AuthContext);

    function handleLogin(e) {
        e.preventDefault();
        loginSession({email, password})
    }

    return (
        <div className="RecoverPasswordNew">

            <div className="sections">
                <div className="sectionRecoverPasswordNew">
                <a href="/">
                <img src={logo} alt="" />
                </a>
                        <div className="form">
                        <h3>Nova senha</h3>
                        <div className="passwords">
                                <div className="pass">                                    
                            <input type="password" value={password} onChange={e => (setPassword(e.target.value))} placeholder="Nova Senha"/>
                                  <button><IoEyeOffOutline /></button>  
                                </div>
                                <div className="pass">                                    
                            <input type="password" value={password} onChange={e => (setPassword(e.target.value))} placeholder="Confirme a Senha"/>
                                  <button><IoEyeOffOutline /></button>  
                                </div>
                            </div>

                            <div className="linkRecoverPasswordNew">
                                <a href="#">Digite a nova senha</a>
                            </div>

                     
                            <button onClick={handleLogin}>Atualizar senha</button>
                            <a href="/entrar" className="Link">Voltar ao login</a>
                        </div>

                        <p>Lens Eweyear &copy; {date}</p>
                </div>

                <div className="imageRecoverPasswordNew">
                  
                </div>

            </div>

        </div>
    )
}