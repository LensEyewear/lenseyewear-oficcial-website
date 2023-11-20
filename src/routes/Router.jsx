import {Route, Routes, Navigate} from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Product } from '../pages/Product/Product';
import { Products } from '../pages/Products/Products';
import { Cart } from '../pages/Cart/Cart';
import { PaymentCart } from '../pages/PaymentCart/PaymentCart';
import { PaymentConfirmed } from '../pages/PaymentConfirmed/PaymentConfirmed';
import { SignIn } from '../pages/SignIn/SignIn';
import { PaymentPending } from '../pages/PaymentPending/PaymentPending';
import { PaymentRefused } from '../pages/PaymentRefused/PaymentRefused';
import { SignUp } from '../pages/SignUp/SignUp';
import { AccountCreateConfirmed } from '../pages/AccountCreateConfirmed/AccountCreateConfirmed';
import { MyAccount } from '../pages/MyAccount/MyAccount';
import { RecoverPassword } from '../pages/RecoverPassword/RecoverPassword';
import { RecoverPasswordEmail } from '../pages/RecoverPasswordEmail/RecoverPasswordEmail';
import { RecoverPasswordNew } from '../pages/RecoverPasswordNew/RecoverPassword';

function Router () {
        const Local = localStorage.getItem("lenseyewear");
        const userLocal = JSON.parse(Local)

        function PrivateRoute({children} ) {
                return userLocal !== null  ? children : <Navigate to="/"/>
            }

    return (
            <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/entrar" element={<SignIn />}/>
            <Route path="/cadastrar" element={<SignUp />}/>
            <Route path="/oculos/:nome" element={<Product />}/>
            <Route path="/produtos/:tipo/:sexo" element={<Products />}/>
            <Route path="/produtos/:tipo" element={<Products />}/>
            <Route path="/acessorios" element={<Products />}/>
            <Route path="/checkout/carrinho" element={<Cart />}/>
            <Route path="/checkout/pagamento" element={<PaymentCart />}/>
            <Route path="/checkout/confirmado" element={<PaymentConfirmed />}/>
            <Route path="/checkout/pendente" element={<PaymentPending />}/>
            <Route path="/checkout/recusado" element={<PaymentRefused />}/>
            <Route path="/conta-criada" element={<AccountCreateConfirmed />}/>
            <Route path="/recuperar-senha" element={<RecoverPassword />}/>
            <Route path="/recuperar-senha/codigo" element={<RecoverPasswordEmail />}/>
            <Route path="/recuperar-senha/nova-senha" element={<RecoverPasswordNew />}/>
            {/* <Route path="/minha-conta/:data" element={<MyAccount />}/> */}
            <Route path="/minha-conta/:data"
                    element={ <PrivateRoute> <MyAccount /></PrivateRoute>} />
            </Routes>
           
    )
}

export {Router}