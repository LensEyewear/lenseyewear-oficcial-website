import "./signUp.css";
import { Footer } from "../../Components/Footer2/Footer";
import Navbar from "../../Components/NavBarTop/Navbar";
import { TopSign } from "../../Components/TopSign/TopSign";
import logo from "../../assets/images/logo-color.png";
import { IoEyeOffOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import { toast } from 'react-toastify';
import { mask as masker, unMask } from "remask";
import { AuthContext } from "../../contexts/Auth";


export function SignUp() {
    const date = new Date().getFullYear();
    const {createAccount} = useContext(AuthContext);

    const [typeAccount, setTypeAccount] = useState("Pessoa Física");
    const [cpf_cnpj, setCpf_cnpj] = useState("");
    const [name, setName] = useState("");
    const [socialName, setSocialName] = useState("");
    const [email, setEmail] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    function ChangeMaskPhone(e) {
        const originalValue = unMask(e.target.value);
        const maskedValue = masker(originalValue, [
          "(99)99999-9999",
          "(99)99999-999",
        ]);
    
        setWhatsapp(maskedValue)
      }
    function ChangeMaskDocument(e) {
        const originalValue = unMask(e.target.value);
        const maskedValue = masker(originalValue, [
          "999.999.999-99",
          "99.999.999/9999-99",
        ]);
    
        setCpf_cnpj(maskedValue)
      }

    function handleCreateAccount(e) {
        e.preventDefault();
        
        if(name === "") {
            toast.error(`Preencha ${typeAccount === "Pessoa Física"  ?  "o Nome" : "a Rasão Social" }`);
            return
        }
        if(socialName === "") {
            toast.error(`Preencha ${typeAccount === "Pessoa Física"  ?  "o Nome Social" : "o Nome Fantasia" }`);
            return
        }
        if(cpf_cnpj === "") {
            toast.error(`Preencha ${typeAccount === "Pessoa Física"  ?  "o CPF" : "o CNPJ" }`);
            return
        }
        if(email === "") {
            toast.error(`Preencha o Email`);
            return
        }
        if(whatsapp === "") {
            toast.error(`Preencha o Whatsapp`);
            return
        }
       
        if(password === "") {
            toast.error(`Preencha a senha`);
            return
        }
        if(password !== "" && passwordConfirm === "") {
            toast.error(`Preencha a confirmação de senha`);
            return
        }
       
        if(password  !== passwordConfirm) {
            toast.error(`Senhas não coincidem`);
            return
        }
       
        console.log({type: typeAccount, cpf_cnpj, name, socialName, email, whatsapp, password})
        createAccount({type: typeAccount, cpf_cnpj, name, socialName, email, whatsapp, password})

    } 


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
                            typeAccount === "Pessoa Física" ?
                            <>
                            <input type="text" value={name} onChange={e => (setName(e.target.value))} placeholder="Nome Completo"/>
                            <input type="text" value={socialName} onChange={e => (setSocialName(e.target.value))} placeholder="Nome Social"/>
                            </>
                            :
                            <>
                            <input type="text" value={name} onChange={e => (setName(e.target.value))}  placeholder="Razão Social"/>
                            <input type="text" value={socialName} onChange={e => (setSocialName(e.target.value))} placeholder="Nome Fantasia"/>
                            </>

                        }
                            <div className="double">
                            {
                            typeAccount === "Pessoa Física" ?
                            <input type="text"value={cpf_cnpj} onChange={ChangeMaskDocument} placeholder="CPF"/>
                            :
                            <input type="text" value={cpf_cnpj} onChange={ChangeMaskDocument} placeholder="CNPJ"/>
                        }

                            <input type="text" value={whatsapp} onChange={ChangeMaskPhone} placeholder="Whatsapp"/>
                            </div>
                            <input type="text" value={email} onChange={e => (setEmail(e.target.value))} placeholder="E-mail"/>
                            <div className="passwords">
                                <div className="pass">                                    
                            <input type="password" value={password} onChange={e => (setPassword(e.target.value))} placeholder="Senha"/>
                                  <button><IoEyeOffOutline /></button>  
                                </div>
                                <div className="pass">
                            <input type="password" value={passwordConfirm} onChange={e => (setPasswordConfirm(e.target.value))} placeholder="Confirmação de Senha"/>
                                <button><IoEyeOffOutline /></button>  
                                </div>
                            </div>

                            {
                               password  !== passwordConfirm ?
                                <p style={{color: 'red'}}>Senhas não combinam</p> :
                                ""
                            }

                            <button onClick={handleCreateAccount}>Cadastrar</button>
                            <a href="/entrar" className="Link">Entrar</a>
                        </div>

                        <p>Lens Eweyear &copy; {date}</p>
                </div>



            </div>

        </div>
    )
}