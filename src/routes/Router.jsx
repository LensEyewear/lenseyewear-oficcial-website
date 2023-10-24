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

function Router () {
        const Local = localStorage.getItem("lenseyewear");
        const userLocal = JSON.parse(Local)

        function PrivateRoute({children} ) {
                return userLocal !== null || userLocal?.type === "client" ? children : <Navigate to="/"/>
            }

    return (
            <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/entrar" element={<SignIn />}/>
            <Route path="/cadastrar" element={<SignUp />}/>
            <Route path="/produtos/:tipo" element={<Product />}/>
            <Route path="/produtos/:tipo/:sexo" element={<Products />}/>
            <Route path="/produtos/:oculos-de-grau" element={<Products />}/>
            <Route path="/checkout/carrinho" element={<Cart />}/>
            <Route path="/checkout/pagamento" element={<PaymentCart />}/>
            <Route path="/checkout/confirmado" element={<PaymentConfirmed />}/>
            <Route path="/checkout/pendente" element={<PaymentPending />}/>
            <Route path="/checkout/recusado" element={<PaymentRefused />}/>
            {/* <Route path="/"
                    element={ <PrivateRoute> <Home /></PrivateRoute>} /> */}
            </Routes>
           
    )
}

export {Router}