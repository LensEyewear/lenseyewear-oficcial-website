import { Footer } from "../../Components/Footer2/Footer";
import Navbar from "../../Components/NavBarTop/Navbar";
import {IoCubeOutline, IoPersonOutline, IoHeartOutline, IoChatboxOutline} from "react-icons/io5";
import "./myAccount.css";

export function MyAccount() {
    return (
        <div className="MyAccount">
            <Navbar/>

            <div className="menuAccount">
                <button> <IoCubeOutline /> Meus Pedidos</button>
                <button> <IoPersonOutline /> Meus Dados</button>
                <button> <IoHeartOutline /> Favoritos</button>
                <button> <IoChatboxOutline /> Atendimento</button>
            </div>

            <div className="boxAccount">

            </div>
            <Footer />
        </div>
    )
}