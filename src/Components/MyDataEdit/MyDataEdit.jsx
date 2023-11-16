import { useState } from "react";
import "./myDataEdit.css"
import { mask as masker, unMask } from "remask";

export function MyDataEdit() {
    const Local = localStorage.getItem("lenseyewear");
    const user = JSON.parse(Local);

    const [typeAccount, setTypeAccount] = useState(user.type);
    const [cpf_cnpj, setCpf_cnpj] = useState(user !== null ? user.cpf_cnpj : "");
    const [name, setName] = useState(user !== null ? user.name : "");
    const [socialName, setSocialName] = useState(user !== null ? user.socialName : "");
    const [email, setEmail] = useState(user !== null ? user.email : "");
    const [whatsapp, setWhatsapp] = useState(user !== null ? user.whatsapp : "");
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

      function handleTypeAccount(e) {
        setTypeAccount(e.target.value)
      }
    return (
        <div className="MyDataEdit">
            <h3>EDITAR MEUS DADOS</h3>
            
            <div className="MyDataEditList">
                <div className="userData">
                <select value={typeAccount} onChange={handleTypeAccount}>
                <option value="">Selecione</option>
                <option value="Pessoa Física">Pessoa Física</option>
                <option value="Pessoa Jurídic">Pessoa Jurídica</option>
               </select>
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
                                                    {
                            typeAccount === "Pessoa Física" ?
                            <input type="text"value={cpf_cnpj} onChange={ChangeMaskDocument} placeholder="CPF"/>
                            :
                            <input type="text" value={cpf_cnpj} onChange={ChangeMaskDocument} placeholder="CNPJ"/>
                        }

                            <input type="text" value={whatsapp} onChange={ChangeMaskPhone} placeholder="Whatsapp"/>

                            <input type="text" value={email} onChange={e => (setEmail(e.target.value))} placeholder="E-mail"/>


                    <br />
                    <button>Salvar dados</button>
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