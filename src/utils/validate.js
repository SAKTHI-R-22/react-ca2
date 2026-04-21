export const isValidOrder = (order) =>
    order &&
    order.orderId &&
    order.customerName &&
    order.restaurant &&
    Array.isArray(order.items) &&
    order.totalAmount !== undefined &&
    order.status;