import "./topSign.css"
import LogoImg from '../../assets/images/Logo-color.png'


export function TopSign({Check}) {
    return (
        <div className="TopSign">
            <div className="logoTopSign">
                <img src={LogoImg} alt="" />
            </div>
        </div>
    )
}