import PackagePicture from "../assets/package.png";

function CheckoutGrid() {
  return (
    <div className="flex flex-col justify-center items-center border border-yellow-200 p-8 text-center">
      <img className="w-48 content-center" src={PackagePicture} />
      <h1 className="pb-8 font-extrabold text-4xl">Order Information</h1>

      <div className="flex flex-col gap-6">
        <p className="text-center text-2xl">Subtotal </p>
        <p className="text-center text-2xl">Total </p>
      </div>
    </div>
  );
}

export default CheckoutGrid;
