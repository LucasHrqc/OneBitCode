import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import AdminHome from "./pages/Admin/AdminHome";
import MainLayout from "./Layout/MainLayout";
import Product from "./pages/Product";
import loadProduct from "./loaders/products";
import ProductBoundary from "./error-boundaries/ProductBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "products",
        element: <Products />
      },
      {
        path: "products/:productId",
        element: <Product />,
        loader: loadProduct,
        errorElement: <ProductBoundary/>
      },
      {
        path: "cart/:productId",
        element: <Cart />
      }
    ]
  },
  {
    path: "/admin",
    element: <AdminHome />
  }
]);

export default router;