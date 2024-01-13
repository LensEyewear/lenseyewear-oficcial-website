import "./product.css"
import Navbar from "../../Components/NavBarTop/Navbar";
import BarInfos from "../../Components/BarInfos/BarInfos";
import { Newsletter } from "../../Components/Newsletter/Newsletter";
import { Footer } from "../../Components/Footer2/Footer";
import Medidas from  "../../assets/images/armações/medidas.jpg";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useParams } from "react-router-dom";

export function Product() {
    const {title} = useParams();
    
    const [product, setProduct] = useState([])

    useEffect(() => {
        async function getProducts() {
            await api.get(`/products//unic-title/${title}`).then((res) => {
                console.log(res.data[0]);
                setProduct(res.data[0]);
            }).catch((err) => {
                console.log(err);
            })
        }

        getProducts()
    },[])


    return (
        <div className="Product">
            <Navbar />

            <div className="topInfos">
                <h5>Lens Eweyear <IoArrowForwardOutline /> {product.type} <IoArrowForwardOutline /> {product.sex}</h5>
            </div>

            <div className="InfosProduct">
                <div className="images">
                    <div className="listImages">
                        {
                            product?.images?.map((image) => {
                                return (
                                    product.featuredImage === image.link ? "" :
                                    <img src={image.link} alt="#" id={image.id}/>
                                )
                            })
                        }
                      
                    </div>
                    <div className="imageMain">
                    <img src={product.featuredImage} alt="#" />
                    </div>
                </div>

                <div className="dataProduct"> 
                    <h3>ÓCULOS {product?.title?.toUpperCase()}</h3>
                    <h5 style={{textDecoration: 'line-through'}}>de: <span>{product.price}</span></h5>
                    <h5>por: <span style={{fontSize: '24px'}}>{product.price}</span></h5>
                    <h5>ou</h5>
                    <h5>Em até <span>{product.numberOfInstallments}X</span> de <span>{product.promotionalPrice}</span></h5>

                    <div className="color">
                        <h5>Escolha a cor</h5>
                        <div className="listColor">
                        {product?.colors?.map((colors) => {
                    return (
                        <div className="colorUnic" id={colors.id} style={{backgroundColor:`${colors.color}`}}></div>
                    )
                })}
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
                    <h5><span>{product?.measures?.size}</span></h5>
                    </div>
                    <div className="textInfoMeasures">
                    <h5>Material de Óculos</h5>
                    <h5><span>{product?.measures?.material}</span></h5>
                    </div>
                    <div className="textInfoMeasures">
                    <h5>Medida da Frente</h5>
                    <h5><span>{product?.measures?.front}mm</span></h5>
                    </div>
                    <div className="textInfoMeasures">
                    <h5>Medida da Altura</h5>
                    <h5><span>{product?.measures?.height}mm</span></h5>
                    </div>
                    <div className="textInfoMeasures">
                    <h5>Medida da Haste</h5>
                    <h5><span>{product?.measures?.stem}mm</span></h5>
                    </div>
                    <div className="textInfoMeasures">
                    <h5>Medida da Ponte do Nariz</h5>
                    <h5><span>{product?.measures?.noseBridge}mm</span></h5>
                    </div>
                    <div className="textInfoMeasures">
                    <h5>Garantia</h5>
                    <h5><span>{product?.measures?.guarantee}</span></h5>
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