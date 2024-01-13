import "./orders.css"
import { ProductUnic } from "../ProductUnic/ProductUnic";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { ProductUnicOrder } from "../ProductUnicOrder/ProductUnicOrder";

export function Orders() {

    const [product, setProduct] = useState([])

    const type= "Óculos de Sol"
    const sex = "Feminino"
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
        <div className="Orders">
            <h3>MEUS PEDIDOS</h3>

            <div className="favotitesList">
            {
                        products?.map((product) => {
                            return (
                                <ProductUnicOrder id={product.id}/>
                            )
                        })
                    }
            </div>
        </div>
    )
}