import "./recoverPassword.css";
import { Footer } from "../../Components/Footer2/Footer";
import Navbar from "../../Components/NavBarTop/Navbar";
import { TopSign } from "../../Components/TopSign/TopSign";
import logo from "../../assets/images/logo-color.png";
import { useContext, useState } from "react";
import { IoEyeOffOutline } from "react-icons/io5";
import { AuthContext } from "../../contexts/Auth";

export function RecoverPassword() {
    const date = new Date().getFullYear();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {loginSession} = useContext(AuthContext);

    function handleLogin(e) {
        e.preventDefault();
        loginSession({email, password})
    }

    return (
        <div className="RecoverPassword">

            <div className="sections">
                <div className="sectionRecoverPassword">
                <a href="/">
                <img src={logo} alt="" />
                </a>
                        <div className="form">
                        <h3>Recuperar senha</h3>
                            <input type="text" value={email} onChange={e => (setEmail(e.target.value))} placeholder="E-mail"/>

                            <div className="linkRecoverPassword">
                                <a href="#">Digite seu e-mail de cadastro</a>
                            </div>

                     
                            <button onClick={handleLogin}>Entrar Código</button>
                            <a href="/entrar" className="Link">Voltar ao login</a>
                        </div>

                        <p>Lens Eweyear &copy; {date}</p>
                </div>

                <div className="imageRecoverPassword">
                  
                </div>

            </div>

        </div>
    )
}