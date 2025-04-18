import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Checkout } from "./pages/Checkout";
import { CheckoutSuccess } from "./pages/CheckoutSuccess";
import { Home } from "./pages/Home";

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<Home />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="success" element={<CheckoutSuccess />} />
            </Route>
        </Routes>
    )
}