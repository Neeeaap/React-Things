import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Products from "./pages/Products";
import ProductInfo from "./pages/ProductInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "products/:id", element: <ProductInfo /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
