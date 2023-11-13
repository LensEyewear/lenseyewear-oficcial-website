import { Footer } from "../../Components/Footer2/Footer";
import Navbar from "../../Components/NavBarTop/Navbar";
import {IoCubeOutline, IoPersonOutline, IoHeartOutline, IoChatboxOutline, IoCloseOutline, IoCloseCircleOutline, IoCloseCircleSharp} from "react-icons/io5";
import "./myAccount.css";
import { Favorites } from "../../Components/Favorites/Favorites";
import { useParams } from "react-router-dom";
import { Orders } from "../../Components/Orders/Orders";

export function MyAccount() {
    const {data} = useParams();
    return (
        <div className="MyAccount">
            <Navbar/>

            <div className="menuAccount">
                <button> <IoCubeOutline /> Meus Pedidos</button>
                <button> <IoPersonOutline /> Meus Dados</button>
                <button> <IoHeartOutline /> Favoritos</button>
                <button> <IoChatboxOutline /> Atendimento</button>
                <button className="btn2"> <IoCloseCircleSharp/> Sair</button>
            </div>

            <div className="boxAccount">
                {
                data === "favoritos" ?
                <Favorites /> :
                data === "pedidos" ?
                <Orders />
                : ""}
            </div>
            <Footer />
        </div>
    )
}