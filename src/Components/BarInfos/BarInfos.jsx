
import "./barInfos.css"
import { IoBagOutline, IoMegaphoneOutline } from 'react-icons/io5';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { TbHomeShield } from 'react-icons/tb';
import { PiSealCheckBold } from 'react-icons/pi';

export default function BarInfos() {
    return (
        <div className="BarInfos">

            <div className="infoBar">
                <TbHomeShield />
                <h4>Loja 100% segura</h4>
            </div>
            <div className="infoBar">
                <PiSealCheckBold />
                <h4>Produtos de qualidade</h4>
            </div>
            <div className="infoBar">
                <IoMegaphoneOutline />
                <h4>Novidades semanais</h4>
            </div>
            <div className="infoBar">
                <LiaShippingFastSolid />
                <h4>Envio rápido</h4>
            </div>
        </div>
    )
}