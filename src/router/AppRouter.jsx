import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Orders from "../pages/Orders";
import OrderDetails from "../pages/OrderDetails";
import Filter from "../pages/Filter";
import Stats from "../pages/Stats";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/orders" />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/orders/:id" element={<OrderDetails />} />
      <Route path="/filter" element={<Filter />} />
      <Route path="/stats" element={<Stats />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;