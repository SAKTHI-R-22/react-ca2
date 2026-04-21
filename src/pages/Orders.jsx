import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const Orders = () => {
  const { state, dispatch } = useContext(AppContext);

  const validOrders = Array.isArray(state.data)
    ? state.data.filter(order => order && order.orderId)
    : [];

  return (
    <div>
      <h2>Orders</h2>

      <p>DEBUG: {JSON.stringify(state.data)}</p>

      {validOrders.length === 0 ? (
        <p>No Orders Found</p>
      ) : (
        validOrders.map(order => (
          <div key={order.orderId} data-testid="order-item">
            <Link to={`/orders/${order.orderId}`}>
              {(order.customerName || "No Name")} - {(order.restaurant || "No Restaurant")}
            </Link>

            <p>Status: {order.status || "Unknown"}</p>

            {order.status !== "delivered" && (
              <button
                onClick={() =>
                  dispatch({
                    type: "MARK_DELIVERED",
                    payload: order.orderId
                  })
                }
              >
                Mark Delivered
              </button>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;