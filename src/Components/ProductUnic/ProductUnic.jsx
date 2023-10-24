import "./productUnic.css";

export function ProductUnic({text, sex, link}) {
    console.log({text, sex, link});
    return (
        <div className="ProductUnic">
            <div className="featured">
                    <h6>DESTAQUE</h6>
            </div>
            <div className="image">
                <img src={link} alt="" />
            </div>
            <div className="textInfos">
                <h4>{text}</h4>
                <h6>{sex}</h6>
            </div>
            <div className="colors">
                <div className="colorUnic" style={{backgroundColor:'#000'}}></div>
                <div className="colorUnic" style={{backgroundColor:'#fff'}}></div>
                <div className="colorUnic" style={{backgroundColor:'#7c4ed8'}}></div>
                <div className="colorUnic" style={{backgroundColor:'#de0053'}}></div>
            </div>
            <div className="price">
                <h5><b>R$ 299,99</b></h5>
                <h5>-</h5>
                <h5>10x R$ 29,99</h5>
            </div>
        </div>
    )
}