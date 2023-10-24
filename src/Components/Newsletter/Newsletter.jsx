import "./newsletter.css"

export function Newsletter() {
    return (
        <div className="Newsletter">
            <h2>PROMOÇÕES E NOVIDADES</h2>
            <h4>Fique por dentro de todas novidades, descontos e promoções. <br />
                Nos fale seu email e não fique de fora!</h4>

                <div className="form">
                    <input type="text" placeholder="Qual o seu nome?"/>
                    <input type="text" placeholder="E o seu e-mail?"/>
                    <button>CADASTRAR</button>
                </div>
        </div>
    )
}