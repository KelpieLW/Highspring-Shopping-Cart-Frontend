import logo from "../assets/Logo.png";
/**
 * Basic header for the Shoppingcart
 * @param {*} param0 This parameter defines the tittle in the top left of the header
 * @returns Customized header
 */
function Header({ headerText }) {
  return (
    <div className="flex items-center justify-between bg-yellow-400 p-3">
      <h1 className="text-title tracking-widest">{headerText}</h1>
      <img src={logo} alt="Logo" className="w-16" />
    </div>
  );
}

export default Header;
