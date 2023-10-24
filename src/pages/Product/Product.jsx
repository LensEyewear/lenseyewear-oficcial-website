import "./product.css"
import Navbar from "../../Components/NavBarTop/Navbar";
import BarInfos from "../../Components/BarInfos/BarInfos";
import { Newsletter } from "../../Components/Newsletter/Newsletter";
import { Footer } from "../../Components/Footer2/Footer";
import Armação2 from  "../../assets/images/armações/Feminino/ARXf00001/ARXf00001x2.jpg";
import Armação3 from  "../../assets/images/armações/Feminino/ARXf00001/ARXf00001x3.jpg";
import Armação4 from  "../../assets/images/armações/Feminino/ARXf00001/ARXf00001x4.jpg";
import Armação5 from  "../../assets/images/armações/Feminino/ARXf00001/ARXf00001x5.jpg";
import Armação6 from  "../../assets/images/armações/Feminino/ARXf00001/ARXf00001x6.jpg";
import Medidas from  "../../assets/images/armações/medidas.jpg";
import { IoArrowForwardOutline } from "react-icons/io5";

export function Product() {
    const modelo = "ARXf00001"
    return (
        <div className="Product">
            <Navbar />

            <div className="topInfos">
                <h5>Lens Eweyear <IoArrowForwardOutline /> Óculos de Gráu <IoArrowForwardOutline /> Feminino</h5>
            </div>

            <div className="InfosProduct">
                <div className="images">
                    <div className="listImages">
                        <img src={Armação2} alt="#" />
                        <img src={Armação3} alt="#" />
                        <img src={Armação4} alt="#" />
                        <img src={Armação5} alt="#" />
                        <img src={Armação6} alt="#" />
                    </div>
                    <div className="imageMain">
                    <img src={Armação6} alt="#" />
                    </div>
                </div>

                <div className="dataProduct"> 
                    <h3>ÓCULOS {modelo.toUpperCase()}</h3>
                    <h5 style={{textDecoration: 'line-through'}}>de: <span>R$ 229,00</span></h5>
                    <h5>por: <span style={{fontSize: '24px'}}>R$ 189,00</span></h5>
                    <h5>ou</h5>
                    <h5>Em até <span>5X</span> de <span>R$ 37,80</span></h5>

                    <div className="color">
                        <h5>Escolha a cor</h5>
                        <div className="listColor">
                        <div className="colorUnic" style={{backgroundColor:'#000'}}></div>
                <div className="colorUnic" style={{backgroundColor:'#fff'}}></div>
                <div className="colorUnic" style={{backgroundColor:'#7c4ed8'}}></div>
                <div className="colorUnic" style={{backgroundColor:'#de0053'}}></div>
                        </div>
                    </div>

                    <div className="buttons">
                        <button className="btn1">COMPRAR ARMAÇÃO + LENTE DE GRAU</button>
                        <button className="btn2">COMPRAR SÓ ARMAÇÃO</button>
                        <h5>Compra Segura</h5>
                    </div>

                    <div className="delivery">
                    <h6>Consulte o prazo de entrega</h6>
                    <div className="cep">
                        <input type="text" />
                        <button>CALCULAR</button>
                    </div>
                    <h6>Não sei meu CEP</h6>
                    </div>
                </div>

            </div>

            <div className="measures">
                <div className="measuresInfo">
                    <h3>INFORMAÇÕES IMPORTANTES</h3>
                    
                    <div className="textInfoMeasures">
                    <h5>Tamanho</h5>
                    <h5><span>G</span></h5>
                    </div>
                    <div className="textInfoMeasures">
                    <h5>Material de Óculos</h5>
                    <h5><span>Acetato</span></h5>
                    </div>
                    <div className="textInfoMeasures">
                    <h5>Medida da Frente</h5>
                    <h5><span>140mm</span></h5>
                    </div>
                    <div className="textInfoMeasures">
                    <h5>Medida da Altura</h5>
                    <h5><span>48mm</span></h5>
                    </div>
                    <div className="textInfoMeasures">
                    <h5>Medida da Haste</h5>
                    <h5><span>143mm</span></h5>
                    </div>
                    <div className="textInfoMeasures">
                    <h5>Medida da Ponte do Nariz</h5>
                    <h5><span>16mm</span></h5>
                    </div>
                    <div className="textInfoMeasures">
                    <h5>Garantia</h5>
                    <h5><span>6 meses</span></h5>
                    </div>

                    













                </div>

            <div className="measuresImage">
            <h3>Medidas da Armação</h3>
            <img src={Medidas} alt="" />
            </div>
            </div>



            <BarInfos />
           <Newsletter />
            <Footer />
        </div>
    )
}