import "./recoverPasswordEmail.css";
import { Footer } from "../../Components/Footer2/Footer";
import Navbar from "../../Components/NavBarTop/Navbar";
import { TopSign } from "../../Components/TopSign/TopSign";
import logo from "../../assets/images/logo-color.png";
import { useContext, useState } from "react";
import { IoEyeOffOutline } from "react-icons/io5";
import { AuthContext } from "../../contexts/Auth";

export function RecoverPasswordEmail() {
    const date = new Date().getFullYear();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {loginSession} = useContext(AuthContext);

    function handleLogin(e) {
        e.preventDefault();
        loginSession({email, password})
    }

    return (
        <div className="RecoverPasswordEmail">

            <div className="sections">
            <div className="imageRecoverPasswordEmail">
                </div>
                
                <div className="sectionRecoverPasswordEmail">
                <a href="/">
                <img src={logo} alt="" />
                </a>
                        <div className="form">
                        <h3>Código de recuperação</h3>
                            <input type="text" value={email} onChange={e => (setEmail(e.target.value))} placeholder="########"/>

                            <div className="linkRecoverPasswordEmail">
                                <a href="#">Digite o código que enviamos para seu e-mail</a>
                            </div>

                     
                            <button onClick={handleLogin}>Confirmar código</button>
                            <a href="/recuperar-senha" className="Link">Alterar e-mail</a>
                        </div>

                        <p>Lens Eweyear &copy; {date}</p>
                </div>



            </div>

        </div>
    )
}