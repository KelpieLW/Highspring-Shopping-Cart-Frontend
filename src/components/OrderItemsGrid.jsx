import { RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
/**
 * Displays all order items in a grid and allows checkout.
 *
 * Fetches data from the backend, shows items with price and quantity,
 * allows refreshing the list, and performs checkout to create an order.
 *
 * @component
 * @returns {JSX.Element} Order items grid with subtotal and checkout button.
 */
function OrderItemsGrid() {
  /** Base URL for API requests. */
  const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";
  const navigate = useNavigate();
  const [orderItems, setItems] = useState([]);
  const [loadingFlag, setLoadingFlag] = useState(false);

  const subTotal = () =>
    orderItems.reduce((acc, el) => acc + el.orderItem.price * el.quantity, 0);

  /** Fetches order items from the API. */
  const fetchOrderItems = () => {
    setLoadingFlag(true);
    fetch(`${API_BASE_URL}/v1/api/orderItems`)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error fetching Order Items", err))
      .finally(setLoadingFlag(false));
  };
  /** Performs checkout and redirects to the checkout page. */
  const handleCheckout = () => {
    fetch(`${API_BASE_URL}/v1/api/orderItems/checkout`)
      .then((res) => res.json())
      .then((order) => {
        localStorage.setItem("latestOrder", JSON.stringify(order));
        navigate("/Checkout");
      })
      .catch((err) => console.error("Error fetching order", err));
  };

  useEffect(fetchOrderItems, []);
  return (
    <div className="max-w-7xl">
      <div className="flex justify-center">
        <button
          onClick={fetchOrderItems}
          disabled={loadingFlag}
          className="rounded-full bg-green-300 p-3 hover:bg-green-700 transition flex items-center justify-center"
        >
          <RefreshCw className="w-6 h-6" />
        </button>
      </div>

      <div className="grid grid-cols-6 gap-x-8 items-center border-b-2 border-blue-950 py-2  max-w-full justify-items-center">
        <h2 className="text-subtitle">Category</h2>
        <h2 className="text-subtitle">Item</h2>
        <h2 className="text-subtitle">Name</h2>
        <h2 className="text-subtitle">Description</h2>
        <h2 className="text-subtitle">Quantity</h2>
        <h2 className="text-subtitle">Price</h2>
      </div>

      {orderItems.map((orderItemElement) => (
        <div className="grid grid-cols-6 gap-x-8 items-center border-b py-4 justify-items-center">
          <p className="text-standard">
            {orderItemElement.orderItem.itemCategory.name}
          </p>
          <img
            className="w-44 h-auto object-cover"
            key={orderItemElement.orderItem.name}
            src={`${API_BASE_URL}${orderItemElement.orderItem.itemImageUrl}`}
          />

          <p className="text-standard">{orderItemElement.orderItem.name}</p>
          <p className="text-standard">
            {orderItemElement.orderItem.description}
          </p>
          <p className="text-standard">{orderItemElement.quantity}</p>
          <p className="text-money">
            {(
              orderItemElement.orderItem.price * orderItemElement.quantity
            ).toFixed(2)}
            <span> $</span>
          </p>
        </div>
      ))}
      <div className="grid grid-cols-5 gap-x-2 items-center border-b py-4 ">
        <button
          disabled={orderItems.length == 0}
          className={`col-start-4 regular-button max-w-48 ${
            orderItems.length === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleCheckout}
        >
          Checkout
        </button>
        <p className="col-start-5 text-money">
          Subtotal: {subTotal().toFixed(2)} $
        </p>
      </div>
    </div>
  );
}

export default OrderItemsGrid;
