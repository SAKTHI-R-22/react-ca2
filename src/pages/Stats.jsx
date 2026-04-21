import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const Stats = () => {
  const { state } = useContext(AppContext);

  const validOrders = Array.isArray(state.data) ? state.data : [];

  const totalOrders = validOrders.length;
  const deliveredOrders = validOrders.filter(o => o.status === "delivered").length;
  const cancelledOrders = validOrders.filter(o => o.status === "cancelled").length;

  useEffect(() => {
    window.appState = {
      totalOrders,
      deliveredOrders,
      cancelledOrders
    };
  }, [state.data]);

  return (
    <div>
      <div data-testid="total-orders">{totalOrders}</div>
      <div data-testid="delivered-orders">{deliveredOrders}</div>
      <div data-testid="cancelled-orders">{cancelledOrders}</div>
    </div>
  );
};

export default Stats;