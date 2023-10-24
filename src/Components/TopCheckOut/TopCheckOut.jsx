import "./topCheckOut.css"
import LogoImg from '../../assets/images/Logo-color.png'


export function TopCheckOut({Check}) {
    return (
        <div className="TopCheckOut">
            <div className="logoTopCheckOut">
                <img src={LogoImg} alt="" />
            </div>

            <div className="stepesTopCheckOut">
                <img src={Check} alt="" />
            </div>

            <div className="linkTopCheckOut">
                <a href="/">Continuar comprando</a>
            </div>
        </div>
    )
}