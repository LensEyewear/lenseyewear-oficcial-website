import "./orders.css"
import img1 from "../../assets/images/armações/Feminino/ARXf00001/ARXf00001x2.jpg";
import img2 from "../../assets/images/armações/Feminino/ARXf000014/ARXf000014x8.jpg";
import img3 from "../../assets/images/armações/Masculino/ARXm00005/ARXm00008x4.jpg";
import img4 from "../../assets/images/armações/Masculino/ARXm00007/ARXm00007.x9.jpg";
import { ProductUnic } from "../ProductUnic/ProductUnic";

export function Orders() {

    return (
        <div className="Orders">
            <h3>MEUS PEDIDOS</h3>

            <div className="favotitesList">
                <ProductUnic text="AETHER ARXM" sex="FEMININO" link={img1}/>
                <ProductUnic text="SERAPHINE ARXF" sex="FEMININO" link={img2}/>
                <ProductUnic text="ALDEBARAN ARXM" sex="MASCULINO" link={img3}/>
                <ProductUnic text="ANTARES ARXM" sex="MASCULINO" link={img4}/>
            </div>
        </div>
    )
}