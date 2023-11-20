import { useState } from "react";
import "./myAddress.css"
import { IoAddCircleOutline } from "react-icons/io5";

export function MyAddress() {
    const Local = localStorage.getItem("lenseyewear");
    const user = JSON.parse(Local);

    function handleRedirect(data) {
        window.open( `/minha-conta/${data}`, "_self")
    }
    return (
        <div className="MyAddress">
            <h3>MEUS ENDEREÇOS</h3>
            
            <div className="MyAddressList">
                <div className="userAddress">
                    <h4><span>Rua:</span> Rua 28 de Março, 118, Apartamento 200</h4>
                    <h4><span>Bairro:</span> Centro</h4>
                    <h4><span>Cidade:</span> Sacomã - <span>Estado:</span> SP</h4>
                    <h4><span>CEP:</span> 04236-160</h4>
                    <h4><span>Referência:</span> Próximo ao primeiro comércio</h4>
                    <br />
                    <button onClick={() => handleRedirect("editar-meus-dados")}>Editar endereço</button>
                </div>
                <div className="userAddress">
                    <h4><span>Rua:</span> Rua 28 de Março, 118, Apartamento 200</h4>
                    <h4><span>Bairro:</span> Centro</h4>
                    <h4><span>Cidade:</span> Sacomã - <span>Estado:</span> SP</h4>
                    <h4><span>CEP:</span> 04236-160</h4>
                    <h4><span>Referência:</span> Próximo ao primeiro comércio</h4>
                    <br />
                    <button onClick={() => handleRedirect("editar-meus-dados")}>Editar endereço</button>
                </div>

            </div>
                    <button onClick={() => handleRedirect("editar-meus-dados")}><IoAddCircleOutline />Novo Endereço</button>
        </div>
    )
}