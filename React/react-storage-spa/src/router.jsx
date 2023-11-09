import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./Pages/Home";
import ItemsLayout from "./layout/ItemsLayout";
import ListItems from "./Pages/items/ListItems";
import CreateItem from "./Pages/items/CreateItem";
import ShowItem from "./Pages/items/ShowItem";
import UpdateItem from "./Pages/items/UpdateItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "items",
        element: <ItemsLayout />,
        children: [
            { index: true, element: <ListItems /> },
            { path: "new", element: <CreateItem/> },
            { path: ":id", element: <ShowItem /> },
            { path: ":id/update", element: <UpdateItem /> }
        ],
      },
    ],
  },
]);

export default router;
