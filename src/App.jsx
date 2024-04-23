import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import { BsCup } from "react-icons/bs";
import CofeeCard from "./Components/CofeeCard";
import { useState } from "react";
import Header from "./Components/Header";
import Banner from "./Components/Banner";

function App() {
  const loadedCoffees = useLoaderData();
  // console.log(coffees);

  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <div style={{ backgroundImage: `url('/src/assets/more/1.png')` }}>
        <div className="lg:w-9/12 coffee mx-auto my-20">
          <div className="text-enter flex flex-col items-center justify-center">
            <p className="font-raleway font-medium  text-[#1B1A1A] py-1">
              --- Sip & Savor ---
            </p>
            <h1 className="text-[#331A15] font-rancho font-semibold drop-shadow-lg text-5xl py-3">
              Our Popular Products
            </h1>
            <Link
              to="/addCoffee"
              className="bg-[#E3B577] px-4 py-2 rounded-md border-2 border-[#331A15] hover:bg-white"
            >
              <button className="flex items-center text-lg ">
                <span className="font-rancho text-lg text-white hover:text-black">
                  Add Coffee
                </span>
                <BsCup className="text-xl ml-1 font-bold  " />
              </button>
            </Link>
          </div>
          <div className="my-20 grid sm:grid-col-1 lg:grid-cols-2 md:grid-cols-2 gap-14">
            {coffees.map((coffee) => (
              <CofeeCard
                coffees={coffees}
                setCoffees={setCoffees}
                key={coffee._id}
                coffee={coffee}
              ></CofeeCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
