import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const Filter = () => {
  const { state } = useContext(AppContext);
  const [query, setQuery] = useState("");

  const filtered = Array.isArray(state.data)
    ? state.data.filter(order =>
        order?.restaurant?.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div>
      <input
        data-testid="filter-input"
        placeholder="Search restaurant"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {filtered.map(order => (
        <div key={order.orderId} data-testid="order-item">
          {order.restaurant}
        </div>
      ))}
    </div>
  );
};

export default Filter;