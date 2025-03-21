import React from "react";
import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";

const ORDERS = [
  {
    product: "Banana",
    price: 54.6,
    quantity: 3,
  },
  {
    product: "Computer",
    price: 100.5,
    quantity: 4,
  },
  {
    product: "Table",
    price: 1070,
    quantity: 3,
  },
];

export default function App() {
  const [orders, setOrders] = React.useState(ORDERS);

  // Calculate total price
  const calculateTotal = () => {
    return orders
      .reduce((sum, order) => sum + order.price * order.quantity, 0)
      .toFixed(2);
  };

  // Handle quantity increase
  const handleIncrease = (productName) => {
    setOrders(
      orders.map((order) =>
        order.product === productName
          ? { ...order, quantity: order.quantity + 1 }
          : order
      )
    );
  };

  // Handle quantity decrease
  const handleDecrease = (productName) => {
    setOrders(
      orders.map((order) =>
        order.product === productName && order.quantity > 0
          ? { ...order, quantity: order.quantity - 1 }
          : order
      )
    );
  };

  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>

      <div className="order-list">
        {orders.map((order) => (
          <OrderCard
            key={order.product}
            product={order.product}
            price={order.price}
            quantity={order.quantity}
            onIncrease={() => handleIncrease(order.product)}
            onDecrease={() => handleDecrease(order.product)}
          />
        ))}
      </div>

      <CheckoutButton total={calculateTotal()} />
    </>
  );
}