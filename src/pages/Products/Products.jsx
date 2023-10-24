import "./products.css";
import BarInfos from "../../Components/BarInfos/BarInfos";
import { Footer } from "../../Components/Footer2/Footer";
import Navbar from "../../Components/NavBarTop/Navbar";
import { Newsletter } from "../../Components/Newsletter/Newsletter";
import { ProductUnic } from "../../Components/ProductUnic/ProductUnic";
import img1 from "../../assets/images/armações/Feminino/ARXf00001/ARXf00001x2.jpg";
import img2 from "../../assets/images/armações/Feminino/ARXf000014/ARXf000014x8.jpg";
import img3 from "../../assets/images/armações/Masculino/ARXm00005/ARXm00008x4.jpg";
import img4 from "../../assets/images/armações/Masculino/ARXm00007/ARXm00007.x9.jpg";

export function Products() {
    return (
        <div className="Products">
            <Navbar />

            <div className="productsList">
                <div className="filter">
                    <button>Filtro</button>

                    <select>
                        <option value="">Mais Vendidos</option>
                        <option value="">Mais Recentes</option>
                        <option value="">Maior Preço</option>
                        <option value="">Menor Preço</option>
                        <option value="">Melhores avaliações</option>
                    </select>
                </div>
                <div className="listProducts">
                <ProductUnic text="AETHER ARXM" sex="FEMININO" link={img1}/>
            <ProductUnic text="SERAPHINE ARXF" sex="FEMININO" link={img2}/>
            <ProductUnic text="ALDEBARAN ARXM" sex="MASCULINO" link={img3}/>
            <ProductUnic text="ANTARES ARXM" sex="MASCULINO" link={img4}/>

            <ProductUnic text="AETHER ARXM" sex="FEMININO" link={img1}/>
            <ProductUnic text="SERAPHINE ARXF" sex="FEMININO" link={img2}/>
            <ProductUnic text="ALDEBARAN ARXM" sex="MASCULINO" link={img3}/>
            <ProductUnic text="ANTARES ARXM" sex="MASCULINO" link={img4}/>

            <ProductUnic text="AETHER ARXM" sex="FEMININO" link={img1}/>
            <ProductUnic text="SERAPHINE ARXF" sex="FEMININO" link={img2}/>
            <ProductUnic text="ALDEBARAN ARXM" sex="MASCULINO" link={img3}/>
            <ProductUnic text="ANTARES ARXM" sex="MASCULINO" link={img4}/>
                </div>
            </div>

            <BarInfos />
           <Newsletter />
            <Footer />
        </div>
    )
}