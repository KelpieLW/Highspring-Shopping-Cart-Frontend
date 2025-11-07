import Header from "../components/Header";
import OrderItemsGrid from "../components/OrderItemsGrid";
/**
 * Shopping cart page, shows the basic item information of a purchase
 * @returns Basic header and shopping cart grid with each item information
 */
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
