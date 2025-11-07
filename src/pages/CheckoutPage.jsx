import CheckoutGrid from "../components/CheckoutGrid";
import Header from "../components/Header";
/**
 * Checkout page, shows the Sutotal, total and tax rate.
 * @returns Basic header and checkout grid with the purchase information
 */
function CheckoutPage() {
  return (
    <div>
      <Header headerText={"Checkout Page"} />
      <div className="flex justify-center my-28">
        <CheckoutGrid />
      </div>
    </div>
  );
}

export default CheckoutPage;
