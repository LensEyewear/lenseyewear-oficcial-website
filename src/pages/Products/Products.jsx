import "./products.css";
import BarInfos from "../../Components/BarInfos/BarInfos";
import { Footer } from "../../Components/Footer2/Footer";
import Navbar from "../../Components/NavBarTop/Navbar";
import { Newsletter } from "../../Components/Newsletter/Newsletter";
import { ProductUnic } from "../../Components/ProductUnic/ProductUnic";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useParams } from "react-router-dom";


export function Products() {
    const {type, sex} = useParams()
    console.log(type, sex)
    const [products, setProducts] = useState([])

    type !== undefined && sex !== undefined ?
    console.log(type, sex) :
    type !== undefined && sex === undefined ?
    console.log(type) :
    type === undefined && sex === undefined ?
    console.log("Nada pra mostrar") :
    ""

    useEffect(() => {
        async function getProducts() {
            await api.get(
                type !== undefined && sex !== undefined ?
                `/products/type-sex/${type}/${sex}` :
                type !== undefined && sex === undefined ?
                `/products/type/${type}` :
                type === undefined && sex === undefined ?
                `/products` :
                ""
                ).then((res) => {
                console.log(res.data);
                setProducts(res.data);
            }).catch((err) => {
                console.log(err);
            })
        }

        getProducts()
    },[])
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
                    {
                        products?.map((product) => {
                            return (
                                <ProductUnic id={product.id}/>
                            )
                        })
                    }
                </div>
            </div>

            <BarInfos />
           <Newsletter />
            <Footer />
        </div>
    )
}