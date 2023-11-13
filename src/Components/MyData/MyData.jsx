import "./myData.css"

export function MyData() {
    const Local = localStorage.getItem("lenseyewear");
    const user = JSON.parse(Local);

    return (
        <div className="MyData">
            <h3>MEUS Dados</h3>
            
            <div className="MyDataList">
                <div className="userData">
                    <h4><span>Nome:</span> {user.name}</h4>
                    <h4><span>Nome Social:</span> {user.socialName}</h4>
                    <h4><span>E-mail:</span> {user.email}</h4>
                    <h4><span>Whatsapp:</span> {user.whatsapp}</h4>
                    <h4><span>CPF:</span> {user.cpf_cnpj}</h4>
                    <h4><span>Tipo de conta:</span> {user.type}</h4>
                    <br />
                    <button>Alterar dados</button>
                </div>

                <div className="password">
                    <h4>Alterar senha</h4>
                    <input type="text" placeholder="Nova Senha" />
                    <input type="text" placeholder="Confirmação de Nova Senha" />
                    <button>Alterar Senha</button>
                </div>
            </div>
        </div>
    )
}