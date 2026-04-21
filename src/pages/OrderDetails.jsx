import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const OrderDetails = () => {
  const { id } = useParams();
  const { state } = useContext(AppContext);

  const order = Array.isArray(state.data)
    ? state.data.find(o => o.orderId === id)
    : null;

  if (!order) return <p>Order not found</p>;

  return (
    <div>
      <h2>{order.customerName}</h2>
      <p>{order.restaurant}</p>
      <p>Status: {order.status}</p>

      {Array.isArray(order.items) &&
        order.items.map((item, i) => (
          <div key={i}>
            <p>{item.name}</p>
            <p>₹{item.price} × {item.quantity}</p>
            <p>Subtotal: ₹{item.price * item.quantity}</p>
          </div>
        ))}
    </div>
  );
};

export default OrderDetails;