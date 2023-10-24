import "./signIn.css";
import { Footer } from "../../Components/Footer2/Footer";
import Navbar from "../../Components/NavBarTop/Navbar";
import { TopSign } from "../../Components/TopSign/TopSign";
import logo from "../../assets/images/logo-color.png";

export function SignIn() {
    const date = new Date().getFullYear();
    return (
        <div className="SignIn">

            <div className="sections">
                <div className="sectionSignIn">
                <img src={logo} alt="" />

                        <div className="form">
                        <h3>Entrar</h3>
                            <input type="text" placeholder="Nome"/>
                            <input type="password" placeholder="Senha"/>
                            <div className="linkSignIn">
                                <a href="#">Esqueci a senha</a>
                            </div>

                            <div className="textForm">
                                <a href="Esqueci minha senha"></a>
                            </div>
                            <button>Entrar</button>
                            <a href="#" className="Link">Cadastre-se</a>
                        </div>

                        <p>Lens Eweyear &copy; {date}</p>
                </div>

                <div className="imageSignIn">
                  
                </div>

            </div>

        </div>
    )
}