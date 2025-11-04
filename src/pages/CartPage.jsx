import Header from "../components/Header";
import OrderItemsGrid from "../components/OrderItemsGrid";
function CartPage() {
  return (
    <div>
      <Header headerText={"Shopping Cart"} />
      <div className="mx-4 pt-2">
        <OrderItemsGrid />
      </div>
    </div>
  );
}

export default CartPage;
