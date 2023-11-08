import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import CartContext from "../contexts/CartContext";
import { useState } from "react";

export default function MainLayout() {

    const [cart, setCart] = useState([]);

    return (
        <>
            <Header />
            <main>
                <p>Este é o layout principal. Abaixo está o conteúdo dinâmico de cada rota.</p>
                <hr />
                <CartContext.Provider value={{cart, setCart}}>
                    <Outlet />
                </CartContext.Provider>
            </main>
            <footer>
                <hr />
                <p>Feito com React Router DOM</p>
            </footer>
        </>
    )
}