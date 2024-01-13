import { ProductUnic } from "../ProductUnic/ProductUnic";
import img1 from "../../assets/images/armações/Feminino/ARXf00001/ARXf00001x2.jpg";
import img2 from "../../assets/images/armações/Feminino/ARXf000014/ARXf000014x8.jpg";
import img3 from "../../assets/images/armações/Masculino/ARXm00005/ARXm00008x4.jpg";
import img4 from "../../assets/images/armações/Masculino/ARXm00007/ARXm00007.x9.jpg";

import "./featuresHome.css";
import { useEffect, useState } from "react";
import api from "../../services/api";

export function FeaturesHome() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function getProducts() {
            await api.get(`/products`).then((res) => {
                console.log(res.data);
                setProducts(res.data);
            }).catch((err) => {
                console.log(err);
            })
        }

        getProducts()
    },[])
    return (
        <div className="FeaturesHome">
                              {
                        products?.map((product) => {
                            return (
                                <ProductUnic id={product.id}/>
                            )
                        })
                    }
        </div>
    )
}