import {createContext } from 'react';
import { toast } from 'react-toastify';
import api from '../services/api';

const AuthContext = createContext({});

function AuthProvider({children}) {

    async function createAccount({
        type, cpf_cnpj, name, socialName, email, whatsapp, password
    }) {
        const data = {
            type, cpf_cnpj, name, socialName, email, whatsapp, password
            }
        console.log(data)
        
        await api.post('/accounts', data).then(() => {
       
            toast.info(`Cadastro criado com sucesso!`);
            localStorage.setItem("lenseyewear", JSON.stringify(data));
            window.open("/conta-criada", "_self")

        }).catch(error => {
            console.log("Cadastro não foi realizado: "+ error);
            toast.error(`Userna
            me ou E-mail ja utilizados. Tente outro por favor!`);
        });
    }

    async function loginSession({email, password}) {     
        await api.post("/session/accounts", {email, password}).then((result) => {
            if(result.data.status === "blocked") {
                toast.error(`Olá, ${result.data.name}. Sua conta está bloqueada, entre em contato!`);
                return
            }

            toast.success("Entrando...");
            localStorage.setItem("lenseyewear", JSON.stringify(result.data));
            setTimeout(() => {
                window.open("/minha-conta/pedidos", "_self");
              }, "5000")
            
        }).catch(error => {
            
            console.log("Login não foi realizado" + error)
            setLoading(false)
        }) 
} 

async function newAddressAccount({
    idAccount, type, title, road, number, complement, 
    district, city, uf, cep, reference
}) {
    const data = {
        idAccount, type, title, road, number, complement, 
    district, city, uf, cep, reference
        }
    console.log(data)
    
    await api.post('/addressAccounts', data).then(() => {
   
        toast.info(`Endereço cadastrado com sucesso!`);
        window.open("/minha-conta/meus-enderecos", "_self")

    }).catch(error => {
        console.log("Cadastro não foi realizado: "+ error);
        toast.error(`Userna
        me ou E-mail ja utilizados. Tente outro por favor!`);
    });
}

async function logout() {
    localStorage.removeItem("lenseyewear");
    window.location.reload(false);
}


    return(
        <AuthContext.Provider value={{
            loginSession,
            createAccount,
            newAddressAccount,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}