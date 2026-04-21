export const reducer = (state, action) => {
    switch (action.type) {
      case "SET_DATA":
        return { ...state, data: action.payload };
  
      case "MARK_DELIVERED":
        return {
          ...state,
          data: state.data.map(order =>
            order.orderId === action.payload
              ? { ...order, status: "delivered" }
              : order
          )
        };
  
      default:
        return state;
    }
  };