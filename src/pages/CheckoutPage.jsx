import CheckoutGrid from "../components/CheckoutGrid";
import Header from "../components/Header";
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
