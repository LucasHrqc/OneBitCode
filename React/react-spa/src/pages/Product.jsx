import { Link, useLoaderData } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../contexts/CartContext";

export default function Product() {

    const product = useLoaderData()

    const { cart, setCart } = useContext(CartContext);

    if (!product) {
        return (
            <h2>
                Oops...Esse produto não foi encontrado. =(
            </h2>
        )
    }

    function addToCart(product) {
        const pId = cart.find(p => p.id == product.id);
        if (!pId) {
            setCart((state) => [product, ...state]);
        }
    }

    // throw new Error('Um erro qualquer');

    return (
        <>
            <section>
                <Link to="/products">
                    <button type="button">Voltar</button>
                </Link>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>R$ {product.price}</p>
                <Link to={`/cart/${product.id}`}>
                    <button onClick={() => addToCart(product)}>Comprar</button>
                </Link>
            </section>
        </>
    )
}