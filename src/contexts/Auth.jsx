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

            localStorage.setItem("lenseyewear", JSON.stringify(result.data));
            window.open("/conta-criada", "_self")
            
        }).catch(error => {
            
            console.log("Login não foi realizado" + error)
            setLoading(false)
        }) 
} 


    return(
        <AuthContext.Provider value={{
            loginSession,
            createAccount,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}