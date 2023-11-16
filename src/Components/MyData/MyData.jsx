import { useState } from "react";
import "./myData.css"

export function MyData() {
    const Local = localStorage.getItem("lenseyewear");
    const user = JSON.parse(Local);

    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");


    function handleRedirect(data) {
        window.open( `/minha-conta/${data}`, "_self")
    }
    return (
        <div className="MyData">
            <h3>MEUS DADOS</h3>
            
            <div className="MyDataList">
                <div className="userData">
                    <h4><span>Nome:</span> {user.name}</h4>
                    <h4><span>Nome Social:</span> {user.socialName}</h4>
                    <h4><span>E-mail:</span> {user.email}</h4>
                    <h4><span>Whatsapp:</span> {user.whatsapp}</h4>
                    <h4><span>CPF:</span> {user.cpf_cnpj}</h4>
                    <h4><span>Tipo de conta:</span> {user.type}</h4>
                    <br />
                    <button onClick={() => handleRedirect("editar-meus-dados")}>Alterar dados</button>
                </div>

                <div className="password">
                    <h4>Alterar senha</h4>
                    <input type="text" value={password} onChange={e => (setPassword(e.target.value))} placeholder="Nova Senha" />
                    <input type="text" value={passwordConfirm} onChange={e => (setPasswordConfirm(e.target.value))} placeholder="Confirmação de Nova Senha" />
                    <button>Alterar Senha</button>
                </div>
            </div>
        </div>
    )
}