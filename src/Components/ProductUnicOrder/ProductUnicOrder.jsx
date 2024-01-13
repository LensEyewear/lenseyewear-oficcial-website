import { useEffect, useState } from "react";
import "./productUnicOrder.css";
import api from "../../services/api";
import { IoCreateOutline, IoEyeOutline, IoTrashOutline } from "react-icons/io5";

export function ProductUnicOrder({id}) {

    const [product, setProduct] = useState([])

    useEffect(() => {
        async function getProducts() {
            await api.get(`/products/unic-id/${id}`).then((res) => {
                console.log(res.data[0]);
                setProduct(res.data[0]);
            }).catch((err) => {
                console.log(err);
            })
        }

        getProducts()
    },[])


    return (
        <div className="ProductUnicOrder">

            <div className="image">
            <a href={`/oculos/${product.title}`}>
                <img src={product.featuredImage} alt="" />
                </a>
            </div>

            <div className="dataInfos">

            <div className="textInfos">
                <h3> <a href={`/oculos/${product.title}`}>{product.title} - {product.sex}</a></h3>
            </div>

            <div className="featured">
                    <h6>DESTAQUE</h6>
            </div>


            <div className="colors">
                {product?.colors?.map((colors) => {
                    return (
                        <div className="colorUnic" id={colors.id} style={{backgroundColor:`${colors.color}`}}></div>
                    )
                })}
                </div>
            <div className="price">
                <h4><b>{product.price}</b></h4>
                <h5>-</h5>
                <h5>10x R{product.promotionalPrice}</h5>
            </div>
            </div>

            <div className="buttonsProducts">
                <button><IoCreateOutline/></button>
                <button><IoTrashOutline/></button>
                <button><IoEyeOutline /></button>
            </div>
        </div>
    )
}


