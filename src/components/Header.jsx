function Header({ headerText }) {
  return (
    <div className="flex items-center justify-between bg-yellow-400 p-3">
      <h1 className="text-title tracking-widest">{headerText}</h1>
      <img src="../src/assets/logo.png" alt="Logo" className=" w-16" />
    </div>
  );
}

export default Header;
