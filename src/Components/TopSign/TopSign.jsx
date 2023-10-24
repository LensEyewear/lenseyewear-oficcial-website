import "./topSign.css"
import LogoImg from '../../assets/images/logo-color.png'


export function TopSign({Check}) {
    return (
        <div className="TopSign">
            <div className="logoTopSign">
                <img src={LogoImg} alt="" />
            </div>
        </div>
    )
}