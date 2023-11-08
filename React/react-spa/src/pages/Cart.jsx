import { Link, useParams } from "react-router-dom";
import products from "../database.json";
import { useContext } from "react";
import CartContext from "../contexts/CartContext";

export default function Cart() {

    const {productId} = useParams();
    const product = products.find(p => p.id == productId);

    const {cart, setCart} = useContext(CartContext);

    console.log(cart);
    
    if (!product) {
        return (
            <h2>Oops...Esse produto não foi encontrado =(.</h2>
        )
    }

    return (
        <section>
            <Link to="/products">
                <button>Voltar</button>
            </Link>
            <h2>Carrinho</h2>
            <p>Os produtos atualmente em seu carrinho.</p>
            <ul>
                {cart.map(p => p.name)}
            </ul>
            <button>Finalizar compra</button>
        </section>
    )
}