import logo from "../../src/assets/more/logo1.png";
const Header = () => {
  return (
    <div className="bg-cover bg-center object-cover" style={{ backgroundImage: `url('/src/assets/more/15.jpg')` }}>
      <div className="flex items-center justify-center py-2">
        <img className="w-16" src={logo} alt="" />
        <h1 className="font-rancho text-3xl text-white">Espresso Emporium</h1>
      </div>
    </div>
  );
};

export default Header;
