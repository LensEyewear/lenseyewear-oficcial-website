import { Footer } from "../../Components/Footer2/Footer";
import Navbar from "../../Components/NavBarTop/Navbar";
import {IoCubeOutline, IoPersonOutline, IoHeartOutline, IoChatboxOutline, IoCloseOutline, IoCloseCircleOutline, IoCloseCircleSharp, IoMapOutline} from "react-icons/io5";
import "./myAccount.css";
import { Favorites } from "../../Components/Favorites/Favorites";
import { useParams } from "react-router-dom";
import { Orders } from "../../Components/Orders/Orders";
import { MyData } from "../../Components/MyData/MyData";
import { CustomerSupport } from "../../Components/CustomerSupport/CustomerSupport";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth";
import { MyDataEdit } from "../../Components/MyDataEdit/MyDataEdit";
import { MyAddress } from "../../Components/MyAddress/MyAddress";

export function MyAccount() {
    const {data} = useParams();

    const {logout} = useContext(AuthContext);

    function handleLogOut() {
        logout()
    }

    function handleRedirect(data) {
        window.open( `/minha-conta/${data}`, "_self")
    }
    return (
        <div className="MyAccount">
            <Navbar/>

            <div className="menuAccount">
                <button onClick={() => handleRedirect("pedidos")}> <IoCubeOutline /> Pedidos</button>
                <button onClick={() => handleRedirect("meus-dados")}> <IoPersonOutline /> Dados</button>
                <button onClick={() => handleRedirect("meus-enderecos")}> <IoMapOutline /> Endereços</button>
                <button onClick={() => handleRedirect("favoritos")}> <IoHeartOutline /> Favoritos</button>
                <button onClick={() => handleRedirect("atendimento")}> <IoChatboxOutline /> Atendimento</button>
                <button className="btn2" onClick={handleLogOut}> <IoCloseCircleSharp/> Sair</button>
            </div>

            <div className="boxAccount">
                {
                data === "favoritos" ?
                <Favorites /> :
                data === "pedidos" ?
                <Orders /> :
                data === "meus-dados" ?
                <MyData />:
                data === "meus-enderecos" ?
                <MyAddress />:
                data === "editar-meus-dados" ?
                <MyDataEdit />:
                data === "atendimento" ?
                <CustomerSupport />
                : ""}
            </div>
            <Footer />
        </div>
    )
}