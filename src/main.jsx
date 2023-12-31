import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout.jsx";
import Home from "./components/Layout/Home.jsx";
import Login from "./components/Login/Login.jsx";
import ManageInventory from "./components/ManageInventory/ManageInventory.jsx";
import Order from "./components/Order/Order.jsx";
import OrderReview from "./components/OrderReview/OrderReview.jsx";
import Shop from "./components/Shop/Shop.jsx";
import "./index.css";
import cartProductsLoader from "./loaders/cartProductsLoader.js";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "/",
                element: <Shop></Shop>,
            },
            {
                path: "order",
                element: <Order></Order>,
                loader: cartProductsLoader,
            },
            {
                path: "order-review",
                element: <OrderReview></OrderReview>,
            },
            {
                path: "manage-inventory",
                element: <ManageInventory></ManageInventory>,
            },
            {
                path: "checkout",
                element: <Checkout></Checkout>,
            },
            {
                path: "login",
                element: <Login></Login>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
