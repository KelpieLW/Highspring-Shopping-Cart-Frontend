import { BadgeInfo } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PackagePicture from "../assets/package.png";

/**
 * Displays order summary after checkout.
 *
 * Shows subtotal, total price, and tax information
 * for the latest completed order stored in localStorage.
 * Allows starting a new shopping session by clearing the cart.
 *
 * @component
 * @returns {JSX.Element} Checkout summary with totals and reset option.
 */
function CheckoutGrid() {
  /** Base URL for API requests. */
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);

  /** Loads the saved order from localStorage on mount. */
  useEffect(() => {
    const savedOrder = localStorage.getItem("latestOrder");
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
  }, []);
  const handleNewShoppingCart = () => {
    fetch(`${API_BASE_URL}/v1/api/orderItems/clear`, { method: "DELETE" })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to clear order items");
        }
        navigate("/ShoppingCart");
      })
      .catch((err) => console.log("Error clearing order items", err));
  };
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col justify-center items-center border-8 border-yellow-200 p-8 text-center">
        <img className="w-48 content-center" src={PackagePicture} />
        <h1 className="pb-8 font-extrabold text-4xl">Order Information</h1>
        {order ? (
          <div className="flex flex-col gap-6">
            <div className="flex gap-2 text-yellow-700">
              <BadgeInfo />
              <p className="max-w-md">
                Remember, final prices are tied to local taxation, this purchase
                has a %{order.taxValue.toFixed(4) * 100} tax rate
              </p>
            </div>

            <p className="font-bold tracking-wider text-center text-2xl">
              Subtotal{" "}
            </p>
            <p className="text-money text-green-600 text-2xl">
              {order.subTotalPrice.toFixed(2)} $
            </p>
            <p className="font-bold tracking-wider text-center text-2xl">
              Sales Tax Ammount{" "}
            </p>
            <p className="text-money text-green-600 text-2xl">
              {(order.totalPrice - order.subTotalPrice).toFixed(2)} $
            </p>
            <p className="font-bold tracking-wider text-center text-2xl">
              Total{" "}
            </p>
            <p className="text-money text-green-600 text-center text-2xl">
              {order.totalPrice.toFixed(2)} $
            </p>
          </div>
        ) : (
          <div className="flex gap-2 text-red-800">
            <BadgeInfo />
            <p>Empty Order! Go back to the Shopping Cart</p>
          </div>
        )}
      </div>
      <button className="mt-5 regular-button" onClick={handleNewShoppingCart}>
        New Shopping Cart Session
      </button>
    </div>
  );
}

export default CheckoutGrid;
