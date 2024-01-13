import { useContext, useEffect, useState } from "react";
import "./myAddressEdit.css"
import { IoAddCircleOutline, IoBusinessOutline, IoHomeOutline } from "react-icons/io5";
import Modal from 'react-modal';
import { mask as masker, unMask } from "remask";
import { AuthContext } from "../../contexts/Auth";
import api from "../../services/api";

export function MyAddressEdit({id}) {
    console.log(id);
    const Local = localStorage.getItem("lenseyewear");
    const user = JSON.parse(Local);

    const {newAddressAccount} = useContext(AuthContext);


    const [isOpenModalProcess, setIsOpenModaProcess] = useState(false);
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [road, setRoad] = useState("");
    const [number, setNumber] = useState("");
    const [complement, setComplement] = useState("");
    const [district, setDistrict] = useState("");
    const [city, setCity] = useState("");
    const [uf, setUf] = useState("");
    const [reference, setReference] = useState("");
    const [cep, setCep] = useState("");

    useEffect(() => {
        async function loadAddressAccount() {
            await api.get(`addressAccounts/unic/${id}`).then((res) => {
                console.log(res.data[0]);
                setTitle(res.data[0].title)
                setType(res.data[0].type)
                setRoad(res.data[0].road)
                setNumber(res.data[0].number)
                setComplement(res.data[0].complement)
                setDistrict(res.data[0].district)
                setCity(res.data[0].city)
                setUf(res.data[0].uf)
                setReference(res.data[0].reference)
                setCep(res.data[0].cep)
            }).catch((err) => {
                console.log(err)
            })
        }

        loadAddressAccount()
    },[])


    function handleOpenModalProcess(e) {
        e.preventDefault();
          setIsOpenModaProcess(true)
        }
      
        function handleCloseModalProcess(e) {
          e.preventDefault();
          setIsOpenModaProcess(false);
        }

        function handleSelectType(data) {
            console.log(data);
            setType(data);
        }

        function handleNewAddress(e) {
            e.preventDefault();
            newAddressAccount({
                idAccount: user.id,
                type, title, road, number, complement, 
                district, city, uf, cep, reference
            })
        }

        function ChangeMaskCEP(e) {
            const originalValue = unMask(e.target.value);
            const maskedValue = masker(originalValue, [
              "99999-999",
            ]);
        
            setCep(maskedValue)
          }
        function ChangeMaskUF(e) {
            const originalValue = unMask(e.target.value);
            const maskedValue = masker(originalValue, [
              "AA",
            ]);
        
            setUf(maskedValue)
          }

        Modal.setAppElement('#root');

    return (
        <div className="MyAddressEdit">
                                <button onClick={handleOpenModalProcess}><IoAddCircleOutline />Editar Endereço</button>



                    <Modal isOpen={isOpenModalProcess} onRequestClose={handleCloseModalProcess}
        overlayClassName="react-modal-overlay"
        className="react-modal-content">

        <div className="content-moda-Process-client">
        <div className="itensModal-Process-client">
            <h3>Novo Endereço</h3>

            <div className="form">
                <div className="buttons">
                    <button onClick={() => handleSelectType("Residencial")} className={type === "Residencial" ? "" : "btn2"} ><IoHomeOutline /> Residencial</button>
                    <button onClick={() => handleSelectType("Comercial")} className={type === "Comercial" ? "" : "btn2"}><IoBusinessOutline />Comercial</button>
                </div>
                <input type="text" placeholder="Título" value={title} onChange={e => setTitle(e.target.value)}/>
                <input type="text" className="input2" placeholder="Rua" value={road} onChange={e => setRoad(e.target.value)}/>
                <input type="number" className="input3" placeholder="Nº" value={number} onChange={e => setNumber(e.target.value)}/>
                <input type="text" placeholder="Complemento" value={complement} onChange={e => setComplement(e.target.value)}/>
                <input type="text" className="input4" placeholder="Bairro" value={district} onChange={e => setDistrict(e.target.value)}/>
                <input type="text" className="input4" placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)}/>
                <input type="text" className="input4" placeholder="UF" value={uf?.toUpperCase()} onChange={ChangeMaskUF}/>
                <input type="text" className="input3" placeholder="CEP" value={cep} onChange={ChangeMaskCEP}/>
                <input type="text" className="input2" placeholder="Referência" value={reference} onChange={e => setReference(e.target.value)}/>

                <button onClick={handleNewAddress}><IoAddCircleOutline /> Cadastrar endereço</button>
            </div>

            
        </div>
        </div>

        </Modal>
        </div>
    )
}