import "./signIn.css";
import { Footer } from "../../Components/Footer2/Footer";
import Navbar from "../../Components/NavBarTop/Navbar";
import { TopSign } from "../../Components/TopSign/TopSign";
import logo from "../../assets/images/logo-color.png";
import { useContext, useState } from "react";
import { IoEyeOffOutline } from "react-icons/io5";
import { AuthContext } from "../../contexts/Auth";

export function SignIn() {
    const date = new Date().getFullYear();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {loginSession} = useContext(AuthContext);

    function handleLogin(e) {
        e.preventDefault();
        loginSession({email, password})
    }

    return (
        <div className="SignIn">

            <div className="sections">
                <div className="sectionSignIn">
                <a href="/">
                <img src={logo} alt="" />
                </a>
                        <div className="form">
                        <h3>Entrar</h3>
                            <input type="text" value={email} onChange={e => (setEmail(e.target.value))} placeholder="E-mail"/>
                            <div className="passwords">
                                <div className="pass">                                    
                            <input type="password" value={password} onChange={e => (setPassword(e.target.value))} placeholder="Senha"/>
                                  <button><IoEyeOffOutline /></button>  
                                </div>
                            </div>
                            <div className="linkSignIn">
                                <a href="#">Esqueci a senha</a>
                            </div>

                            <div className="textForm">
                                <a href="Esqueci minha senha"></a>
                            </div>
                            <button onClick={handleLogin}>Entrar</button>
                            <a href="/cadastrar" className="Link">Cadastre-se</a>
                        </div>

                        <p>Lens Eweyear &copy; {date}</p>
                </div>

                <div className="imageSignIn">
                  
                </div>

            </div>

        </div>
    )
}