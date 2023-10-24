import "./signUp.css";
import { Footer } from "../../Components/Footer2/Footer";
import Navbar from "../../Components/NavBarTop/Navbar";
import { TopSign } from "../../Components/TopSign/TopSign";
import logo from "../../assets/images/logo-color.png";

export function SignUp() {
    const date = new Date().getFullYear();
    return (
        <div className="SignUp">

            <div className="sections">
            <div className="imageSignUp"></div>
            
                <div className="sectionSignUp">
                <a href="/">
                <img src={logo} alt="" />
                </a>

                        <div className="form">
                        <h3>Entrar</h3>
                            <input type="text" placeholder="Nome"/>
                            <input type="password" placeholder="Senha"/>
                            <div className="linkSignUp">
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



            </div>

        </div>
    )
}