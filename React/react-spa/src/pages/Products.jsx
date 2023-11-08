import { Link } from "react-router-dom"
import products from "../database.json"
import { useContext } from "react"
import CartContext from "../contexts/CartContext"

export default function Products() {

  const {cart, setCart} = useContext(CartContext);

  function addToCart(product) {
    const pId = cart.find(p => p.id == product.id);
    if (!pId) {
      setCart((state) => [product, ...state]);
    }
  }

  return (
    <section>
      <h2>Todos os produtos</h2>
      <p>Confira todas as nossas ofertas.</p>
      <section className="products">
        <h3>Processadores</h3>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h4>{product.name}</h4>
              <p>R$ {product.price}</p>
              <Link to={`/products/${product.id}`}>
                <button>Ver</button>
              </Link>
              <Link to={`/cart/${product.id}`}>
                <button onClick={() => addToCart(product)}>Comprar</button>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}