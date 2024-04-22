import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import { BsCup } from "react-icons/bs";
import CofeeCard from "./Components/CofeeCard";

function App() {
  const coffees = useLoaderData();
  console.log(coffees);
  return (
    <div className="w-9/12 mx-auto my-20">
      <div className="text-enter flex flex-col items-center justify-center">
        <p className="font-raleway font-medium  text-[#1B1A1A] py-1">--- Sip & Savor ---</p>
        <h1 className="text-[#331A15] font-rancho font-semibold drop-shadow-lg text-5xl py-3">Our Popular Products</h1>
        <Link to="/addCoffee" className="bg-[#E3B577] px-4 py-2 rounded-md border-2 border-[#331A15] hover:bg-white"><button className="flex items-center text-lg "><span className="font-rancho text-lg text-white hover:text-black">Add Coffee</span> <BsCup  className="text-xl ml-1 font-bold  "/></button></Link>
        
      </div>
      <div className="my-20 grid grid-cols-2 gap-10"> 
        {coffees.map((coffee) => <CofeeCard key={coffee._id} coffee={coffee}></CofeeCard> )}
      </div>
    </div>
  );
}

export default App;
